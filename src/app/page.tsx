import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SignupForm from "@/components/SignupForm";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="">
            <Hero />
            <SocialLinks />
            </main>
            <Footer />
        </div>
    </main>
  );
}
