
import { Card, CardContent } from "@/components/ui/card";
import { Check, Clock, Target, FileText } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Check,
      title: "Ready-to-use AI Agents",
      description: "No Setup Needed – Start using immediately with just one click"
    },
    {
      icon: Clock,
      title: "Save Time on Content & Planning", 
      description: "Automate content creation, customer support, and daily tasks"
    },
    {
      icon: Target,
      title: "Tailored for Beginners",
      description: "Just Click and Chat – No prompt engineering knowledge required"
    },
    {
      icon: FileText,
      title: "Step-by-Step User Guide",
      description: "Comprehensive PDF manual included with your purchase"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white fade-in-section opacity-0">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-5xl font-bold text-slate-800 mb-6">Why Choose Your AI Army?</h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Designed specifically for beginners who want professional results without the learning curve
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <CardContent className="p-10">
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-4 rounded-xl shadow-xl flex-shrink-0 transform transition-transform duration-300 hover:rotate-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-2xl text-slate-800 mb-3">{feature.title}</h4>
                      <p className="text-slate-600 leading-relaxed text-lg">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
