import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import { Button } from "../../../components/ui/Button";
import { InputText } from "../../../components/ui/InputText";

type FormData = {
  name: string;
  role: string;
  image: string;
};

export default function PembicaraUpdate() {

  const { id } = useParams();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {

    const getPembicara = async () => {

      try {

        const response = await fetch(
          `http://localhost:3000/pembicara/${id}`
        );

        const result =
          await response.json();

        console.log(result);

        // backend:
        // { message, pembicara }

        setValue(
          "name",
          result.pembicara.name
        );

        setValue(
          "role",
          result.pembicara.role
        );

        setValue(
          "image",
          result.pembicara.image
        );

      } catch (error) {

        console.log(error);

        alert(
          "Gagal mengambil detail pembicara"
        );

      }

    };

    getPembicara();

  }, [id, setValue]);

  const onSubmit = async (
    data: FormData
  ) => {

    try {

      const response = await fetch(
        `http://localhost:3000/pembicara/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result =
        await response.json();

      if (!response.ok) {

        alert(result.message);

        return;

      }

      alert(
        "Pembicara berhasil diupdate"
      );

      navigate(
        "/dashboard/pembicara"
      );

    } catch (error) {

      console.log(error);

      alert(
        "Gagal update pembicara"
      );

    }

  };

  return (

    <div className="min-h-screen p-8 flex justify-center items-start bg-gray-100">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-md border">

        {/* HEADER */}
        <div className="mb-6">

          <h1 className="text-3xl font-bold text-gray-800">
            Edit Pembicara
          </h1>

          <p className="text-gray-500 mt-1">
            Ubah data pembicara
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          {/* NAME */}
          <InputText
            label="Nama Pembicara"
            name="name"
            register={register}
            error={errors.name?.message}
          />

          {/* ROLE */}
          <div>

            <label className="block mb-2 font-medium text-gray-700">
              Role
            </label>

            <input
              type="text"
              {...register("role")}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
            />

          </div>

          {/* IMAGE */}
          <div>

            <label className="block mb-2 font-medium text-gray-700">
              Link Image
            </label>

            <input
              type="text"
              {...register("image")}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
              placeholder="https://example.com/image.jpg"
            />

          </div>

          {/* PREVIEW IMAGE */}
          <div>

            <p className="text-sm text-gray-500 mb-2">
              Preview Image
            </p>

            <img
              src={
                watch("image") ||
                "https://placehold.co/300x200"
              }
              alt="preview"
              className="w-full h-52 object-cover rounded-xl border"
            />

          </div>

          {/* BUTTON */}
          <Button
            label="Update Pembicara"
            type="submit"
            variant="primary"
            className="w-full"
          />

        </form>

      </div>

    </div>

  );

}