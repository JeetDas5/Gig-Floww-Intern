import { motion } from "framer-motion";

const features = [
  {
    title: "Verified Gigs",
    desc: "Only high-quality, verified clients and opportunities.",
  },
  {
    title: "Skill Matching",
    desc: "Smart algorithms connect you to gigs that fit your strengths.",
  },
  {
    title: "Secure Payments",
    desc: "Get paid fast and securely through trusted systems.",
  },
  {
    title: "Portfolio Tools",
    desc: "Easily showcase your best work and stand out.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 px-6 bg-gradient-to-br from-[#6ab8ae] to-[#3c8f81]"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-white">
          Why Choose GigFloww?
        </h2>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto"
      >
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="rounded-xl shadow-md p-6 bg-white border border-[var(--primary)]"
          >
            <h3 className="text-xl font-bold text-[var(--primary)] mb-2">
              {f.title}
            </h3>
            <p className="text-[var(--fg)]">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
