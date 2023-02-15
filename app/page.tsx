import Hero from "./components/Hero";
import ServiceLayout from "./components/ServiceLayout";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <Hero />
      <ServiceLayout />
    </main>
  );
}
