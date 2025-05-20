"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
	// {
	// 	name: "Karlos Eduardo Araújo de Moraes",
	// 	role: "Aluno",
	// 	img: "https://media.licdn.com/dms/image/v2/D4D03AQFTwtX-VNmHeQ/profile-displayphoto-shrink_100_100/B4DZVIgLWnG4Ag-/0/1740678150632?e=1752710400&v=beta&t=kwUT5kLuR0eiVGH0VX_OvCaKBWYloYCe30PzkHMW6fk",
	// },
	{
		name: "Miguel Elias Rosillo Dimas",
		role: "Aluno",
		img: "https://media.licdn.com/dms/image/v2/D4D35AQH1AhSirlIcuA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1735473272095?e=1748307600&v=beta&t=meE-by-9HuXHdtNktSb8rPYChtVXlJx_Gio02GR7qQ0",
	},
	// {
	// 	name: "Pedro Henrique Moraes Samsonas",
	// 	role: "Aluno",
	// 	img: "https://media.licdn.com/dms/image/v2/D4E03AQFMzqNX8xKYuQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1700528168812?e=1752710400&v=beta&t=k9w0Qprfhp32m9ln_1uzZa0yLIVnTj7w1ZYImVfgP5s",
	// },
	{
		name: "Victor Lis Bronzo",
		role: "Aluno",
		img: "https://media.licdn.com/dms/image/v2/D4D03AQGLTrZL1sFtnA/profile-displayphoto-shrink_400_400/B4DZQTNyISGUAg-/0/1735489168801?e=1752710400&v=beta&t=xxVzF-Bcgo5BwlTwexlzHF9-mV0L9_TWjn1rTnDDpGk",
	},
	{
		name: "Kátia Maria Teruco Fushita",
		role: "Orientadora",
		img: "/team/katia.svg",
	},
	{
		name: "Márcio Yugi Tokunaga",
		role: "Orientador",
		img: "/team/marcio.svg",
	},
];

export default function Team() {
	return (
		<section className="mx-auto px-10 md:8/12 md:px-20 lg:w-10/12 bg-foreground py-20 text-center rounded-tl-full rounded-br-full">
			<motion.h2
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="text-4xl font-bold text-muted mb-12"
			>
				Nosso Time
			</motion.h2>

			<div className="grid grid-cols-1 min-[540px]:grid-cols-2 lg:grid-cols-3 gap-10 max-w-4xl mx-auto justify-items-center items-center">
				{team.map((member, index) => (
					<motion.div
						key={member.name}
						className="max-w-52 bg-primary-light hover:shadow-lg transition-shadow duration-300 rounded-xl p-6 flex flex-col justify-center items-center text-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.15, duration: 0.5 }}
						viewport={{ once: true }}
					>
						<div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-background shadow">
							<Image
								src={member.img}
								alt={member.name}
								width={96}
								height={96}
								className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105 cursor-pointer"
							/>
						</div>
						<h3 className="text-lg font-semibold text-muted leading-tight mb-1">
							{member.name}
						</h3>
						<span className="text-xs uppercase bg-background text-primary-dark px-3 py-1 rounded-full mt-1 tracking-wider font-medium">
							{member.role}
						</span>
					</motion.div>
				))}
			</div>
		</section>
	);
}
