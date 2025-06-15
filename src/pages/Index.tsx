
import { useEffect } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { BotGrid } from "@/components/sections/BotGrid";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/sections/Footer";
import { AnimationStyles } from "@/components/sections/AnimationStyles";
import { CookieConsent } from "@/components/CookieConsent";

const Index = () => {
  const handlePurchase = () => {
    // Replace with actual Stripe/Gumroad integration
    console.log("Redirecting to payment...");
  };

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-section');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 scroll-smooth">
      <HeroSection onPurchase={handlePurchase} />
      <BotGrid />
      <FeaturesSection />
      <Testimonials />
      <GuaranteeSection />
      <Pricing onPurchase={handlePurchase} />
      <Footer />
      <AnimationStyles />
      <CookieConsent />
    </div>
  );
};

export default Index;
