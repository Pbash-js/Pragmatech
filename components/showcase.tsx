"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

interface Project {
  id: number
  title: string
  category: string
  image: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Fintech Dashboard",
    category: "Web Application",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "Health & Wellness App",
    category: "Mobile Application",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    category: "Web Application",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    title: "Smart Home System",
    category: "IoT Solution",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const heading = headingRef.current
    const slider = sliderRef.current
    const projectItems = slider?.querySelectorAll(".project-item")

    // Animate heading
    gsap.fromTo(
      heading,
      { y: 50, opacity: 0 },
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

    // Animate project items
    projectItems?.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: slider,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        },
      )
    })

    // Horizontal scroll effect
    if (slider && window.innerWidth > 768) {
      const totalWidth = (projectItems?.length || 0) * 400 - window.innerWidth + 100

      gsap.to(slider, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: slider,
          start: "top center",
          end: `+=${totalWidth + 500}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section id="showcase" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16" ref={headingRef}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Work</h2>
        <p className="text-xl text-gray-600 max-w-3xl">Explore our portfolio of innovative digital solutions</p>
      </div>

      <div className="md:pl-8" ref={sliderRef}>
        <div className="flex space-x-8 md:w-max">
          {projects.map((project) => (
            <div key={project.id} className="project-item flex-shrink-0 w-full md:w-[400px] group cursor-pointer">
              <div className="overflow-hidden rounded-2xl shadow-sm transition-all duration-300 group-hover:shadow-md">
                <div className="relative h-[300px] w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="bg-white p-6">
                  <div className="text-sm font-medium text-primary mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

