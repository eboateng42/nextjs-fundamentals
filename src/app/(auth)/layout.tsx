import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <nav className="flex gap-4 p-4 border">
          <Link href={"/login"}>Sign In</Link>
          <Link href={"/register"}>Create Account</Link>
          <Link href={"/reset-password"}>Reset Password</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
