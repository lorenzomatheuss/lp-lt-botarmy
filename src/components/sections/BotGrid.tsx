
import { Card, CardContent } from "@/components/ui/card";
import { User, Briefcase, Megaphone, Hash, PenTool } from "lucide-react";

export const BotGrid = () => {
  const categories = [
    {
      name: "Assistant",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      icon: User,
      description: "Personal productivity & task management"
    },
    {
      name: "Business", 
      color: "bg-gradient-to-br from-purple-600 to-purple-700",
      icon: Briefcase,
      description: "Strategy, planning & business growth"
    },
    {
      name: "Marketing",
      color: "bg-gradient-to-br from-cyan-500 to-cyan-600", 
      icon: Megaphone,
      description: "Campaign creation & audience engagement"
    },
    {
      name: "Social Media",
      color: "bg-gradient-to-br from-cyan-600 to-cyan-700",
      icon: Hash,
      description: "Content creation & community management"
    },
    {
      name: "Writing",
      color: "bg-gradient-to-br from-amber-500 to-amber-600",
      icon: PenTool,
      description: "Content writing & copywriting"
    }
  ];

  return (
    <section className="py-24 bg-white fade-in-section opacity-0">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-5xl font-bold text-slate-800 mb-6">5 Powerful AI Categories</h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Each category contains multiple specialized AI agents, ready to transform how you work
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.name} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className={`${category.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl transition-transform duration-300 hover:rotate-12`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="font-bold text-xl text-slate-800 mb-3">{category.name}</h4>
                  <p className="text-slate-600 leading-relaxed">{category.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
