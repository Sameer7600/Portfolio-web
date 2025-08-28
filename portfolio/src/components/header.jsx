"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Sun, Moon, ChevronRight, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'

// ---------- Config ----------
const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

// ---------- Theme Toggle ----------
function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  const isDark = theme === 'dark'
  return (
    <Button
      variant="ghost"
      aria-label="Toggle theme"
      className="rounded-2xl"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}

// ---------- Logo ----------
function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-2">
      <motion.span
        className="relative grid place-items-center h-8 w-8 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md"
        whileHover={{ rotate: 8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      >
        <motion.span
          className="h-3 w-3 rounded-full bg-white/90"
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.span>
      <span className="text-lg font-semibold tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Portfolio</span>
      </span>
    </Link>
  )
}

// ---------- Desktop Nav ----------
function DesktopNav() {
  const pathname = usePathname()
  return (
    <nav className="hidden md:flex items-center gap-1">
      {NAV_LINKS.map((link) => {
        const active = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href))
        return (
          <Link
            key={link.href}
            href={link.href}
            className="relative px-3 py-2 text-sm font-medium rounded-xl hover:text-foreground/90 text-foreground/70"
          >
            <span className="relative z-10">{link.label}</span>
            <AnimatePresence>
              {active && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-xl bg-foreground/10 dark:bg-foreground/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </AnimatePresence>
          </Link>
        )
      })}
    </nav>
  )
}

// ---------- Socials ----------
function Socials() {
  return (
    <div className="hidden lg:flex items-center gap-2">
      <Button asChild variant="ghost" size="icon" className="rounded-2xl">
        <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github className="h-5 w-5" />
        </a>
      </Button>
      <Button asChild variant="ghost" size="icon" className="rounded-2xl">
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin className="h-5 w-5" />
        </a>
      </Button>
      <Button asChild variant="ghost" size="icon" className="rounded-2xl">
        <a href="mailto:hello@example.com" aria-label="Email">
          <Mail className="h-5 w-5" />
        </a>
      </Button>
    </div>
  )
}

// ---------- Mobile Nav ----------
function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden rounded-2xl" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 p-0">
        <div className="px-5 py-4 border-b">
          <Logo />
        </div>
        <div className="p-3">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href))
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between px-4 py-3 rounded-xl hover:bg-muted/60"
                  >
                    <span className="text-base font-medium">
                      {link.label}
                    </span>
                    <ChevronRight className={`h-4 w-4 transition-transform ${active ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="px-4 pt-4">
            <Button asChild className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600">
              <a href="#contact">Hire Me</a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

// ---------- Header ----------
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60',
        scrolled ? 'border-b' : 'border-b border-transparent',
      ].join(' ')}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <DesktopNav />

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <Socials />
            <div className="hidden md:block">
              <Button asChild className="rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600">
                <a href="#contact">Hire Me</a>
              </Button>
            </div>
            <MobileNav />
          </div>
        </div>
      </div>

      {/* Subtle animated line */}
      <motion.div
        className="h-px w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
      />
    </header>
  )
}
