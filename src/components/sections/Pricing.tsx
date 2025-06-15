import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

interface PricingSectionProps {
  onPurchase: () => void;
}

export const Pricing = ({ onPurchase }: PricingSectionProps) => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white fade-in-section opacity-0">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-5xl font-bold mb-6">Limited Time Offer</h3>
        <p className="text-2xl text-slate-300 mb-16">Get lifetime access to all 20+ AI agents</p>
        
        <Card className="max-w-lg mx-auto bg-gradient-to-br from-white to-slate-50 border-0 shadow-2xl transform transition-all duration-500 hover:scale-105">
          <CardContent className="p-10 text-center text-slate-800">
            <Badge variant="secondary" className="bg-amber-500 text-white mb-6 px-4 py-2 text-lg">
              🔥 Best Value
            </Badge>
            <h4 className="text-3xl font-bold mb-4">Your AI Army Pack</h4>
            <div className="mb-8">
              <span className="text-6xl font-bold text-slate-800">$47</span>
              <p className="text-slate-600 mt-3 text-lg">One-time payment • No monthly fees</p>
            </div>
            
            <div className="text-left mb-10 space-y-4">
              <div className="flex items-center">
                <Check className="h-6 w-6 text-emerald-500 mr-4" />
                <span className="text-lg">20+ Custom GPT Agents</span>
              </div>
              <div className="flex items-center">
                <Check className="h-6 w-6 text-emerald-500 mr-4" />
                <span className="text-lg">Complete PDF User Guide</span>
              </div>
              <div className="flex items-center">
                <Check className="h-6 w-6 text-emerald-500 mr-4" />
                <span className="text-lg">Direct Access Links</span>
              </div>
              <div className="flex items-center">
                <Check className="h-6 w-6 text-emerald-500 mr-4" />
                <span className="text-lg">Instant Digital Delivery</span>
              </div>
              <div className="flex items-center">
                <Check className="h-6 w-6 text-emerald-500 mr-4" />
                <span className="text-lg">7-Day Money-Back Guarantee</span>
              </div>
            </div>

            <a
              href="https://inovailabs.gumroad.com/l/armygpts"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-orange-600 to-amber-700 hover:from-orange-700 hover:to-amber-800 text-white font-semibold py-6 text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                Buy Now - Complete Purchase
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </a>
            <p className="text-sm text-slate-500 mt-6">
              Secure payment via Stripe • Available worldwide
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
