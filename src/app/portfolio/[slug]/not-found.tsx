import Link from "next/link";
import Footer from "@/sections/Footer";

export default function ProjectNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background-dark px-6 pt-32 text-center text-white">
      <p className="text-label text-accent">404</p>
      <h1 className="text-display-lg mt-4 text-4xl font-bold uppercase">Project Not Found</h1>
      <p className="mt-4 text-white/50">This case study doesn&apos;t exist or was moved.</p>
      <Link
        href="/portfolio"
        className="mt-10 rounded-full bg-accent px-8 py-3 text-sm font-medium text-white"
      >
        Back to Portfolio
      </Link>
      <Footer />
    </main>
  );
}
