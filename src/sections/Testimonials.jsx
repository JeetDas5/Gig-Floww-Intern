// components/Testimonials.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    quote:
      "GigFloww helped me land freelance gigs I never thought possible. It's like LinkedIn, but actually useful!",
    name: "Alex Johnson",
    role: "Freelance Developer",
  },
  {
    quote:
      "The verified gigs and secure payments gave me peace of mind. This platform is a game changer.",
    name: "Mira Patel",
    role: "UX Designer",
  },
  {
    quote:
      "I love how my portfolio is neatly displayed. Clients find my work easily and I get consistent projects!",
    name: "Liam Chen",
    role: "Content Creator",
  },
  {
    quote:
      "I love how my portfolio is neatly displayed. Clients find my work easily and I get consistent projects!",
    name: "Liam Chen",
    role: "Content Creator",
  },
  {
    quote:
      "I love how my portfolio is neatly displayed. Clients find my work easily and I get consistent projects!",
    name: "Liam Chen",
    role: "Content Creator",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 px-6 shadow-lg bg-gradient-to-br from-[#6ab8ae] to-[#3c8f81]"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-[var(--bg)]">
          What Our Users Say
        </h2>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-white rounded-xl shadow-md border border-[var(--primary)] h-full flex flex-col justify-between"
            >
              <p className="text-[var(--fg)] italic mb-4">"{t.quote}"</p>
              <div className="font-bold text-[var(--primary)]">{t.name}</div>
              <div className="text-sm text-gray-500">{t.role}</div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
