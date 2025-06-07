"use client";

import { useGetCountByInstitutionId } from "@/hooks/use-bottle-cap";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "@phosphor-icons/react";

export default function BottleCapCounter({
  institutionId,
}: {
  institutionId: number;
}) {
  const { data: target, refetch } = useGetCountByInstitutionId(institutionId);
  const [seconds, setSeconds] = useState(0);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => setPlaying((prev) => !prev);

  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (target) {
      setCount(0);
      setSeconds(0);
    }
  }, [target]);

  useEffect(() => {
    if (!playing) return;

    if (seconds === 0) {
      refetch();
      setSeconds(5);
      return;
    }
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, refetch, playing]);

  useEffect(() => {
    if (isInView && typeof target === "number" && seconds === 0) {
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
  }, [isInView, controls, target, seconds]);

  return (
    <section className="bg-foreground py-20 px-6 md:px-32 rounded text-center text-background relative">
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
        <div className="flex items-center gap-2 text-sm mt-4 absolute bottom-2 right-3">
          <button
            onClick={togglePlay}
            className="p-1 rounded hover:bg-background/10 transition-colors cursor-pointer"
            aria-label={playing ? "Pausar atualização" : "Iniciar atualização"}
            type="button"
          >
            {playing ? <Pause size={18} /> : <Play size={18} />}
          </button>
          {playing && <span>Atualizado a cada {seconds} segundos.</span>}
        </div>
      </motion.div>
    </section>
  );
}
