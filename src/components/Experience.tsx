'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    company: 'Sopra HR Software',
    role: 'Corporate Immersion Internship',
    period: 'August 2024 – September 2024',
    description: 'Deploying an application on OpenShift via GitOps.',
  },
  {
    company: 'Teol: Language School (via AIESEC)',
    role: 'Volunteering Internship',
    period: 'June 2023 – August 2023',
    description: 'Taught English to students aged 14 and up.',
  },
  {
    company: 'Digit-R Development Company',
    role: 'Internship in Human Resources Management',
    period: 'June 2022 – July 2022',
    description: "Redesigned the company's front website using HTML and CSS.",
  },
]

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-12">
            Professional Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-pink-500"
              >
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-pink-500" />
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{experience.role}</h3>
                  <p className="text-lg text-pink-500 dark:text-pink-400">{experience.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{experience.period}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 