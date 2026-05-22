import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "../../../components/ui/Button";
import { InputText } from "../../../components/ui/InputText";

type FormData = {
  name: string;
  location: string;
  date: string;
  description: string;
  categoryId: number;
};

type CategoryType = {
  id: number;
  name: string;
};

export default function EventCreate() {
  const [categories, setCategories] =
    useState<CategoryType[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  // ambil data category
  useEffect(() => {
    fetch("http://localhost:3000/category")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) =>
        console.log(error)
      );
  }, []);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(
        "http://localhost:3000/events",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            ...data,
            categoryId: Number(
              data.categoryId
            ),
          }),
        }
      );

      const result =
        await response.json();

      if (!response.ok) {
        alert(result.message);
        return;
      }

      console.log(result);

      alert("Event berhasil dibuat!");

      reset();
    } catch (error) {
      console.log(error);

      alert("Terjadi error");
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 border">
        <h2 className="text-lg font-semibold mb-4">
          Add New Event
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <InputText
            label="Nama Event"
            name="name"
            register={register}
            error={errors.name?.message}
          />

          <InputText
            label="Lokasi"
            name="location"
            register={register}
            error={errors.location?.message}
          />

          <div>
            <label className="block text-sm mb-1">
              Tanggal
            </label>

            <input
              type="date"
              {...register("date")}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">
              Deskripsi
            </label>

            <textarea
              {...register(
                "description"
              )}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* CATEGORY */}
          <div>
            <label className="block text-sm mb-1">
              Category
            </label>

            <select
              {...register("categoryId")}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">
                Pilih Category
              </option>

              {categories.map(
                (category) => (
                  <option
                    key={category.id}
                    value={category.id}
                  >
                    {category.id}
                  </option>
                )
              )}
            </select>
          </div>

          <Button
            label="+ Simpan"
            type="submit"
            variant="primary"
            className="w-full"
          />
        </form>
      </div>
    </div>
  );
}