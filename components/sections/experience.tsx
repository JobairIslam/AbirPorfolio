"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, Quote } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const workHistory = [
    {
      title: "Strategy Specialist",
      period: "Nov 7–29, 2024",
      testimonial: "Amazing work Ibrahim, thank you very much!"
    },
    {
      title: "Social Media Manager – Engagement & Growth",
      period: "Oct 26 – Nov 29, 2024",
      testimonial: "He took our engagement to a whole new level! Very creative, reliable and trustworthy."
    },
    {
      title: "SMM + Graphic Creator",
      period: "Oct 26–29, 2023",
      testimonial: "True expert. Insights added immense value."
    },
    {
      title: "SMM Expert & Video Editor (E-Commerce)",
      period: "Oct 20–29, 2023",
      testimonial: "Very professional and communicative."
    },
    {
      title: "SMM Specialist",
      period: "Aug 30 – Sep 4, 2023",
      testimonial: "Exceptional work and professionalism."
    },
    {
      title: "Instagram Reels Editor",
      period: "Aug 17–21, 2023",
      testimonial: "Appreciate your expertise and professionalism."
    },
    {
      title: "Social Media Strategist",
      period: "Jul 26–31, 2023",
      testimonial: "Provided us a great strategy and roadmap. Brilliant!"
    },
    {
      title: "Part-time Social Media Manager",
      period: "May 1–8, 2023",
      testimonial: "Professional, intelligent, and talented individual."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-[#0fb3ad]/30 to-white

dark:from-gray-800 dark:to-gray-700">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Work <span className="bg-gradient-to-br from-[#3b82f6] bg-clip-text text-transparent">History</span>
          </h2>
          <p className="text-muted-foreground">
            My professional journey and client engagements
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-3xl mx-auto"
        >
          <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-indigo-600 via-purple-600 to-cyan-500" />

          {workHistory.map((job, index) => (
            <motion.div key={index} variants={itemVariants} className="mb-12 pl-12 relative timeline-item">
              <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#0fb3ad] text-white border-0 shadow-lg hover:from-[#2563eb] hover:to-[#0ea5e9] flex items-center justify-center z-10">
                <CalendarIcon className="h-6 w-6 text-white" />
              </div>
              
              <Card className="border border-gray-200 dark:border-gray-800 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <CardDescription>{job.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <Quote className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
                    <p className="text-muted-foreground italic">{job.testimonial}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;