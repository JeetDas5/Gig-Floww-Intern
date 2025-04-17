import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 text-center max-w-full mx-auto rounded-lg shadow-lg bg-gradient-to-br from-[#6ab8ae] to-[#3c8f81]"
    >
      <motion.h2
        className="text-4xl font-semibold text-white mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        About GigFloww
      </motion.h2>

      <motion.p
        className="text-lg text-white opacity-80"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        GigFloww is your ultimate launchpad for gig success. Whether you're a
        designer, developer, or marketer, we help you find the right gigs and
        grow your freelance career.
      </motion.p>
    </section>
  );
}
