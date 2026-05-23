import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Button } from "../../../components/ui/Button";
import { InputText } from "../../../components/ui/InputText";

type FormData = {
  name: string;
  role: string;
  image: string;
};

export default function SpeakerCreate() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (
    data: FormData
  ) => {

    try {

      const response = await fetch(
        "http://localhost:3000/pembicara",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result =
        await response.json();

      console.log(result);

      if (!response.ok) {

        alert(result.message);

        return;

      }

      alert(
        "Pembicara berhasil dibuat!"
      );

      reset();

      navigate(
        "/dashboard/pembicara"
      );

    } catch (error) {

      console.log(error);

      alert(
        "Terjadi error pada server"
      );

    }

  };

  return (

    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-8">

      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md border">

        {/* TITLE */}
        <div className="mb-6">

          <h2 className="text-3xl font-bold text-gray-800">
            Add New Pembicara
          </h2>

          <p className="text-gray-500 mt-1">
            Tambahkan data pembicara baru
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          {/* NAME */}
          <InputText
            label="Nama"
            name="name"
            register={register}
            error={errors.name?.message}
          />

          {/* ROLE */}
          <InputText
            label="Role"
            name="role"
            register={register}
            error={errors.role?.message}
          />

          {/* IMAGE */}
          <div>

            <label className="block text-sm font-medium mb-2 text-gray-700">
              Link Foto
            </label>

            <input
              type="text"
              {...register("image")}
              placeholder="https://example.com/image.jpg"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
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