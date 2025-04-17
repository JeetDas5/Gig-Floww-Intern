import { useState } from "react";
import { PrimaryButton } from "../components/Buttons";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skill: "",
    portfolio: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, skill, portfolio } = formData;

    if (
      !name.trim() ||
      !email.includes("@") ||
      !skill.trim() ||
      !portfolio.startsWith("http")
    ) {
      alert("Please fill all fields correctly.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <section id="signup" className="py-20 px-6 bg-gradient-to-br from-[#6ab8ae] to-[#3c8f81]">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 border border-[var(--primary)]">
        {submitted ? (
          <div className="text-center text-[var(--primary)] text-xl font-semibold">
            🎉 Thank you for signing up! We'll get in touch soon.
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-[var(--primary)] mb-6 text-center">
              Join GigFloww
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-[var(--primary)]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-[var(--primary)]"
                required
              />
              <input
                type="text"
                name="skill"
                placeholder="Skill Category (e.g., Web Dev)"
                value={formData.skill}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-[var(--primary)]"
                required
              />
              <input
                type="url"
                name="portfolio"
                placeholder="Portfolio Link (e.g., https://...)"
                value={formData.portfolio}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-[var(--primary)]"
                required
              />
              <PrimaryButton type="submit">Sign Up</PrimaryButton>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
