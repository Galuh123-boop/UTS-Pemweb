import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "../../../components/ui/Button";
import { InputText } from "../../../components/ui/InputText";

type FormData = {
  name: string;
};

export default function CategoryUpdate() {

  const { id } = useParams();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {

    const getCategory = async () => {

      try {

        const response = await fetch(
          `http://localhost:3000/category/${id}`
        );

        const result = await response.json();

        // BACKEND KAMU:
        // response.data.category
        setValue(
          "name",
          result.category.name
        );

      } catch (error) {

        console.log(error);

        alert("Gagal mengambil detail category");

      }

    };

    getCategory();

  }, [id, setValue]);

  const onSubmit = async (
    data: FormData
  ) => {

    try {

      const response = await fetch(
        `http://localhost:3000/category/${id}`,
        {
          method: "PUT",
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

      alert("Category berhasil diupdate");

      navigate("/dashboard/category");

    } catch (error) {

      console.log(error);

      alert("Gagal update category");

    }

  };

  return (

    <div className="min-h-screen p-8 flex justify-center items-start">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-md border">

        {/* HEADER */}
        <div className="mb-6">

          <h1 className="text-3xl font-bold text-gray-800">
            Update Category
          </h1>

          <p className="text-gray-500 mt-1">
            Ubah data category event
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          <InputText
            label="Nama Category"
            name="name"
            register={register}
            error={errors.name?.message}
          />

          <Button
            label="Update Category"
            type="submit"
            variant="primary"
            className="w-full"
          />

        </form>

      </div>

    </div>

  );

}