import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Features from "./sections/Features";
import Testimonials from "./sections/Testimonials";
import SignUpForm from "./sections/SignUpForm";

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Testimonials />
        <SignUpForm />
      </main>
    </div>
  );
}
