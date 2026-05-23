import { useEffect, useState } from "react";
import {
  CalendarDays,
  LayoutGrid,
  Mic2,
} from "lucide-react";

export default function DashboardIndex() {

  const [totalCategory, setTotalCategory] =
    useState(0);

  const [totalEvent, setTotalEvent] =
    useState(0);

  const [totalPembicara, setTotalPembicara] =
    useState(0);

  // =========================
  // GET DASHBOARD DATA
  // =========================
  useEffect(() => {

    const fetchDashboard =
      async () => {

        try {

          // CATEGORY
          const categoryResponse =
            await fetch(
              "http://localhost:3000/category"
            );

          const categoryData =
            await categoryResponse.json();

          // EVENT
          const eventResponse =
            await fetch(
              "http://localhost:3000/events"
            );

          const eventData =
            await eventResponse.json();

          // PEMBICARA
          const pembicaraResponse =
            await fetch(
              "http://localhost:3000/pembicara"
            );

          const pembicaraData =
            await pembicaraResponse.json();

          // SET TOTAL
          setTotalCategory(
            Array.isArray(categoryData)
              ? categoryData.length
              : 0
          );

          setTotalEvent(
            Array.isArray(eventData)
              ? eventData.length
              : 0
          );

          setTotalPembicara(
            Array.isArray(
              pembicaraData
            )
              ? pembicaraData.length
              : 0
          );

        } catch (error) {

          console.log(error);

          alert(
            "Gagal mengambil data dashboard"
          );

        }

      };

    fetchDashboard();

  }, []);

  const dashboardData = [
    {
      title: "Kategori Event",
      total: totalCategory,
      icon: <LayoutGrid size={40} />,
      color:
        "from-red-500 to-red-700",
      description:
        "Total kategori event yang tersedia",
    },
    {
      title: "Event",
      total: totalEvent,
      icon: (
        <CalendarDays size={40} />
      ),
      color:
        "from-orange-500 to-red-600",
      description:
        "Jumlah seluruh event yang aktif",
    },
    {
      title: "Pembicara",
      total: totalPembicara,
      icon: <Mic2 size={40} />,
      color:
        "from-pink-500 to-rose-600",
      description:
        "Pembicara yang terdaftar",
    },
  ];

  return (

    <div className="min-h-screen p-8 bg-gray-100">

      {/* HEADER */}
      <div className="mb-10">

        <h1 className="text-4xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2 text-lg">
          Selamat datang di dashboard
          Invofest
        </p>

      </div>

      {/* CARD */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {dashboardData.map(
          (item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
            >

              {/* TOP */}
              <div className="flex justify-between items-start">

                <div>

                  <p className="text-gray-400 text-sm">
                    {item.title}
                  </p>

                  <h2 className="text-4xl font-bold text-gray-800 mt-2">
                    {item.total}
                  </h2>

                </div>

                {/* ICON */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-br ${item.color} text-white flex items-center justify-center shadow-lg`}
                >
                  {item.icon}
                </div>

              </div>

              {/* DESC */}
              <p className="text-gray-500 mt-6 leading-relaxed">
                {item.description}
              </p>

            </div>

          )
        )}

      </div>

      {/* WELCOME */}
      <div className="mt-10 bg-linear-to-r from-red-700 to-red-500 rounded-3xl p-8 text-white shadow-lg">

        <h2 className="text-3xl font-bold">
          Invofest Event Management
        </h2>

        <p className="mt-3 text-red-100 max-w-2xl leading-relaxed">
          Kelola kategori event,
          event, dan pembicara dengan
          mudah melalui dashboard yang
          modern dan responsif.
        </p>

      </div>

    </div>

  );

}