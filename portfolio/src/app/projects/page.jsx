"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function Projects() {
  const projects = [
    { id: 1, title: "E-Commerce Store", img: "https://img.freepik.com/premium-vector/ecommerce-project-banner-landing-page-template-website_541075-1532.jpg", desc: "A modern e-commerce platform with Next.js & Stripe integration." },
    { id: 2, title: "Portfolio Website", img: "https://tse3.mm.bing.net/th/id/OIP.UKQTqcuclH5azTtQUoI_-QHaE8?pid=Api&P=0&h=220", desc: "Responsive portfolio with animations and SEO optimization." },
    { id: 3, title: "Chat App", img: "https://tse2.mm.bing.net/th/id/OIP.2T49Pke_aCSjIftWw_obUgHaEc?pid=Api&P=0&h=220", desc: "Real-time chat app using MERN + Socket.io." },
    { id: 4, title: "Dashboard", img: "https://tse4.mm.bing.net/th/id/OIP.oc26_6m323WrKpkJIMpTXAHaFj?pid=Api&P=0&h=220", desc: "Admin dashboard with charts, authentication & CRUD." },
    { id: 5, title: "Blog CMS", img: "https://tse4.mm.bing.net/th/id/OIP.9F4suJo3K731tGhymaBuqwHaEK?pid=Api&P=0&h=220", desc: "Headless CMS powered blog with markdown support." },
  ]

  return (
    <section id="projects" className="max-w-6xl mx-auto text-center py-20">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h2>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
          style={{ padding: "0 2rem" }}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={project.id} className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex justify-center"
              >
                <Card className="w-[300px] rounded-2xl overflow-hidden shadow-lg bg-card group">
                  {/* Image with Hover Zoom */}
                  <div className="overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <CardContent className="p-4 text-left">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    {/* Scrolling Text Animation */}
                    <motion.p
                      className="text-sm text-muted-foreground mt-2 whitespace-nowrap overflow-hidden"
                      animate={{ x: ["0%", "-100%"] }}
                      transition={{
                        repeat: Infinity,
                        duration: 8,
                        ease: "linear",
                      }}
                    >
                      {project.desc} &nbsp; 🚀
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

