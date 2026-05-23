import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "../../../components/ui/Button";
import { InputText } from "../../../components/ui/InputText";

type FormData = {
  name: string;
};

type Category = {
  id: number;
  name: string;
};

export default function CategoryIndex() {

  const [categories, setCategories] = useState<Category[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  // ambil data category
  const getCategories = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/category"
      );

      const data = await response.json();

      setCategories(data);

    } catch (error) {
      console.log(error);
    }
  };

  // simpan category
  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(
        "http://localhost:3000/category",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        alert(result.message);
        return;
      }

      alert("Kategori berhasil dibuat!");

      reset();

      // refresh data category
      getCategories();

    } catch (error) {
      console.log(error);

      alert("Terjadi error");
    }
  };

  // pertama kali halaman dibuka
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="p-4">

      <h1 className="text-2xl font-bold mb-4">
        Kategori
      </h1>

      <p className="mb-4">
        Daftar kategori yang tersedia.
      </p>

      {/* FORM TAMBAH CATEGORY */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md border mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Tambah Kategori
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <InputText
            label="Nama"
            name="name"
            register={register}
            error={errors.name?.message}
          />

          <Button
            label="+ Simpan"
            type="submit"
            variant="primary"
            className="w-full"
          />
        </form>
      </div>

      {/* LIST CATEGORY */}
      <div className="space-y-3">

        {categories.length > 0 ? (
          categories.map((category) => (
            <div
              key={category.id}
              className="border p-4 rounded bg-white shadow-sm flex justify-between items-center"
            >
              <h2 className="font-semibold">
                {category.name}
              </h2>

              <div className="flex gap-2">

                <button
                  className="px-3 py-1 bg-blue-600 text-white rounded"
                >
                  Edit
                </button>

                <button
                  className="px-3 py-1 bg-red-600 text-white rounded"
                >
                  Delete
                </button>

              </div>
            </div>
          ))
        ) : (
          <p>Belum ada kategori</p>
        )}

      </div>
    </div>
  );
}