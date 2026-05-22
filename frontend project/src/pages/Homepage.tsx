import { Button } from "../components/ui/Button";
import { Collapse } from "../components/Collapse";
import CardProduct from "../components/CardProduct";

export default function Hompage() {
  const collapseItems = [
    {
      title: "Apa itu Invofest?",
      description:
        'Invofest (Informatics Vocational Festival) adalah festival tahunan yang diakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri, yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital.',
    },
    {
      title: "Kapan dan dimana Invofest akan diselenggarakan?",
      description:
        "INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 November 2025. Untuk acara workshop, seminar, talkshow diadakan secara Offline di kampus 1 Universitas Harkat Negeri dan kompetisi diadakan secara Online.",
    },
    {
      title: "Apakah ada biaya pendaftaran di INVOFEST?",
      description: "Semua kegiatan dipastikan berbayar ya teman-teman.",
    },
  ];

  const cardItems = [
    {
      title: "IT Seminar",
      description:
        'Seminar nasional ini membahas "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif".',
    },
    {
      title: "IT Talkshow",
      description:
        'Talkshow "Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan".',
    },
    {
      title: "IT Competition",
      description:
        'Kompetisi "From Creation to Innovation" untuk generasi muda.',
    },
    {
      title: "IT Workshop",
      description:
        "Workshop AI untuk Gen Z menciptakan solusi berkelanjutan.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 font-sans">
      <section
        id="hero"
        className="py-16 flex flex-col md:flex-row gap-10 justify-between items-center"
      >
        <div className="md:w-2/3 flex flex-col gap-6">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
            alt="Invofest Text"
            className="w-80 md:w-96"
          />

          <p className="text-gray-700 leading-relaxed">
            <strong>Invofest (Informatics Vocational Festival)</strong> adalah
            festival tahunan yang bertujuan untuk menginspirasi dan
            memberdayakan generasi muda Indonesia dalam menghadapi era digital.
            Dengan mengusung tema{" "}
            <span className="italic">
              "Beyond Limits, Beyond Intelligence: Innovate for a Smarter
              Tomorrow"
            </span>.
          </p>

          <div className="flex gap-3">
            <Button label="Info Selengkapnya" variant="primary" />
            <Button label="Hubungi Panitia" variant="outline" />
          </div>
        </div>

        <div className="md:w-1/3 flex justify-center">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
            alt="Mascot"
            className="w-64 md:w-full"
          />
        </div>
      </section>

      <section id="about-and-cards" className="py-16 border-t border-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">
            Tentang INVOFEST
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base">
            Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik Informatika Universitas Harkat Negeri, adalah festival tahunan yang bertujuan untuk menginspirasi generasi muda. 
            Menghadirkan berbagai kegiatan menarik seperti kompetisi IT, workshop, dan seminar nasional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-3">
          {cardItems.map((item, index) => (
            <CardProduct
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section id="faq" className="py-20 flex flex-col gap-4 px-3">
        <h2 className="text-3xl font-bold text-center text-red-900 mb-8">
          Punya Pertanyaan? Lihat Disini
        </h2>

        <div className="max-w-4xl mx-auto w-full flex flex-col gap-3">
          {collapseItems.map((item, index) => (
            <Collapse
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}