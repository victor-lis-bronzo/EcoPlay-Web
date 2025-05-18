"use client";

import { motion } from "framer-motion";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { Recycle, Truck, HeartHandshake } from "lucide-react";

export default function HowWorks() {
	const steps = [
		{
			title: "1. Coleta das Tampinhas",
			desc: "As tampinhas plásticas descartadas são coletadas por meio do nosso totem de reciclagem.",
			icon: <Recycle className="w-8 h-8 text-[#4CAF50]" />,
		},
		{
			title: "2. Entrega ao Rotary Club",
			desc: "As tampinhas coletadas são encaminhadas ao Rotary Club, parceiro na transformação sustentável.",
			icon: <Truck className="w-8 h-8 text-[#4CAF50]" />,
		},
		{
			title: "3. Reciclagem com Propósito",
			desc: "O Rotary recicla as tampinhas e as converte em benefícios para a comunidade, como cadeiras de rodas e ração para animais.",
			icon: <HeartHandshake className="w-8 h-8 text-[#4CAF50]" />,
		},
	];

	return (
		<section id="como-funciona" className="w-full bg-foreground py-24 px-6">
			<div className="max-w-6xl mx-auto text-center">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-4xl md:text-5xl font-bold text-[#2E7D32]"
				>
					Como Funciona?
				</motion.h2>

				<motion.div
					className="mt-12 grid gap-8 md:grid-cols-3"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={{
						hidden: {},
						visible: {
							transition: { staggerChildren: 0.2 },
						},
					}}
				>
					{steps.map((step, idx) => (
						<motion.div
							key={`${step.title} - ${idx}`}
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
							transition={{ duration: 0.6 }}
						>
							<Card className="h-full border-2 border-background shadow-lg hover:shadow-2xl transition">
								<CardHeader className="flex flex-col items-center pt-6 pb-4">
									{step.icon}
									<CardTitle className="mt-4 text-lg font-semibold text-background">
										{step.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription className="text-gray-700">
										{step.desc}
									</CardDescription>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
