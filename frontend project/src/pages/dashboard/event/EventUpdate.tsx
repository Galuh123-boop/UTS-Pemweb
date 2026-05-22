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
  location: string;
  date: string;
};

export default function EventUpdate() {

  const { id } = useParams();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  // =========================
  // GET DETAIL EVENT
  // =========================
  useEffect(() => {

    const getEvent = async () => {

      try {

        const response = await fetch(
          `http://localhost:3000/event/${id}`
        );

        const result =
          await response.json();

        console.log(result);

        // backend:
        // { message, event }

        setValue(
          "name",
          result.event.name
        );

        setValue(
          "location",
          result.event.location
        );

        // format date supaya masuk input date
        setValue(
          "date",
          result.event.date.split("T")[0]
        );

      } catch (error) {

        console.log(error);

        alert(
          "Gagal mengambil detail event"
        );

      }

    };

    getEvent();

  }, [id, setValue]);

  // =========================
  // UPDATE EVENT
  // =========================
  const onSubmit = async (
    data: FormData
  ) => {

    try {

      const response = await fetch(
        `http://localhost:3000/event/${id}`,
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

      alert("Event berhasil diupdate");

      navigate("/dashboard/event");

    } catch (error) {

      console.log(error);

      alert("Gagal update event");

    }

  };

  return (

    <div className="min-h-screen p-8 flex justify-center items-start bg-gray-100">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-md border">

        {/* HEADER */}
        <div className="mb-6">

          <h1 className="text-3xl font-bold text-gray-800">
            Edit Event
          </h1>

          <p className="text-gray-500 mt-1">
            Ubah data event
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          {/* NAME */}
          <InputText
            label="Nama Event"
            name="name"
            register={register}
            error={errors.name?.message}
          />

          {/* LOCATION */}
          <div>

            <label className="block mb-2 font-medium text-gray-700">
              Location
            </label>

            <input
              type="text"
              {...register("location")}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
            />

          </div>

          {/* DATE */}
          <div>

            <label className="block mb-2 font-medium text-gray-700">
              Date
            </label>

            <input
              type="date"
              {...register("date")}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
            />

          </div>

          {/* BUTTON */}
          <Button
            label="Update Event"
            type="submit"
            variant="primary"
            className="w-full"
          />

        </form>

      </div>

    </div>

  );

}