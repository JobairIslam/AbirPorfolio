"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Download, Linkedin, Instagram, Twitter } from "lucide-react";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const socialIconsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.2,
      },
    },
  };

  const iconVariant = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } },
  };

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-purple-600/5 to-cyan-500/5 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-cyan-950/30" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="mb-4">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi, I'm <span className="gradient-text">Ibrahim A.</span>
            </motion.h1>
          </motion.div>

          <motion.h2
            variants={item}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Social Media Manager | Content Strategy Specialist | Organic Growth Expert
          </motion.h2>

          <motion.p
            variants={item}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            I help brands grow their digital presence through strategic content and engagement
            that resonates with their audience and drives results.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button asChild size="lg" className="gradient-bg">
              <Link href="#contact">Hire Me</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </motion.div>

          <motion.div
            variants={socialIconsContainer}
            initial="hidden"
            animate="show"
            className="flex justify-center space-x-4"
          >
            {socialLinks.map((link, index) => (
              <motion.div key={index} variants={iconVariant}>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full"
                >
                  <Link href={link.href} aria-label={link.label}>
                    {link.icon}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="rounded-full"
        >
          <Link href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;