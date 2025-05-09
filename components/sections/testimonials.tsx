"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      name: "John Smith",
      role: "Strategy Specialist",
      date: "November 2024",
      rating: 5,
      text: "Amazing work Ibrahim, thank you very much!"
    },
    {
      name: "Emily Johnson",
      role: "Social Media Manager",
      date: "October 2024",
      rating: 5,
      text: "He took our engagement to a whole new level! Very creative, reliable and trustworthy."
    },
    {
      name: "Michael Brown",
      role: "SMM + Graphic Creator",
      date: "October 2023",
      rating: 5,
      text: "True expert. Insights added immense value."
    },
    {
      name: "Jessica Davis",
      role: "SMM Expert & Video Editor",
      date: "October 2023",
      rating: 5,
      text: "Very professional and communicative."
    },
    {
      name: "James Miller",
      role: "SMM Specialist",
      date: "September 2023",
      rating: 5,
      text: "Exceptional work and professionalism."
    },
    {
      name: "Ashley Wilson",
      role: "Instagram Reels Editor",
      date: "August 2023",
      rating: 5,
      text: "Appreciate your expertise and professionalism."
    },
    {
      name: "David Anderson",
      role: "Social Media Strategist", 
      date: "July 2023",
      rating: 5,
      text: "Provided us a great strategy and roadmap. Brilliant!"
    },
    {
      name: "Sarah Thompson",
      role: "Part-time Social Media Manager",
      date: "May 2023",
      rating: 5,
      text: "Professional, intelligent, and talented individual."
    }
  ];

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Client <span className="bg-gradient-to-br from-[#3b82f6] bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-muted-foreground">
            What my clients have to say about working with me
          </p>
        </div>

        <motion.div 
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto relative"
        >
          <div className="flex items-center justify-center h-[320px] md:h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <Card className="border border-gray-200 dark:border-gray-800 shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{testimonials[current].name}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          {testimonials[current].role} • {testimonials[current].date}
                        </CardDescription>
                      </div>
                      <div className="flex">
                        {[...Array(testimonials[current].rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg italic">"{testimonials[current].text}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prev} 
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex gap-1">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false);
                    setCurrent(index);
                  }}
                  className={`w-2 h-2 rounded-full ${
                    index === current ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={next} 
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;