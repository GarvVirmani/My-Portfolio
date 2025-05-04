function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-[#1e2328] px-6 text-center font-sans transition-all duration-700 ease-in-out"
    >
      <h2 className="text-4xl font-semibold mb-8 tracking-wide text-[#ff5c5c] animate-fadeIn">
        About Me
      </h2>
      <p className="max-w-2xl text-lg leading-relaxed text-[#f1f8ff] animate-fadeIn delay-200">
      I’m a web developer with expertise in the MERN stack, passionate about building modern, responsive, and user-friendly web applications. I focus on writing clean, efficient code to deliver seamless digital experiences.
      </p>
      <br></br>
      <p className="max-w-2xl text-lg leading-relaxed text-[#f1f8ff] animate-fadeIn delay-200">
        Always eager to learn and grow, I thrive in collaborative environments, contributing to impactful projects and innovative solutions.
      </p>
    </section>
  )
}

export default About;  