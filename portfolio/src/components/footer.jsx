"use client"

import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Brand / Intro */}
        <div className="col-span-2">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
            Sameer
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            MERN Stack Developer creating modern, responsive, and elegant web
            applications with smooth animations & scalable backend systems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-emerald-500 transition">Home</a></li>
            <li><a href="/about" className="hover:text-emerald-500 transition">About</a></li>
            <li><a href="/projects" className="hover:text-emerald-500 transition">Projects</a></li>
            <li><a href="/blog" className="hover:text-emerald-500 transition">Blog</a></li>
            <li><a href="/contact" className="hover:text-emerald-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-emerald-500 transition">Docs</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition">Blog Posts</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition">Case Studies</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition">Open Source</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition">Tutorials</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-emerald-500 transition">Web Development</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition">API Development</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition">SEO Optimization</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition">Freelancing</a></li>
          </ul>
        </div>
      </div>

      {/* Socials & Copyright */}
      <div className="border-t py-6 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Socials */}
        <div className="flex space-x-4">
          <a href="mailto:youremail@gmail.com" className="p-2 rounded-full bg-muted hover:bg-emerald-500 hover:text-white transition">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://github.com/yourgithub" target="_blank" className="p-2 rounded-full bg-muted hover:bg-emerald-500 hover:text-white transition">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="p-2 rounded-full bg-muted hover:bg-emerald-500 hover:text-white transition">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" target="_blank" className="p-2 rounded-full bg-muted hover:bg-emerald-500 hover:text-white transition">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" target="_blank" className="p-2 rounded-full bg-muted hover:bg-emerald-500 hover:text-white transition">
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground text-center md:text-right">
          © {new Date().getFullYear()} Sameer. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
