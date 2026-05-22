import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type EventType = {
  id: number;
  name: string;
  location: string;
  date: string;
};

export default function EventIndex() {

  const [events, setEvents] =
    useState<EventType[]>([]);

  const getEvents = async () => {

    try {

      const response = await fetch(
        "http://localhost:3000/events"
      );

      const result =
        await response.json();

      setEvents(result);

    } catch (error) {

      console.log(error);

      alert("Gagal mengambil data event");

    }

  };

  useEffect(() => {

    getEvents();

  }, []);

  const handleDelete = async (
    id: number
  ) => {

    const confirmDelete =
      confirm("Yakin ingin menghapus event?");

    if (!confirmDelete) return;

    try {

      const response = await fetch(
        `http://localhost:3000/events/${id}`,
        {
          method: "DELETE",
        }
      );

      const result =
        await response.json();

      alert(result.message);

      getEvents();

    } catch (error) {

      console.log(error);

      alert("Gagal menghapus event");

    }

  };

  return (

    <div className="p-8 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-3xl font-bold text-gray-800">
            Event
          </h1>

          <p className="text-gray-500 mt-1">
            Daftar event yang tersedia
          </p>

        </div>

        <Link
          to="/dashboard/event/create"
          className="bg-red-700 hover:bg-red-800 text-white px-5 py-3 rounded-xl font-medium shadow-md transition duration-200"
        >
          + Tambah Event
        </Link>

      </div>

      {/* LIST EVENT */}
      <div className="grid gap-4">

        {events.length > 0 ? (

          events.map((event) => (

            <div
              key={event.id}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex justify-between items-center"
            >

              {/* LEFT */}
              <div>

                <h2 className="text-lg font-semibold text-gray-800">
                  {event.name}
                </h2>

                <p className="text-sm text-gray-500">
                  📍 {event.location}
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  {event.date
                    ? new Date(event.date).toLocaleDateString()
                    : "Tanggal tidak tersedia"}
                </p>
              </div>

              {/* RIGHT */}
              <div className="flex gap-3">

                <Link
                  to={`/dashboard/event/edit/${event.id}`}
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
                >
                  Edit
                </Link>

                <button
                  onClick={() =>
                    handleDelete(event.id)
                  }
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                >
                  Delete
                </button>

              </div>

            </div>

          ))

        ) : (

          <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm text-center">

            <h2 className="text-lg font-semibold text-gray-600">
              Belum ada event
            </h2>

            <p className="text-gray-400 mt-2">
              Silakan tambahkan event baru
            </p>

          </div>

        )}

      </div>

    </div>

  );

}