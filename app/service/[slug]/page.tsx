"use client";

import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function Home() {
  const projects = [
    {
      slug: "digital-branding",
      title: "Digital Branding",
      ar: "هوية بصرية كاملة",
      img: "https://images.unsplash.com/photo-1626785774573-4b799315147d?w=800",
    },
    {
      slug: "ui-ux-dashboard",
      title: "UI/UX Dashboard",
      ar: "لوحة تحكم احترافية",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    },
    {
      slug: "mobile-app-design",
      title: "Mobile App Design",
      ar: "تطوير تطبيقات",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    },
  ];

  const capabilities = [
    "Digital Marketing",
    "Performance Marketing",
    "Media Buying",
    "Paid Advertising",
    "Funnel Strategy",
    "Brand Launch",
  ];

  const services = [
    "Facebook Ads",
    "Google Ads",
    "TikTok Ads",
    "Lead Generation",
    "Sales Funnels",
    "Brand Strategy",
  ];

  return (
    <main className="min-h-screen bg-[#030014] text-white overflow-x-hidden relative">
      {/* Background */}
      <div className="fixed inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#f59e0b_0%,transparent_70%)] blur-[120px]" />

      <div
        className="fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#fff 1px, transparent 1px),
            linear-gradient(90deg, #fff 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-4 flex items-center justify-between backdrop-blur-md bg-black/20 border-b border-white/10">
        <h1 className="text-amber-500 font-black text-xl tracking-widest">
          PORTFOLIO
        </h1>

        <div className="hidden md:flex gap-8 font-semibold text-sm">
          <a href="#capabilities">Capabilities</a>
          <a href="#services">Services</a>
          <a href="#works">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <UserButton />
      </nav>

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center relative pt-20">
        <div className="absolute inset-0 opacity-40">
          <Canvas>
            <ambientLight intensity={0.6} />

            <Float speed={4}>
              <mesh>
                <torusKnotGeometry args={[1.5, 0.4, 128, 32]} />
                <MeshDistortMaterial
                  color="#f59e0b"
                  distort={0.4}
                  speed={2}
                />
              </mesh>
            </Float>
          </Canvas>
        </div>

        <div className="relative z-10 text-center">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-6xl md:text-[120px] font-black"
          >
            AHMED HATAB
          </motion.h1>

          <p className="text-amber-500 tracking-[0.4em] uppercase mt-4 font-bold">
            Performance Marketing Expert
          </p>

          <div className="grid grid-cols-3 gap-10 mt-16">
            <div>
              <h3 className="text-4xl font-black text-amber-500">50+</h3>
              <p className="text-gray-400">Projects</p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-amber-500">100+</h3>
              <p className="text-gray-400">Clients</p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-amber-500">10M+</h3>
              <p className="text-gray-400">Ad Spend</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <motion.section
        id="capabilities"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-24 relative z-10"
      >
        <h2 className="text-4xl font-black text-center mb-12">
          CORE CAPABILITIES
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <motion.div
              key={cap}
              whileHover={{ y: -8 }}
              className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 hover:border-amber-500 transition"
            >
              <h3 className="font-bold text-xl">{cap}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-6 py-24 relative z-10"
      >
        <h2 className="text-4xl font-black text-center mb-12">
          SERVICES
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service}
              className="p-8 rounded-3xl bg-gray-900/40 border border-gray-800 hover:border-amber-500 transition"
            >
              <h3 className="font-bold text-lg">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="works"
        className="max-w-7xl mx-auto px-6 py-24 relative z-10"
      >
        <h2 className="text-4xl font-black text-center mb-12">
          SELECTED WORKS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              href={`/service/${project.slug}`}
              key={project.slug}
              className="block"
            >
              <Tilt scale={1.03}>
                <div className="bg-gray-900/40 border border-gray-800 rounded-3xl overflow-hidden hover:border-amber-500 transition">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-6">
                    <h3 className="font-bold text-xl">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 mt-2">
                      {project.ar}
                    </p>

                    <span className="text-amber-500 text-sm mt-4 block">
                      View Details →
                    </span>
                  </div>
                </div>
              </Tilt>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center relative z-10">
        <motion.a
          href="https://wa.me/201220414662"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-amber-500 text-black px-10 py-5 rounded-full text-xl font-black"
        >
          CONTACT ME
        </motion.a>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-white/10 py-12 text-center text-gray-400 relative z-10"
      >
        <div className="flex justify-center gap-8">
          <a
            href="https://wa.me/201220414662"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500"
          >
            WhatsApp
          </a>

          <a
            href="https://www.facebook.com/share/1J1qMR6gxU/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500"
          >
            Facebook
          </a>
        </div>

        <p className="mt-6 text-sm">
          © 2026 Ahmed Hatab. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}