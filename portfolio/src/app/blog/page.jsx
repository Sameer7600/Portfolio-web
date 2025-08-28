"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const blogs = [
  {
    title: "Getting Started with Next.js 14",
    description: "Learn how to build modern web applications using Next.js 14, App Router, and server actions.",
    image: "https://tse2.mm.bing.net/th/id/OIP.ivdXUbGw-jvF73vKrUl7AQHaEK?pid=Api&P=0&h=220",
    date: "Aug 10, 2025",
    category: "Next.js",
    link: "/blog/nextjs-14"
  },
  {
    title: "MERN Stack Authentication",
    description: "Step-by-step guide on creating secure authentication with JWT, bcrypt, and MongoDB.",
    image: "https://i.ytimg.com/vi/fLYgdhixiek/maxresdefault.jpg",
    date: "Jul 28, 2025",
    category: "MERN",
    link: "/blog/mern-auth"
  },
  {
    title: "UI Design with Tailwind & Shadcn",
    description: "Build elegant and consistent UI components with Tailwind CSS and shadcn/ui.",
    image: "https://tse4.mm.bing.net/th/id/OIP.86EvUkQzcqJo5elJhCODPgHaEK?pid=Api&P=0&h=220",
    date: "Jul 15, 2025",
    category: "UI/UX",
    link: "/blog/ui-tailwind-shadcn"
  },
  {
    title: "Deploying to Vercel",
    description: "How to deploy your Next.js projects to Vercel with custom domains and environment variables.",
    image: "https://tse1.mm.bing.net/th/id/OIP.tHx6CJsXQ59m73j3Xl4VYgHaEO?pid=Api&P=0&h=220",
    date: "Jun 30, 2025",
    category: "DevOps",
    link: "/blog/deploy-vercel"
  }
]

export default function Blog() {
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
          My <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Blog</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Sharing my knowledge and experiences about development, design, and deployment.
        </p>
      </motion.div>

      {/* Blog Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Card className="group overflow-hidden border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="relative w-full h-44 overflow-hidden">
                <motion.img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{blog.category}</Badge>
                  <span className="text-xs text-muted-foreground">{blog.date}</span>
                </div>
                <h2 className="text-lg font-semibold mt-2">{blog.title}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{blog.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href={blog.link}>Read More</a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
