
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-50 to-cyan-50 fade-in-section opacity-0">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl transform transition-transform duration-300 hover:scale-110">
            <Shield className="h-12 w-12 text-white" />
          </div>
          <h3 className="text-4xl font-bold text-slate-800 mb-6">Risk-Free Purchase</h3>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            We're so confident you'll love Your AI Army that we offer a complete 7-day money-back guarantee. 
            If you're not satisfied for any reason, get a full refund – no questions asked.
          </p>
          <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 border-emerald-300 px-6 py-3 text-lg">
            ✅ 100% Satisfaction Guaranteed
          </Badge>
        </div>
      </div>
    </section>
  );
};
