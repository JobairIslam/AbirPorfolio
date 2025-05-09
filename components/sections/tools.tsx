"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const Tools = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tools = [
    {
      name: "Letter.com",
      image: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Content"
    },
    {
      name: "Trello",
      image: "https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Management"
    },
    {
      name: "Monday.com",
      image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Management"
    },
    {
      name: "Asana",
      image: "https://images.pexels.com/photos/5882698/pexels-photo-5882698.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Management"
    },
    {
      name: "Canva",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Design"
    },
    {
      name: "Adobe Premiere Pro",
      image: "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Video"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="tools" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Tools & <span className="bg-gradient-to-br from-[#3b82f6] bg-clip-text text-transparent">Platforms</span>
          </h2>
          <p className="text-muted-foreground">
            The professional tools I use to deliver exceptional results
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {tools.map((tool, index) => (
            <motion.div key={index} variants={item} whileHover={{ y: -10 }} className="flex flex-col items-center">
              <Card className="w-full overflow-hidden border-none shadow-md">
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      fill
                      className="object-cover transition-transform hover:scale-110 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                      <div>
                        <p className="text-white font-semibold text-sm">{tool.name}</p>
                        <p className="text-white/80 text-xs">{tool.category}</p>
                      </div>
                    </div>
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

export default Tools;