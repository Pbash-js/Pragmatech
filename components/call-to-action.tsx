"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function CallToAction() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formState)

    // Animation for successful submission
    gsap.to(formRef.current, {
      y: 10,
      opacity: 0.8,
      duration: 0.3,
      onComplete: () => {
        setFormState({ name: "", email: "", message: "" })
        gsap.to(formRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.3,
        })
      },
    })
  }

  useEffect(() => {
    const content = contentRef.current
    const form = formRef.current

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none",
      },
    })

    tl.fromTo(content, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }).fromTo(
      form,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.6",
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div ref={contentRef}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's create something amazing together</h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to transform your ideas into reality? Get in touch with our team to discuss your project.
          </p>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <ArrowRight size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Collaborative approach</h3>
                <p className="text-gray-600">We work closely with you throughout the entire process</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <ArrowRight size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Transparent communication</h3>
                <p className="text-gray-600">Clear updates and insights at every stage of development</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <ArrowRight size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Results-driven solutions</h3>
                <p className="text-gray-600">Focus on delivering measurable business outcomes</p>
              </div>
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
        >
          <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell us about your project"
                className="w-full min-h-[120px]"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send message
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

