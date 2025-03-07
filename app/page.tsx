import type { Metadata } from "next"
import Hero from "@/components/hero"
import WhatWeDo from "@/components/what-we-do"
import Showcase from "@/components/showcase"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Pragmatech | Software Development & Design",
  description: "Premium software development and design solutions for modern businesses.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WhatWeDo />
      <Showcase />
      <CallToAction />
      <Footer />
    </main>
  )
}

