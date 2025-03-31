import React from "react";
import { motion } from "framer-motion";
import { Leaf, HeartPulse, Sprout } from "lucide-react"; // Install lucide-react for icons

export default function AboutSection() {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-[#0e402d]" />,
      title: "100% Natural Ingredients",
      description:
        "Harnessing nature's power with ethically sourced herbs and botanicals",
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-[#0e402d]" />,
      title: "Holistic Wellness",
      description: "Formulas designed to nurture both body and mind",
    },
    {
      icon: <Sprout className="w-8 h-8 text-[#0e402d]" />,
      title: "Sustainable Practices",
      description: "Eco-friendly production from seed to shelf",
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-[#0e402d]" />,
      title: "Holistic Wellness",
      description: "Formulas designed to nurture both body and mind",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#d7fffe] shadow-lg" name="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="aspect-square ">
              <img
                src="https://images.unsplash.com/photo-1610056332922-b5f12af36e47?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>{" "}
            {/* Replace with actual image */}
            <div className="absolute inset-0 border-8 border-[#0e402d]/10 rounded-2xl" />
          </motion.div>

          {/* Content Section */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-4xl font-bold text-[#0e402d]"
            >
              Rooted in Nature,
              <br />
              <span className="text-[#5b8c5a]">Crafted with Care</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              For over a decade, we've combined ancient herbal wisdom with
              modern science to create products that truly care for your
              wellbeing. Our journey began in the lush fields of Kerala, where
              we discovered the profound healing properties of local botanicals.
            </motion.p>

            {/* Features Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-[#0e402d] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="bg-[#0e402d] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1a533f] transition-colors"
            >
              Discover Our Story
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
