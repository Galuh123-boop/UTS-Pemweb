import { Request, Response } from "express";
import { Pembicara } from "../types/pembicara.js";
import { prisma } from "../lib/db.js";

let pembicara: Pembicara[] = [];

// menampilkan data pembicara
export const getPembicara = async (
  req: Request,
  res: Response
) => {

  try {

    // ambil data dari database
    const allPembicara =
      await prisma.pembicara.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });

    // response berhasil
    return res.status(200).json(
      allPembicara
    );

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      message:
        "Gagal mengambil data pembicara",
    });

  }

};

// menyimpan data pembicara
export const createPembicara = async (req: Request, res: Response) => {
    try {
        const { name, role, image } = req.body;

        // validasi
        if (!name || !role || !image) {
            return res.status(400).json({
                message: "Name, role, dan image harus diisi"
            });
        }

        // simpan ke database
        const newPembicara = await prisma.pembicara.create({
            data: {
                name,
                role,
                image
            }
        });

        // response berhasil
        return res.status(201).json({
            message: "Data berhasil disimpan",
            pembicara: newPembicara
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Terjadi error pada server"
        });
    }
};

// menampilakn data pembicara berdasarkan id
export const showPembicara = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        const pembicara = await prisma.pembicara.findUnique({
            where: {
                id
            }
        });

        // jika data tidak ditemukan
        if (!pembicara) {
            return res.status(404).json({
                message: "Pembicara tidak ditemukan",
            });
        }

        // response berhasil
        return res.status(200).json({
            message: "Detail pembicara",
            pembicara,
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Terjadi error pada server"
        });
    }
};

// mengupdate data pembicara berdasarkan id
export const updatePembicara = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        // cek data pembicara
        const existingPembicara = await prisma.pembicara.findUnique({
            where: {
                id
            }
        });

        // jika data tidak ditemukan
        if (!existingPembicara) {
            return res.status(404).json({
                message: "Pembicara tidak ditemukan",
            });
        }

        // update data
        const updatedPembicara = await prisma.pembicara.update({
            where: {
                id
            },
            data: {
                name: req.body.name ?? existingPembicara.name,
                role: req.body.role ?? existingPembicara.role,
                image: req.body.image ?? existingPembicara.image,
            }
        });

        // response berhasil
        return res.status(200).json({
            message: "Data pembicara berhasil diupdate",
            pembicara: updatedPembicara,
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Terjadi error pada server"
        });
    }
};

// menghapus data pembicara berdasarkan id
export const deletePembicara = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        // cek data pembicara
        const existingPembicara = await prisma.pembicara.findUnique({
            where: {
                id
            }
        });

        // jika tidak ditemukan
        if (!existingPembicara) {
            return res.status(404).json({
                message: "Pembicara tidak ditemukan"
            });
        }

        // hapus data
        await prisma.pembicara.delete({
            where: {
                id
            }
        });

        // response berhasil
        return res.status(200).json({
            message: "Data pembicara berhasil dihapus",
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Terjadi error pada server"
        });
    }
};