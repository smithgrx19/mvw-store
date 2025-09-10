
"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="space-y-8">
      <section className="card">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold">
          Welcome to MVW Store
        </motion.h2>
        <p className="mt-3 text-neutral-300">
          A premium, bespoke e‑commerce experience. Start by exploring our divisions below.
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Electronics & Cellphones', 'Golf', 'LP Gas & Generators', 'Clothing & Sport Equipment', 'Charity & Memorabilia'].map((d, i) => (
          <motion.div 
            key={d} 
            className="card"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="text-xl font-semibold">{d}</h3>
            <p className="text-neutral-400 mt-2">Curated products, fast checkout, gorgeous UI.</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
