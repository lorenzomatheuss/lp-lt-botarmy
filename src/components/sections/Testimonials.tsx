
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      text: "This pack saved me HOURS every week! I went from spending entire afternoons on content creation to getting it done in minutes.",
      author: "Sarah Johnson",
      role: "Marketing Consultant"
    },
    {
      text: "As someone who was intimidated by AI, these pre-made agents made everything so simple. Now I use them daily for my business.",
      author: "Mike Chen", 
      role: "Small Business Owner"
    },
    {
      text: "The social media bot alone is worth the entire price. My engagement has doubled since I started using it!",
      author: "Emma Rodriguez",
      role: "Content Creator"
    }
  ];

  return (
    <section className="py-24 bg-white fade-in-section opacity-0">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-5xl font-bold text-slate-800 mb-6">What Our Customers Say</h3>
          <p className="text-xl text-slate-600">
            Join thousands of users who have transformed their workflow
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-10">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-8 italic leading-relaxed text-lg">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-slate-800 text-lg">{testimonial.author}</p>
                  <p className="text-slate-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
