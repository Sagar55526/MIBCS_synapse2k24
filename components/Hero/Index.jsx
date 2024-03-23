import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Navbar from "./Navbar";
import Qiskit from "../../images/logos/QiskitHero.png";
import Arrow from "../../images/shapes/Arrow.png";
import GDGAlgiers from "../../images/logos/GDGAlgiers-white.png";
import Maqam from "../../images/shapes/MaqamWhite.png";
import Atom from "../../images/shapes/atomWhite.png";
import Globe from "../../images/shapes/globe.png";
import Computer from "../../images/shapes/computerWhite.png";
import Purpulebutton from "../shared/Purpulebutton";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
  const [countdown, setCountdown] = useState({
    days: 8,
    hours: 17,
    minutes: 33,
    seconds: 20
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => {
        const { days, hours, minutes, seconds } = prevCountdown;
        if (seconds > 0) {
          return { ...prevCountdown, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prevCountdown, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { ...prevCountdown, hours: hours - 1, minutes: 59, seconds: 59 };
        } else if (days > 0) {
          return { ...prevCountdown, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prevCountdown;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen hero-bg">
      <div className="section-container pb-24 md:pb-0">
        <Navbar />
        <div className="flex flex-col gap-16 lg:gap-0 relative">
          <div className="w-12 h-12 absolute top-1/4 left-4 lg:top-4 lg:left-4">
            <Image src={Atom} />
          </div>
          <div className="w-12 h-12 absolute top-12 left-[90%] lg:top-4 lg:left-1/4">
            <Image src={Globe} />
          </div>
          <div className="hidden lg:block w-16 h-16 absolute top-4 right-16">
            <Image src={Maqam} />
          </div>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-col gap-7 flex-1 lg:pl-12 text-qiskit-white">
              <h1 className="font-bold text-center lg:text-left text-4xl lg:text-6xl 2xl:text-7xl leading-[4.5rem]">
                <Typewriter
                  options={{
                    strings: ["Synapse 2k24 " + "| Experience the Synergy of Minds"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p className="font-medium text-center lg:text-left leading-[2rem] lg:text-2xl 2xl:text-4xl 2xl:leading-[2.875rem]">
                Dive into the tech pool at Synapse 2k24—your chance to explore, connect, and innovate.
              </p>
            </div>
            <div className="flex-1 pt-20 lg:pt-0 order-first lg:order-last">
              <Tilt>
                <Image src={Qiskit} />
              </Tilt>
            </div>
          </div>
          <div className="w-12 h-12 absolute bottom-16 left-8">
            <Image src={Atom} />
          </div>
          <div className="hidden lg:block w-12 h-12 absolute bottom-1/4 right-8">
            <Image src={Globe} />
          </div>
          <div className="hidden lg:block w-12 h-12 absolute bottom-1/4 right-2/4">
            <Image src={Computer} />
          </div>
          <motion.div
            className="countdown-timer relative bottom-0 left-0 right-0 text-center pt-5 pb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="text-white text-xl">
              <span style={{ fontSize: "70px", fontWeight: "bold", color: "white" }}>{countdown.days}</span> days, <span style={{ fontSize: "70px", color: "white", fontWeight: "bold" }}>{countdown.hours}</span> hours,
              <span style={{ fontSize: "70px", color: "white", fontWeight: "bold" }}>{countdown.minutes}</span> minutes, <span style={{ fontSize: "70px", color: "white", fontWeight: "bold" }}>{countdown.seconds}</span> seconds
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
