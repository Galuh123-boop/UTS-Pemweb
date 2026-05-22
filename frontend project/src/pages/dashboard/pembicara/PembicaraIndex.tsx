import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type PembicaraType = {
  id: number;
  name: string;
  role: string;
  image: string;
};

export default function PembicaraIndex() {

  const [pembicara, setPembicara] =
    useState<PembicaraType[]>([]);

  const getPembicara = async () => {

    try {

      const response = await fetch(
        "http://localhost:3000/pembicara"
      );

      const result =
        await response.json();

      console.log(result);

      // backend langsung array
      if (Array.isArray(result)) {

        setPembicara(result);

      }

      // backend return { pembicara: [] }
      else if (result.pembicara) {

        setPembicara(
          result.pembicara
        );

      }

      else {

        setPembicara([]);

      }

    } catch (error) {

      console.log(error);

      alert(
        "Gagal mengambil data pembicara"
      );

    }

  };

  useEffect(() => {

    getPembicara();

  }, []);

  const handleDelete = async (
    id: number
  ) => {

    const confirmDelete =
      confirm(
        "Yakin ingin menghapus pembicara?"
      );

    if (!confirmDelete) return;

    try {

      const response = await fetch(
        `http://localhost:3000/pembicara/${id}`,
        {
          method: "DELETE",
        }
      );

      const result =
        await response.json();

      alert(result.message);

      // refresh data
      getPembicara();

    } catch (error) {

      console.log(error);

      alert(
        "Gagal menghapus pembicara"
      );

    }

  };

  return (

    <div className="p-8 min-h-screen ">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-3xl font-bold text-gray-800">
            Pembicara
          </h1>

          <p className="text-gray-500 mt-1">
            Daftar pembicara yang tersedia
          </p>

        </div>

        <Link
          to="/dashboard/pembicara/create"
          className="bg-red-700 hover:bg-red-800 text-white px-5 py-3 rounded-xl font-medium shadow-md transition duration-200"
        >
          + Tambah Pembicara
        </Link>

      </div>

      {/* LIST PEMBICARA */}
      <div className="grid gap-4">

        {pembicara.length > 0 ? (

          pembicara.map((item) => (

            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex justify-between items-center gap-4"
            >

              {/* LEFT */}
              <div className="flex items-center gap-4">

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl border"
                />

                {/* TEXT */}
                <div>

                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    🎤 {item.role}
                  </p>

                </div>

              </div>

              {/* RIGHT */}
              <div className="flex gap-3">

                <Link
                  to={`/dashboard/pembicara/edit/${item.id}`}
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
                >
                  Edit
                </Link>

                <button
                  onClick={() =>
                    handleDelete(item.id)
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
              Belum ada pembicara
            </h2>

            <p className="text-gray-400 mt-2">
              Silakan tambahkan pembicara baru
            </p>

          </div>

        )}

      </div>

    </div>

  );

}