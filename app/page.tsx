import { Navbar } from "./_components/navbar";
import { Hero } from "./_components/hero";
import { Comparison } from "./_components/comparison";
import { Benefits } from "./_components/benefits";
import { Hardware } from "./_components/hardware";
import { Pricing } from "./_components/pricing";
import { DownloadArea } from "./_components/download-area";
import { Footer, MobileCtaBar } from "./_components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Comparison />
        <Benefits />
        <Hardware />
        <Pricing />
        <DownloadArea />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
