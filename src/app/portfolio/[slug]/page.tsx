import Link from "next/link";

async function PortfolioDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log(slug, "slug");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Portfolio Details</h1>

      <div className="flex gap-4 ">
        <Link className="border p-2" href={"/"}>
          Navigate To Home
        </Link>
        <Link className="border p-2" href={"/portfolio"}>
          Navigate To Portfolios Page
        </Link>
      </div>
    </div>
  );
}

export default PortfolioDetails;
