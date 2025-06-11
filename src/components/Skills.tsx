'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    name: 'Programming Languages',
    skills: ['Java', 'C', 'C++', 'Python', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Shell']
  },
  {
    name: 'Frameworks & Libraries',
    skills: ['Bootstrap', 'Symfony', 'JavaFX', 'FlutterFlow', 'QT', 'OpenShift']
  },
  {
    name: 'Databases',
    skills: ['SQL', 'Firebase', 'phpMyAdmin', 'Oracle']
  },
  {
    name: 'DevOps & Cloud Tools',
    skills: ['Git', 'GitHub', 'OpenShift', 'Docker', 'Kubernetes', 'Containerd', 'Ansible', 'Helm', 'OpenStack']
  },
  {
    name: 'Languages',
    skills: ['Arabic (Native)', 'French (Fluent)', 'English (Fluent)']
  }
]

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-12">
            Skills & Expertise
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg ring-1 ring-gray-200 dark:ring-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-flex items-center rounded-md bg-pink-50 dark:bg-pink-900/50 px-2 py-1 text-sm font-medium text-pink-700 dark:text-pink-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 