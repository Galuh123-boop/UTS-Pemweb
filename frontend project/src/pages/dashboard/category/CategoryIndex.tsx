import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Category {
  id: number;
  name: string;
}

export default function CategoryIndex() {

  const [categories, setCategories] =
    useState<Category[]>([]);

  const getCategories = async () => {

    try {

      const response = await fetch(
        "http://localhost:3000/category"
      );

      const data = await response.json();

      setCategories(data);

    } catch (error) {

      console.log(error);

      alert("Gagal mengambil data category");

    }

  };

  useEffect(() => {

    getCategories();

  }, []);

  const handleDelete = async (
    id: number
  ) => {

    const confirmDelete =
      confirm("Yakin ingin menghapus category?");

    if (!confirmDelete) return;

    try {

      const response = await fetch(
        `http://localhost:3000/category/${id}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();

      if (!response.ok) {

        alert(result.message);

        return;

      }

      alert(result.message);

      // refresh data
      getCategories();

    } catch (error) {

      console.log(error);

      alert("Gagal menghapus category");

    }

  };

  return (

    <div className="p-8 min-h-screen">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">

        <div>

          <h1 className="text-3xl font-bold text-gray-800">
            Kategori
          </h1>

          <p className=" mt-1">
            Daftar kategori event yang tersedia
          </p>

        </div>

        <Link
          to="/dashboard/category/create"
          className="bg-red-700 hover:bg-red-800 text-white px-5 py-3 rounded-xl font-medium shadow-md transition duration-200 w-fit"
        >
          + Tambah Kategori
        </Link>

      </div>

      <div className="grid gap-4">

        {categories.length > 0 ? (

          categories.map((category) => (

            <div
              key={category.id}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-200 flex justify-between items-center"
            >

              {/* LEFT */}
              <div>

                <h2 className="text-lg font-semibold text-gray-800">
                  {category.name}
                </h2>

                <p className="text-sm text-gray-400">
                  Category ID : {category.id}
                </p>

              </div>

              {/* RIGHT BUTTON */}
              <div className="flex gap-3">

                {/* EDIT */}
                <Link
                  to={`/dashboard/category/edit/${category.id}`}
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition duration-200"
                >
                  Edit
                </Link>

                {/* DELETE */}
                <button
                  onClick={() =>
                    handleDelete(category.id)
                  }
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition duration-200"
                >
                  Delete
                </button>

              </div>

            </div>

          ))

        ) : (

          <div className="bg-white border rounded-2xl p-10 shadow-sm text-center">

            <h2 className="text-lg font-semibold text-gray-600">
              Belum ada category
            </h2>

            <p className="text-gray-400 mt-2">
              Silakan tambahkan category baru
            </p>

          </div>

        )}

      </div>

    </div>

  );

}