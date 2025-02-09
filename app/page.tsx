"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center h-screen hover:transform hover:scale-105 transition-transform">
      <h1 className="text-6xl my-3">Ana Sayfa</h1>

      <button
        onClick={() => {
          document.querySelector("main")?.classList.add("animate-fade-out");
          setTimeout(() => router.push("/yarisma"), 500); // animasyonun bitmesini beklemek için 500ms bekleyin
        }}
        className="rounded-lg border py-3 px-5"
      >
        Yarışmaya Başla
      </button>
    </main>
  );
}
