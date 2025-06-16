'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    name: 'Cloud Platform Project – COCO-RICO',
    year: '2025', // Added year
    description: 'A comprehensive AI-enhanced food management and e-commerce platform with a hybrid cloud deployment.',
    technologies: [
      'OpenStack',
      'Azure AKS',
      'Docker',
      'Kubernetes',
      'Angular',
      'Spring Boot',
      'MySQL',
      'Ansible',
      'Helm',
      'Grafana',
      'Prometheus',
      'HAProxy'
    ],
    details: [
      'Implemented a 3-tier architecture across a hybrid cloud environment (OpenStack + Azure).',
      'Configured a multi-master Kubernetes cluster with HAProxy load balancer for high availability.',
      'Integrated monitoring solutions using Grafana and Prometheus for performance tracking.',
      'Utilized key OpenStack services: Keystone, Nova, Glance, Neutron, Cinder, Swift, and Octavia.',
      'Built backend with Spring Boot and frontend with Angular for robust functionality.',
    ],
    githubLinks: [
      { name: 'View on GitLab', url: 'https://gitlab.com/asmazehi/CocoRico' }
    ]
  },
  {
    name: 'Fem-Health Multiplatform Application',
    year: '2024', // Added year
    description: "A comprehensive cross-platform health platform empowering women and focusing on their mental and physical well-being.",
    technologies: [
      'Symfony',
      'PHPMyAdmin',
      'FlutterFlow',
      'Firebase',
      'JavaFX',
      'Java',
      'JavaScript',
      'HTML5',
      'CSS'
    ],
    details: [
      'Developed a robust web platform using Symfony with a distributed architecture and PHPMyAdmin for the database.',
      'Created an intuitive mobile application using FlutterFlow and Firebase for real-time data.',
      'Designed a powerful desktop application with JavaFX and Java, also utilizing PHPMyAdmin.',
      'Integrated various APIs and bundles across all platforms to enhance functionality.',
      'Includes modules for user, event, sponsor, and blog management, alongside an e-commerce platform.',
    ],
    githubLinks: [
      { name: 'GitHub (Web Platform)', url: 'https://github.com/asmazehi/FemHealth-WEB-' },
      { name: 'GitHub (Java Desktop)', url: 'https://github.com/asmazehi/FemHealth-JAVA-' }
    ]
  },
  {
    name: 'OpenShift GitOps Deployment Project',
    year: '2024', // Added year (based on Sopra HR internship period previously provided)
    description: 'Deployment and management of applications on OpenShift using GitOps principles during a corporate internship.',
    technologies: [
      'Kubernetes',
      'OpenShift',
      'GitOps',
      'CI/CD',
      'Infrastructure as Code (IaC)'
    ],
    details: [
      'Gained hands-on experience with Kubernetes orchestration and containerization concepts.',
      'Configured and managed GitOps pipelines to automate application deployments and updates.',
      'Collaborated with development teams to integrate GitOps into the CI/CD pipeline.',
      'Utilized IaC tools to define and manage infrastructure resources efficiently.',
      'Identified and resolved deployment issues, optimizing processes for efficiency and reliability.',
    ],
    githubLinks: [
      { name: 'View on GitHub', url: 'https://github.com/asmazehi/openshiftAPI' }
    ]
  },
  {
    name: 'Women\'s Mental Health Website',
    year: '2023', // Added year
    description: 'A dedicated website focusing on women\'s mental health with environmental themes.',
    technologies: [
      'PHP',
      'JavaScript',
      'HTML5',
      'CSS',
      'PHPMyAdmin'
    ],
    details: [
      'Developed core functionalities including event management and a forum/blog system.',
      'Implemented robust user management with secure login features.',
      'Designed and integrated modules for product management, complaints, and reservations.',
      'Focused on creating an intuitive user experience and visually appealing interface.',
    ],
    githubLinks: [
      { name: 'View on GitHub', url: 'https://github.com/asmazehi/hers' }
    ]
  },
  {
    name: 'QT Desktop Application (Travel Agency)',
    year: '2023', // Added year (assuming Q4 2022 to Q1 2023 for 2023 placement)
    description: 'A comprehensive travel agency management application developed using the Qt C++ framework.',
    technologies: [
      'Qt Creator',
      'C++',
      'Oracle SQL Developer',
      'Arduino',
      'RFID'
    ],
    details: [
      'Features a dashboard and API functionalities for efficient management.',
      'Assists employees in managing client, partner, offer, and supply details stored in an Oracle database.',
      'Integrated Arduino projects: employee ID detection, RFID-based supply management, and a smoke/fire alarm system.',
      'Focused on robust backend logic and a user-friendly graphical interface.',
    ],
    githubLinks: [
      { name: 'View on GitHub', url: 'https://github.com/asmazehi/TuniTravel-Agency' }
    ]
  },
  {
    name: '2D Video Game Development',
    year: '2022', // Added year
    description: 'A 2D video game built from scratch using the C language and SDL library on Ubuntu.',
    technologies: [
      'C',
      'SDL Library',
      'Ubuntu',
      'Adobe Photoshop'
    ],
    details: [
      'Implemented core game mechanics including perfect collision detection and clean character movement.',
      'Designed a comprehensive main menu system, tracking scores and player lives.',
      'All graphical assets, including menus, characters, and enemies, were created and animated using Adobe Photoshop.',
      'Focused on foundational game development principles and graphic integration.',
    ],
    // Corrected the malformed GitHub link
    githubLinks: [
      { name: 'View on GitHub', url: 'https://github.com/asmazehi/Gods-Return' }
    ]
  },
]

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-12">
            Featured Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.name}</h3>
                  {project.year && (
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1">
                      {project.year}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center rounded-md bg-pink-50 dark:bg-pink-900/50 px-2 py-1 text-xs font-medium text-pink-700 dark:text-pink-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="mb-6 space-y-2">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <span className="mr-2 text-pink-500 dark:text-pink-400">•</span>
                      <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-col sm:flex-row gap-2">
                  {project.githubLinks.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-pink-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500 flex-1"
                    >
                      {link.name}
                    </a>
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