"use client";

import { motion } from "framer-motion";

export default function About() {
	return (
		<section id="sobre" className="w-full bg-foreground">
			<svg
				className="w-full h-24 text-[#4CAF50]"
				viewBox="0 0 1440 320"
				preserveAspectRatio="none"
				fill="currentColor"
			>
				<title>Background SVG</title>
				<path d="M0,64L80,85.3C160,107,320,149,480,154.7C640,160,800,128,960,106.7C1120,85,1280,75,1360,69.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
			</svg>
			<div className="max-w-5xl mt-5 mb-10 mx-auto flex flex-col items-center text-center">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-4xl md:text-5xl font-bold text-muted"
				>
					Sobre o Projeto
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3, duration: 0.8 }}
					className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl"
				>
					O <strong className="text-muted font-semibold">Eco-Play</strong> é um
					projeto acadêmico que promove a conscientização ambiental por meio da{" "}
					<span className="text-background font-semibold">gamificação</span>.
					Utilizando elementos lúdicos como desafios e recompensas, ele ensina
					de forma interativa práticas de{" "}
					<span className="text-background font-semibold">reciclagem</span> e{" "}
					<span className="text-background font-semibold">
						sustentabilidade
					</span>{" "}
					para crianças e jovens, tornando o aprendizado ambiental mais
					divertido, acessível e engajador.
				</motion.p>
			</div>
			<svg
				className="w-full h-24 text-background"
				viewBox="0 0 1440 320"
				preserveAspectRatio="none"
				fill="currentColor"
			>
				<title>Background SVG</title>
				<path d="M1440,256L1360,234.7C1280,213,1120,171,960,165.3C800,160,640,192,480,213.3C320,235,160,245,80,250.7L0,256L0,320L80,320C160,320,320,320,480,320C640,320,800,320,960,320C1120,320,1280,320,1360,320L1440,320Z" />
			</svg>
		</section>
	);
}
