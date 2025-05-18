"use client";

import IconText from "@/components/ui/icon";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section className="relative w-full bg-foreground bg-gradient-to-b overflow-hidden">
			<svg
				className="absolute bottom-0 left-0 w-full h-64 md:h-80 text-background opacity-10"
				viewBox="0 0 1440 320"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
			>
				<title>Background SVG</title>
				<path
					fill="currentColor"
					d="M0,160L48,154.7C96,149,192,139,288,138.7C384,139,480,149,576,170.7C672,192,768,224,864,240C960,256,1056,256,1152,240C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
				/>
			</svg>

			<div className="relative z-10 max-w-6xl mx-auto py-32 px-6 flex flex-col items-center text-center">
				<IconText />

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.8 }}
					className="my-6 text-lg md:text-xl text-[#4CAF50] max-w-2xl"
				>
					Um incentivo à sustentabilidade e reciclagem através da gamificação.
				</motion.p>
			</div>
		</section>
	);
}
