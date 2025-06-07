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
    img: "/team/miguel.svg",
  },
  // {
  // 	name: "Pedro Henrique Moraes Samsonas",
  // 	role: "Aluno",
  // 	img: "https://media.licdn.com/dms/image/v2/D4E03AQFMzqNX8xKYuQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1700528168812?e=1752710400&v=beta&t=k9w0Qprfhp32m9ln_1uzZa0yLIVnTj7w1ZYImVfgP5s",
  // },
  {
    name: "Victor Lis Bronzo",
    role: "Aluno",
    img: "/team/victor.svg",
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 max-w-4xl mx-auto justify-items-center">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            className="w-full max-w-52 bg-primary-light hover:shadow-lg transition-shadow duration-300 rounded-xl p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-24 aspect-square mb-4 rounded-full overflow-hidden border-4 border-background shadow flex-shrink-0">
              <Image
                src={member.img}
                alt={member.name}
                width={96}
                height={96}
                className="w-full h-full object-cover object-center transition-transform duration-300 transform hover:scale-105 cursor-pointer"
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
