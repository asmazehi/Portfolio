'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl lg:flex lg:items-start lg:gap-12 relative"
        >
          <div className="lg:w-2/3 max-w-xl z-10">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">About Me</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              I am in my final year of engineering studies at ESPRIT, specializing in <span className="font-semibold text-pink-500">Cloud Computing and DevOps</span>. My main expertise and academic focus are in building, automating, and scaling cloud-native solutions and DevOps pipelines.<br /><br />
              I am also a passionate <span className="font-semibold text-pink-500">Full Stack Software Engineer</span> with strong experience in modern web and application development.<br /><br />
              Beyond tech, I have a long-standing career in swimming, having competed with the Tunisian national team for years. I am currently a swimming coach, which has taught me discipline, leadership, and a love for helping others grow.<br /><br />
              My journey in both tech and sports has shaped me into a professional who values teamwork, perseverance, and continuous improvement. I am seeking an end-of-studies internship starting January 2025, where I can apply and enhance my skills in Cloud, DevOps, and ML/AI.
            </p>
            <ul className="mt-6 space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-center"><span className="mr-2">•</span> Cloud platforms (OpenStack, Azure, AWS)</li>
              <li className="flex items-center"><span className="mr-2">•</span> DevOps practices and tools (Docker, Kubernetes, OpenShift, CI/CD, GitOps)</li>
              <li className="flex items-center"><span className="mr-2">•</span> Full Stack Software Engineering (frontend & backend)</li>
              <li className="flex items-center"><span className="mr-2">•</span> Machine Learning and AI (currently expanding knowledge)</li>
              <li className="flex items-center"><span className="mr-2">•</span> Professional swimmer & coach: discipline, leadership, and teamwork</li>
            </ul>
          </div>
          
          {/* Image Container with reduced black merge */}
          <div
            className="absolute top-0 right-0 w-[40rem] h-[60rem] rounded-2xl z-0 hidden lg:block"
            style={{
              backgroundImage: 'url(/img/ProPic.JPG)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
              right: '-8rem',
              top: '-4rem',
            }}>

            </div>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl mt-12"
        >
          <h3 className="text-2xl font-bold text-[#6d143c] dark:text-pink-200 mb-4">Licenses & Certifications</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex items-center gap-4 bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4 shadow">
              <img src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png" alt="AWS Logo" className="h-10 w-10 object-contain rounded" />
              <div>
                <div className="font-semibold text-pink-700 dark:text-pink-300">AWS Academy Graduate - AWS Academy Cloud Foundations</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Amazon Web Services (AWS)</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Issued Jan 2025</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4 shadow">
              <img src="/img/Cisco_logo_blue_2016.svg.png" alt="Cisco Logo" className="h-10 w-10 object-contain rounded bg-white p-1" />
              <div>
                <div className="font-semibold text-pink-700 dark:text-pink-300">CCNA: Switching, Routing, and Wireless Essentials</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Cisco</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Issued May 2024</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}