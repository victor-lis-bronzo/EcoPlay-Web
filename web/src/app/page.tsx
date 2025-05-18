"use client";
import { motion } from "framer-motion";
import About from "@/modules/app/About";
import Hero from "@/modules/app/Hero";
import HowWorks from "@/modules/app/HowWorks";
import Team from "@/modules/app/Team";
import BottleCapCounter from "@/modules/app/BottleCapCount";

export default function Home() {
	return (
		<motion.div
			className="flex flex-col min-h-svh items-center justify-center py-32 gap-y-52"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.5 }}
		>
			<Hero />
			<BottleCapCounter />
			<About />
			<HowWorks />
			<Team />
		</motion.div>
	);
}
