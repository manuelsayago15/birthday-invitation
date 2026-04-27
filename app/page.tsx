import Hero from "@/components/Hero";
import Details from "@/components/Details";
import Countdown from "@/components/Countdown";

export default function Home() {
  return (
    <main>
      <Hero />
      <Details />
      <Countdown />
      <section className="bg-black flex items-center justify-center">
        <p className="text-white text-4xl">1</p>
      </section>
      <section className="bg-zinc-800 flex items-center justify-center">
        <p className="text-white text-4xl">2</p>
      </section>
      <section className="bg-black flex items-center justify-center">
        <p className="text-white text-4xl">3</p>
      </section>
      <section className="bg-zinc-800 flex items-center justify-center">
        <p className="text-white text-4xl">4</p>
      </section>
    </main>
  );
}