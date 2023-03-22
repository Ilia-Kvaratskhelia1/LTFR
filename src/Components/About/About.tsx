import React from "react";
import "./About.css";
import { motion } from "framer-motion";
function About() {
  interface artistType {
    stageName: string;
    name: string;
    age: number;
    Profesion: string;
    About: string;
  }
  const luna: artistType[] = [
    {
      stageName: "Luna997",
      name: "Max matchaidze",
      age: 25,
      Profesion: "Artist",
      About:
        "Lorem ipsum dolor sit amet esse similique autem quod consequuntur nisi error excepturi nesciunt voluptatum quis praesentium repellat laboriosam!",
    },
  ];
  const dila: artistType[] = [
    {
      stageName: "ft.TurboHikari",
      name: "Zura jishkariani",
      age: 25,
      Profesion: "Artist",
      About:
        "Lorem ipsum dolor sit amet  esse similique autem quod consequuntur nisi error excepturi nesciunt voluptatum quis praesentium repellat laboriosam!",
    },
  ];
  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };
  return (
    <>
      <motion.section className="AboutContainer">
        <motion.div
        id="Luna997"
          className="aboutLuna"
          initial={variants.hidden}
          whileInView={variants.visible}
          transition={{ duration: 1}}
        ></motion.div>
        <motion.div
        id="Ft.TurboHikari"
          className="aboutDila"
          initial={variants.hidden}
          whileInView={variants.visible}
          transition={{ duration: 1 }}
        ></motion.div>
      </motion.section>
    </>
  );
}

export default About;
