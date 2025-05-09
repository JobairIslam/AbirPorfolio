"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Facebook, Instagram, Linkedin, Users, Calendar, PlaneTakeoff as LayoutPlaneTakeoff, PenTool, Search, Video, Youtube } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const serviceItems = [
    {
      title: "Facebook & X Marketing",
      description: "Strategic content creation and community management for Facebook and X platforms.",
      icon: <Facebook className="h-10 w-10 text-indigo-600" />
    },
    {
      title: "Instagram Marketing",
      description: "Growth-focused Instagram management with content strategy for feed, stories, and reels.",
      icon: <Instagram className="h-10 w-10 text-purple-600" />
    },
    {
      title: "LinkedIn Growth",
      description: "Professional content and connection strategies to grow your LinkedIn presence.",
      icon: <Linkedin className="h-10 w-10 text-cyan-500" />
    },
    {
      title: "Influencer Management",
      description: "Identifying, reaching out to, and managing relationships with influencers.",
      icon: <Users className="h-10 w-10 text-indigo-600" />
    },
    {
      title: "Content Scheduling",
      description: "Strategic planning and scheduling of content across all platforms.",
      icon: <Calendar className="h-10 w-10 text-purple-600" />
    },
    {
      title: "Content Strategy",
      description: "Comprehensive content planning aligned with business goals and audience needs.",
      icon: <LayoutPlaneTakeoff className="h-10 w-10 text-cyan-500" />
    },
    {
      title: "Graphic Design",
      description: "Eye-catching visuals and graphics designed for social media platforms.",
      icon: <PenTool className="h-10 w-10 text-indigo-600" />
    },
    {
      title: "SEO",
      description: "Optimization of content for better visibility and searchability.",
      icon: <Search className="h-10 w-10 text-purple-600" />
    },
    {
      title: "Reels Editing",
      description: "Creation and editing of engaging short-form video content for Instagram and TikTok.",
      icon: <Video className="h-10 w-10 text-cyan-500" />
    },
    {
      title: "YouTube Growth",
      description: "Strategic planning and optimization to boost YouTube viewership and engagement.",
      icon: <Youtube className="h-10 w-10 text-indigo-600" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-[#0fb3ad]/30 to-white 

">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="bg-gradient-to-br from-[#3b82f6] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-muted-foreground">
            Comprehensive social media and digital marketing solutions to help your brand grow
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {serviceItems.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="xl:col-span-1 service-card">
              <Card className="h-full border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-colors">
                <CardHeader className="pb-2">
                  <div className="mb-3">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;