'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-8">
            Get in Touch
          </h2>
          <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 mb-8">
            I'm currently seeking an end-of-studies internship starting January 2026. Feel free to reach out if you're interested in working together!
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <span className="text-gray-600 dark:text-gray-300">Email:</span>
              <a
                href="mailto:asmazehi@gmail.com"
                className="text-pink-500 dark:text-pink-400 hover:text-pink-400 dark:hover:text-pink-300"
              >
                asmazehi@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-gray-600 dark:text-gray-300">Phone:</span>
              <a
                href="tel:+21656473111"
                className="text-pink-500 dark:text-pink-400 hover:text-pink-400 dark:hover:text-pink-300"
              >
                +216 56473111
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-gray-600 dark:text-gray-300">Location:</span>
              <span className="text-gray-900 dark:text-white">Tunis, Tunisia</span>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://github.com/asmazehi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/asmazehi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 