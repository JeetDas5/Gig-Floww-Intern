import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-center px-4 relative"
      style={{ backgroundImage: `url('/hero-pic-1.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <motion.div
        className="z-10 max-w-3xl text-white"
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: [0.17, 0.55, 0.55, 1] }}
      >
        <motion.h1
          className="text-4xl text-white opacity-80 md:text-6xl font-bold mb-6 drop-shadow-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.17, 0.55, 0.55, 1] }}
        >
          Empower Your Gig Journey with{" "}
          <span className="text-[var(--primary)]">GigFloww</span>
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-200">
          Discover, post, and manage gigs with ease — from anywhere, anytime.
        </p>
        <a
          href="#"
          className="inline-block mt-4 bg-white text-[var(--primary)] font-bold py-3 px-6 rounded-md hover:bg-[var(--accent)] transition"
        >
          Join Now
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
