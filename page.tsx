import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SafetyTips } from "@/components/safety-tips"
import { Statistics } from "@/components/statistics"
import { Resources } from "@/components/resources"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SafetyTips />
      <Statistics />
      <Resources />
      <Footer />
      <Chatbot />
    </main>
  )
}
