import Header from "../components/Header";
import { Button } from "../components/ui/Button";
import { Collapse } from "../components/Collapse";
import SpeakerCard from "../components/SpeakerCard";
import CardProduct from "../components/CardProduct";

function App() {
  const speakers = [
    {
      name: "Dery Agung Triyadi",
      role: "Aws Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    },
    {
      name: "Sowam Habibi",
      role: "Google Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    },
    {
      name: "Lhuqita Fazry",
      role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
  ];

  const collapseItems = [
    {
      title: "Apa itu Invofest?",
      description: `Invofest adalah festival tahunan yang bertujuan untuk menginspirasi generasi muda Indonesia dalam menghadapi era digital.`,
    },
    {
      title: "Kapan dan di mana Invofest akan diselenggarakan?",
      description: `Invofest akan diselenggarakan pada tanggal 15–17 November 2024 di Jakarta Convention Center.`,
    },
    {
      title: "Siapa saja yang dapat mengikuti Invofest?",
      description: `Invofest terbuka untuk semua kalangan, terutama mahasiswa dan pelajar.`,
    },
  ];

  const cardItems = [
    {
      title: "IT Seminar",
      description:
        "Seminar nasional membahas integrasi manusia dan AI untuk pengembangan teknologi.",
    },
    {
      title: "IT Talkshow",
      description:
        "Diskusi tentang kolaborasi manusia dan AI dalam masa depan teknologi.",
    },
    {
      title: "IT Competition",
      description:
        "Kompetisi inovasi untuk generasi muda menciptakan solusi kreatif.",
    },
    {
      title: "IT Workshop",
      description:
        "Workshop AI untuk membekali keterampilan praktis generasi muda.",
    },
  ];

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-4">
        <section
          id="hero"
          className="py-10 flex flex-col md:flex-row gap-10 items-center"
        >
          <div className="md:w-2/3 flex flex-col gap-6">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
              alt="Invofest"
              className="w-80 md:w-96"
            />

            <p>
              Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”.
            </p>

            <div className="flex gap-3">
              <Button label="Info Selengkapnya" variant="primary" />
              <Button label="Hubungi Panitia" variant="outline" />
            </div>
          </div>

          <div className="md:w-1/3">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
              alt="Maskot"
            />
          </div>
        </section>

        <section className="relative py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full -z-10">
            <svg viewBox="0 0 1440 320" className="w-full">
              <path
                fill="#e9c7ce"
                d="M0,160L80,144C160,128,320,96,480,96C640,96,800,128,960,144C1120,160,1280,160,1440,160L1440,0L0,0Z"
              />
            </svg>
          </div>

          <div className="absolute bottom-0 left-0 w-full -z-10">
            <svg viewBox="0 0 1440 320" className="w-full">
              <path
                fill="#e9c7ce"
                d="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,176C1120,160,1280,160,1440,160L1440,320L0,320Z"
              />
            </svg>
          </div>

          <div className="absolute inset-0 bg-[#e9c7ce] -z-20"></div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-bold text-red-900 mb-4">
              Tentang INVOFEST
            </h2>

            <p className="text-gray-700 mb-10">
              Invofest 2025 adalah festival teknologi yang menghadirkan seminar,
              talkshow, workshop, dan kompetisi untuk generasi muda.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {cardItems.map((item) => (
                <CardProduct
                  key={item.title}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="speaker" className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {speakers.map((speaker) => (
              <SpeakerCard
                key={speaker.name}
                name={speaker.name}
                role={speaker.role}
                imageUrl={speaker.imageUrl}
              />
            ))}
          </div>
        </section>

        <section className="py-24 flex flex-col gap-3">
          {collapseItems.map((item) => (
            <Collapse
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </section>
      </div>
    </>
  );
}

export default App;