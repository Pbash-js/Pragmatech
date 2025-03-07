"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code, Palette, Zap } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

function ServiceCard({ icon, title, description, delay }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current

    gsap.fromTo(
      card,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
        delay: delay * 0.2,
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [delay])

  return (
    <div
      ref={cardRef}
      className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
    >
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const heading = headingRef.current

    gsap.fromTo(
      heading,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: heading,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with design excellence to create exceptional digital products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Code size={28} />}
            title="Software Development"
            description="We build robust, scalable applications using cutting-edge technologies and best practices."
            delay={0}
          />
          <ServiceCard
            icon={<Palette size={28} />}
            title="UI/UX Design"
            description="We create intuitive, engaging user experiences that delight users and drive business results."
            delay={1}
          />
          <ServiceCard
            icon={<Zap size={28} />}
            title="Digital Transformation"
            description="We help businesses evolve through strategic technology implementation and process optimization."
            delay={2}
          />
        </div>
      </div>
    </section>
  )
}

