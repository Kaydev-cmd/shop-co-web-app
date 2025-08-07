import React from "react";
import Button from "./Button";
import { HERO_LOGOS } from "@/constants";
import HeroStats from "./HeroStats";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Hero = () => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="flex flex-col gap-6">
          <h2 className="font-extrabold text-4xl uppercase md:text-center md:text-6xl">
            Find clothes
            <br />
            that matches
            <br />
            your style
          </h2>
          <p className="text-lg text-[#666666] md:text-center">
            Browse through our diverse range of meticulously crafted garments,
            designed
            <br />
            to bring out your individuality and cater to your sense of style
          </p>
          <Button
            title="Shop Now"
            onClick={() => router.push("/#newArrivals")}
          />
          <img
            src="/assets/images/hero/hero_image.png"
            alt="Hero"
            className="hidden"
          />

          <HeroStats />
        </div>
      </div>

      {/* Logos */}
      <div
        className="bg-black flex items-center justify-center gap-6 flex-wrap"
        style={{ padding: "22px", marginTop: "26px" }}
      >
        {HERO_LOGOS.map((logo) => (
          <img
            src={logo.logo}
            alt={logo.href}
            key={logo.href}
            className="w-22"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Hero;
