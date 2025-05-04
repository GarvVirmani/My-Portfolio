import React from 'react'

function Experience() {
  const experiences = [
    {
      title: 'DSA Team Member',
      company: 'Microsoft Student Chapter - MSIT',
      duration: 'Oct 2023 - Present',
      description:
        'Engaged in solving daily DSA problems and actively participated in society-organized DSA bootcamps and coding competitions.',
    },
    {
      title: 'Contributor',
      company: 'Social Winter Of Code',
      duration: 'Jan 2024 - Feb 2024',
      description:
        'Contributed to open-source during SWOC by fixing bugs and enhancing UI. Successfully submitted and merged 4 pull requests. Developed and deployed two mini projects: Home Renovation Budget Calculator and Cricket Calculator using HTML, CSS, and JavaScript.',
    },
  ]

  return (
    <section id="experience" className="min-h-screen bg-[#1e2328] px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 animate-fadeIn text-[#ff5c5c]">
        Experience
      </h2>
      <div className="max-w-5xl mx-auto space-y-10">
        {experiences.map(({ title, company, duration, description }, index) => (
          <div
            key={index}
            className="bg-[#2a2f35] p-6 rounded-2xl shadow-lg animate-fadeIn hover:scale-105 transition"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="md:w-4/5">
                <h3 className="text-2xl font-semibold text-white mb-1">{title}</h3>
                <p className="text-[#ff5c5c] mb-2">{company}</p>
                <p className="text-gray-200">{description}</p>
              </div>
              <p className="text-sm text-gray-400 md:w-1/5 md:text-right whitespace-nowrap mt-4 md:mt-0">
                {duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience;