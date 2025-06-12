"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Contact() {
  const router = useRouter();
  // const pathName = usePathname();
  // const searchParams = useSearchParams();
  // console.log(router);
  // console.log(pathName);
  // console.log(searchParams);
  // console.log(searchParams.get("name"));
  // console.log(searchParams.getAll("name"));
  // console.log(searchParams.has("age"));

  const handleNavigation = () => router.push("/");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Contact Us - We Are Easily Accessible</h1>
      <button onClick={handleNavigation}>Navigate to Home</button>
    </div>
  );
}

export default Contact;
