import Hero from "@/components/Hero";
import Details from "@/components/Details";
import Gallery from "@/components/Gallery";
import ConfirmForm from "@/components/ConfirmForm";
import ScrollIndicator from "@/components/ScrollIndicator";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <ScrollIndicator />
      <Hero />
      <Details />
      <Gallery />
      <ConfirmForm />
      <Footer />
    </main>
  );
}