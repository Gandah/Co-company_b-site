import NavBar from "@/components/shared/NavBar";
import About from "@/containers/About/About";
import Hero from "@/containers/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
      <main className="app min-w-[300px]">  
        <section className="relative padding-l padding-r  min-h-screen h-screen">
            <Hero />         
        </section>
        <section className="relative padding-l padding-r mt-24">
            <About />         
        </section>
      </main>
  );
}
