import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onPurchase: () => void;
}

export const HeroSection = ({ onPurchase }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-amber-500/10"></div>
      <div className="relative container mx-auto px-6 py-24 text-center">
        <Badge variant="secondary" className="mb-6 bg-amber-500/20 text-amber-300 border-amber-500/30 animate-scale-in">
          🚀 Digital Product Launch
        </Badge>
        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent animate-fade-in">
          Your Personal AI Army
        </h1>
        <h2 className="text-2xl md:text-3xl text-slate-300 mb-12 max-w-5xl mx-auto leading-relaxed animate-fade-in">
          20+ Custom GPT Agents to Help You Save Time, Work Smarter, and Automate Your Daily Tasks
        </h2>
        <p className="text-xl text-slate-400 mb-16 max-w-3xl mx-auto animate-fade-in">
          No more wasting time figuring out how to talk to ChatGPT – just click and use professional-level AI agents designed for beginners.
        </p>
        <a
          href="https://inovailabs.gumroad.com/l/armygpts"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-600 to-amber-700 hover:from-orange-700 hover:to-amber-800 text-white font-semibold px-12 py-6 text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 animate-scale-in"
          >
            Complete Purchase
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </a>
        <p className="text-sm text-slate-400 mt-6 animate-fade-in">
          ✅ 7-Day Money-Back Guarantee • ✅ Instant Digital Delivery
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
