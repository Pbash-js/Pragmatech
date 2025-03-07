"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - hide elements
      gsap.set([taglineRef.current, subtitleRef.current, buttonRef.current], {
        opacity: 0,
        y: 20,
      })

      // Animation timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.to(taglineRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.6",
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.6",
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-100 to-white" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-gray-200 to-transparent blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-l from-gray-200 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1
          ref={taglineRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6"
        >
          We craft digital <span className="text-primary">experiences</span> that matter
        </h1>
        <p ref={subtitleRef} className="max-w-2xl mx-auto text-xl sm:text-2xl text-gray-600 mb-10">
          Premium software development and design solutions for forward-thinking businesses
        </p>
        <div ref={buttonRef}>
          <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg">
            <Link href="#contact">Start a project</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

