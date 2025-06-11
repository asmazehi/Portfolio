'use client'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Main navbar with seamless gradient fade */}
        <div className="relative">
          {/* Solid navbar background */}
          <div className="absolute inset-0 bg-[#6d143c] h-20"></div>
          
          {/* Gradient fade extending below */}
          <div className="absolute inset-x-0 top-20 h-16 bg-gradient-to-b from-[#6d143c] via-[#6d143c]/30 to-transparent"></div>
          
          <nav className="relative flex items-center justify-between h-20 px-6 lg:px-12 backdrop-blur-md" aria-label="Global">
            {/* Logo - much bigger and more prominent */}
            <div className="flex lg:flex-1">
              <a href="#" className="flex items-center relative">
                <div className="relative">
                  {/* Logo glow effect - reduced */}
                  <div className="absolute inset-0 bg-pink-300/10 rounded-full blur-xl scale-110"></div>
                  <img 
                    src="/img/AsmaZehiLogo.png" 
                    alt="Asma Zehi Personal Logo" 
                    className="relative h-20 w-auto drop-shadow-xl transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(244,114,182,0.3)] filter brightness-105 contrast-105" 
                  />
                </div>
              </a>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg p-2.5 text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden lg:flex lg:gap-x-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-sm font-medium text-white/85 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/5 group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-[60]' : 'hidden'}`}>
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300" 
          onClick={() => setMobileMenuOpen(false)} 
        />
        
        {/* Menu panel */}
        <div className="fixed inset-y-0 right-0 z-[70] w-full overflow-y-auto bg-gradient-to-br from-[#6d143c] via-[#7d1644] to-[#8b1a4a] px-6 py-6 sm:max-w-sm shadow-2xl">
          {/* Mobile header */}
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-pink-300/10 rounded-full blur-lg scale-110"></div>
                <img 
                  src="/img/AsmaZehiLogo.png" 
                  alt="Asma Zehi Personal Logo" 
                  className="relative h-16 w-auto drop-shadow-xl filter brightness-105" 
                />
              </div>
            </a>
            <button
              type="button"
              className="rounded-lg p-2.5 text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          {/* Mobile navigation */}
          <div className="mt-8 flow-root">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center rounded-xl px-4 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="relative">
                    {item.name}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}