"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <main className="px-6 md:px-12 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Get In <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Touch</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? Feel free to reach out using the form below.
        </p>
      </motion.div>

      {/* Contact Section */}
      <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4 p-4 border rounded-xl bg-card shadow-sm">
            <Mail className="w-6 h-6 text-emerald-600" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-muted-foreground">sameer08@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 border rounded-xl bg-card shadow-sm">
            <Phone className="w-6 h-6 text-emerald-600" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-muted-foreground">+92 3177790905</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 border rounded-xl bg-card shadow-sm">
            <MapPin className="w-6 h-6 text-emerald-600" />
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-muted-foreground">Lahore, Pakistan</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault()
            alert("Form submitted 🚀 (Backend integration required)")
          }}
        >
          <div>
            <label className="block text-sm font-medium mb-2">Your Name</label>
            <Input type="text" placeholder="Enter your name" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input type="email" placeholder="Enter your email" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <Textarea placeholder="Write your message here..." required />
          </div>
          <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-emerald-500 to-teal-600">
            Send Message
          </Button>
        </motion.form>
      </div>
    </main>
  )
}
