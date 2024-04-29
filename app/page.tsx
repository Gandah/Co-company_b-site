import Hero from "@/containers/Hero/Hero";
import About from "@/containers/About";
import Catalogue from "@/containers/Catalogue";


export default function Home() {
  return (
      <main className="app min-w-[300px]">  
        <section className="relative padding-l padding-r  min-h-screen h-screen">
            <Hero />         
        </section>
        <section className="relative padding-l padding-r mt-24">
            <About />         
        </section>
        <section className="relative padding-l padding-r mt-24">
            <Catalogue/>      
        </section>
      </main>
  );
}
