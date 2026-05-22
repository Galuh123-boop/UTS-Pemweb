import { Request, Response } from "express";
import { Category } from "../types/category.js";
import { prisma } from "../lib/db.js";

let category: Category[] = [];

// menampilkan data category
export const getCategory = async (req: Request, res: Response) => {
    //mengambil data dari database
    try{
        //jika berhasil
        const allCategory = await prisma.category.findMany({
            orderBy: {
                createdAt: "desc",
            }
        });
        res.json(allCategory);
    } catch(error){
        //jika error
        res.status(500).json({
            message: "Gagal mengambil data category",
            error, 
        });
    }
};

// menyimpan data category
export const createCategory = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;

        // validasi
        if (!name) {
            return res.status(400).json({
                message: "Nama category harus diisi"
            });
        }

        // simpan ke database
        const newCategory = await prisma.category.create({
            data: {
                name
            }
        });

        // response berhasil
        return res.status(201).json({
            message: "Data berhasil disimpan",
            category: newCategory
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Terjadi error pada server"
        });
    }
};

// menampilkan data category berdasarkan id
export const showCategory = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id)) {
            return res.status(400).json({
                message: "ID tidak valid"
            });
        }

        const category = await prisma.category.findUnique({
            where: {
                id
            }
        });

        if (!category) {
            return res.status(404).json({
                message: "Category tidak ditemukan"
            });
        }

        return res.status(200).json({
            message: "Detail category",
            category
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Terjadi error pada server"
        });
    }
};

// mengupdate data category berdasarkan id
export const updateCategory = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        // cek category
        const existingCategory = await prisma.category.findUnique({
            where: {
                id
            }
        });

        if (!existingCategory) {
            return res.status(404).json({
                message: "Category tidak ditemukan",
            });
        }

        // update category
        const updatedCategory = await prisma.category.update({
            where: {
                id
            },
            data: {
                name: req.body.name ?? existingCategory.name
            }
        });

        return res.status(200).json({
            message: "Category berhasil diupdate",
            category: updatedCategory
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Terjadi error pada server"
        });
    }
};

// menghapus data category berdasarkan id
export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        // cek category
        const existingCategory = await prisma.category.findUnique({
            where: {
                id
            }
        });

        if (!existingCategory) {
            return res.status(404).json({
                message: "Category tidak ditemukan"
            });
        }

        // hapus category
        await prisma.category.delete({
            where: {
                id
            }
        });

        return res.status(200).json({
            message: "Category berhasil dihapus"
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Terjadi error pada server"
        });
    }
};