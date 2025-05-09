"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Digital Marketing Professional
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Card className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src="https://images.pexels.com/photos/3760618/pexels-photo-3760618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Ibrahim A."
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                Social Media Manager & Content Strategy Specialist
              </h3>
              <p className="text-muted-foreground">
                With over 4 years of experience in digital marketing, I specialize in 
                creating engaging content strategies and managing social media growth 
                for businesses across various industries.
              </p>
              
              <div className="space-y-3 my-6">
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 mt-2 rounded-full bg-indigo-600"></div>
                  <p>Expert in content planning for multiple platforms including Facebook, Instagram, Twitter/X, LinkedIn, YouTube, and TikTok</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 mt-2 rounded-full bg-purple-600"></div>
                  <p>Specialized in organic growth strategies that build real engagement</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 mt-2 rounded-full bg-cyan-500"></div>
                  <p>Experienced in brand development and audience targeting</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 mt-2 rounded-full bg-indigo-600"></div>
                  <p>Passionate about helping businesses establish a strong digital presence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;