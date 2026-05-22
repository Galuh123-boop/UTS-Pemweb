export default function BiodataIndex() {

  const biodata = {
    nama: "Galuh Gunawan",
    nim: "24090081",
    kelas: "4 C",
    jurusan: "Teknik Informatika",
    universitas: "Universitas Harkat Negeri",
    email: "gegewepe438@email.com",
    phone: "088232405191",
    alamat: "Desa Pucangluwuk Kec.Bojong Kab.Tegal Jawa Tengah",
    image:
      "data:image/jpeg;base64,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",
  };

  return (

    <div className="min-h-screen p-8 bg-gray-100">

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-gray-800">
          Biodata
        </h1>

        <p className="text-gray-500 mt-1">
          Informasi biodata developer
        </p>

      </div>

      {/* CARD */}
      <div className="bg-white rounded-3xl shadow-md border p-8 max-w-3xl">

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">

          {/* FOTO */}
          <div>

            <img
              src={biodata.image}
              alt="profile"
              className="w-52 h-52 rounded-2xl object-cover border-4 border-red-100 shadow"
            />

          </div>

          {/* BIODATA */}
          <div className="flex-1 space-y-4">

            <div>

              <h2 className="text-3xl font-bold text-gray-800">
                {biodata.nama}
              </h2>

              <p className="text-red-700 font-medium mt-1">
                Mahasiswa Teknik Informatika
              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">

              <div className="bg-gray-50 p-4 rounded-xl border">

                <p className="text-sm text-gray-400">
                  NIM
                </p>

                <h3 className="font-semibold text-gray-700 mt-1">
                  {biodata.nim}
                </h3>

              </div>

              <div className="bg-gray-50 p-4 rounded-xl border">

                <p className="text-sm text-gray-400">
                  Kelas
                </p>

                <h3 className="font-semibold text-gray-700 mt-1">
                  {biodata.kelas}
                </h3>

              </div>

              <div className="bg-gray-50 p-4 rounded-xl border">

                <p className="text-sm text-gray-400">
                  Jurusan
                </p>

                <h3 className="font-semibold text-gray-700 mt-1">
                  {biodata.jurusan}
                </h3>

              </div>

              <div className="bg-gray-50 p-4 rounded-xl border">

                <p className="text-sm text-gray-400">
                  Universitas
                </p>

                <h3 className="font-semibold text-gray-700 mt-1">
                  {biodata.universitas}
                </h3>

              </div>

              <div className="bg-gray-50 p-4 rounded-xl border">

                <p className="text-sm text-gray-400">
                  Email
                </p>

                <h3 className="font-semibold text-gray-700 mt-1">
                  {biodata.email}
                </h3>

              </div>

              <div className="bg-gray-50 p-4 rounded-xl border">

                <p className="text-sm text-gray-400">
                  No. HP
                </p>

                <h3 className="font-semibold text-gray-700 mt-1">
                  {biodata.phone}
                </h3>

              </div>

            </div>

            {/* ALAMAT */}
            <div className="bg-red-50 border border-red-100 rounded-xl p-4 mt-4">

              <p className="text-sm text-gray-400">
                Alamat
              </p>

              <h3 className="font-semibold text-gray-700 mt-1">
                {biodata.alamat}
              </h3>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}