import { Request, Response } from "express";
import { Event } from "../types/event.js";
import { prisma } from "../lib/db.js";

let events: Event[] = [];

// menampilkan data event
export const getEvents = async (
    req: Request,
    res: Response
) => {

    // mengambil data dari database
    try {

        // jika berhasil
        const allEvents = await prisma.event.findMany({
            orderBy: {
                createdAt: "desc",
            }
        });

        res.json(allEvents);

    } catch (error) {

        // jika error
        res.status(500).json({
            message: "Gagal mengambil data event",
            error,
        });

    }
};

// menyimpan data event
export const createEvent = async (req: Request, res: Response) => {
    try {
        const { name, date, location, description, categoryId } = req.body;

        if (!name || !date || !location) {
            return res.status(400).json({
                message: "Nama, Date, dan Location harus diisi"
            });
        }

        const newEvent = await prisma.event.create({
            data: {
                name,
                date: new Date(date),
                location,
                description: description || "",
                categoryId
            }
        });

        return res.status(201).json({
            message: "Data berhasil disimpan",
            event: newEvent
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Terjadi error"
        });
    }
};
// menampilakn data event berdasarkan id
export const showEvent = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        const event = await prisma.event.findUnique({
            where: {
                id
            }
        });

        if (!event) {
            return res.status(404).json({
                message: "Event tidak ditemukan",
            });
        }

        return res.status(200).json({
            message: "Detail event",
            event,
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Terjadi error pada server"
        });
    }
};

// mengupdate data event berdasarkan id
export const updateEvent = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        // cek event
        const existingEvent = await prisma.event.findUnique({
            where: {
                id
            }
        });

        if (!existingEvent) {
            return res.status(404).json({
                message: "Event tidak ditemukan",
            });
        }

        // update event
        const updatedEvent = await prisma.event.update({
            where: {
                id
            },
            data: {
                name: req.body.name ?? existingEvent.name,
                date: req.body.date
                    ? new Date(req.body.date)
                    : existingEvent.date,
                location: req.body.location ?? existingEvent.location,
                description:
                    req.body.description ?? existingEvent.description,
            }
        });

        return res.status(200).json({
            message: "Event berhasil diupdate",
            event: updatedEvent
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Terjadi error pada server"
        });
    }
};

// menghapus data event berdasarkan id
export const deleteEvent = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        // cek apakah event ada
        const existingEvent = await prisma.event.findUnique({
            where: {
                id
            }
        });

        if (!existingEvent) {
            return res.status(404).json({
                message: "Event tidak ditemukan"
            });
        }

        // hapus event
        await prisma.event.delete({
            where: {
                id
            }
        });

        return res.status(200).json({
            message: "Event berhasil dihapus"
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Terjadi error pada server"
        });
    }
};