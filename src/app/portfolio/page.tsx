import Link from "next/link";

function Portfolio() {
  const portfolios = [
    { id: "1", name: "API Development", desc: "This is an API" },
    { id: "2", name: "Backend Development", desc: "This is a backend system" },
    { id: "3", name: "Website", desc: "This is a website" },
  ];
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Portfolio - View Our Outstanding Projects</h1>
      <div className="grid gap-4">
        {portfolios.map((portfolio) => (
          <div key={portfolio.id} className="border p-4">
            <h2>{portfolio.name}</h2>
            <p>{portfolio.desc}</p>

            <Link href={`/portfolio/${portfolio.id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
