'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-b from-[#6d143c]/10 to-white dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/img/ProPic.JPG"
              alt="Asma Zehi"
              className="mx-auto mb-6 rounded-full w-40 h-40 object-cover border-4 border-pink-400 shadow-lg"
            />
            <h1 className="text-4xl font-bold tracking-tight text-[#6d143c] dark:text-pink-200 sm:text-6xl">
              Asma Zehi
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-700 dark:text-gray-200">
              <span className="font-semibold text-pink-500">DevOps/Cloud engineering student</span> &amp; Full Stack Developer
            </p>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
              Final year engineering student at ESPRIT, passionate about building, deploying, and scaling modern solutions.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="rounded-md bg-pink-500 px-4 py-2 text-base font-semibold text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
              >
                Get in touch
              </a>
              <a href="#projects" className="text-base font-semibold leading-6 text-pink-500 dark:text-pink-300 hover:underline">
                View projects <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 