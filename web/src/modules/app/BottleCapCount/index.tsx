"use client";

import { useCount } from "@/hooks/use-count";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function BottleCapCounter() {
	const ref = useRef(null);
	const isInView = useInView(ref);
	const controls = useAnimation();
	const [count, setCount] = useState(0);

	const target = 1258; // valor de exemplo (substitua pelo valor real)

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
			let start = 0;
			const step = Math.ceil(target / 60);
			const interval = setInterval(() => {
				start += step;
				if (start >= target) {
					start = target;
					clearInterval(interval);
				}
				setCount(start);
			}, 20);
		}
	}, [isInView, controls]);

	return (
		<section className="bg-foreground py-20 px-32 rounded text-center text-background">
			<motion.div
				ref={ref}
				initial="hidden"
				animate={controls}
				variants={{
					hidden: { opacity: 0, y: 20 },
					visible: { opacity: 1, y: 0 },
				}}
				transition={{ duration: 0.6 }}
				className="max-w-lg mx-auto"
			>
				<h2 className="text-4xl font-bold mb-4">Tampinhas Coletadas</h2>
				<p className="text-[5rem] font-extrabold tracking-wider">
					{count.toLocaleString("pt-BR")}
				</p>
				<p className="text-lg mt-2">
					Esse é o total de tampinhas que conseguimos arrecadar com a ajuda de
					todos. Obrigado!
				</p>
			</motion.div>
		</section>
	);
}
