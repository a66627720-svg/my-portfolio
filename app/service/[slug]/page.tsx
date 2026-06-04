"use client";
import React from 'react';
import { UserButton } from "@clerk/nextjs";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Link from "next/link"; 

export default function Home() {
  const projects = [
    { slug: "digital-branding", title: "Digital Branding", ar: "هوية بصرية كاملة", img: "https://images.unsplash.com/photo-1626785774573-4b799315147d?w=800" },
    { slug: "ui-ux-dashboard", title: "UI/UX Dashboard", ar: "لوحة تحكم احترافية", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" },
    { slug: "mobile-app-design", title: "Mobile App Design", ar: "تطوير تطبيقات", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800" },
  ];

  const capabilities = ["Digital Marketing", "Performance Marketing", "Media Buying", "Paid Advertising", "Funnel Strategy", "Brand Launch"];

  return (
    <main className="min-h-screen bg-[#030014] text-white relative overflow-x-hidden selection:bg-amber-500/30">
      {/* الخلفية */}
      <div className="fixed inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#f59e0b_0%,transparent_70%)] blur-[120px]" />
      <div className="fixed inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 flex items-center justify-between px-8 py-4 bg-gray-900/10 backdrop-blur-md border-b border-gray-800/40">
        <div className="text-amber-500 font-black text-xl tracking-wider select-none">PORTFOLIO</div>
        <UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: "w-10 h-10 border-2 border-amber-500/80" } }} />
      </nav>

      {/* Hero Section */}
      <section className="h-[80vh] flex flex-col items-center justify-center relative z-10 pt-20">
        <div className="absolute inset-0 opacity-40 pointer-events-none z-0">
          <Canvas>
            <ambientLight intensity={0.5} />
            <Float speed={4}>
              <mesh>
                <torusKnotGeometry args={[1.5, 0.4, 128, 32]} />
                <MeshDistortMaterial color="#f59e0b" speed={2} distort={0.4} />
              </mesh>
            </Float>
          </Canvas>
        </div>

        <div className="text-center z-10 relative cursor-pointer select-none px-4">
          <motion.h1 
            whileHover={{ scale: 1.05 }}
            className="text-6xl md:text-[120px] font-black tracking-tighter text-white hover:text-amber-500 transition-colors duration-300"
          >
            AHMED HATAB
          </motion.h1>
          <motion.p className="text-lg md:text-xl text-amber-500 mt-4 tracking-[0.5em] uppercase font-bold">
            The Leader
          </motion.p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-black mb-12 text-center border-b border-gray-800 pb-6">CORE CAPABILITIES</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {capabilities.map((cap, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="p-6 bg-gray-900/40 border border-gray-800 rounded-2xl hover:border-amber-500/50 transition-all cursor-pointer">
              <h3 className="text-lg font-bold">{cap}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Selected Works */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-black mb-12 text-center">SELECTED WORKS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <Link key={i} href={`/service/${p.slug}`} className="block group">
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02}>
                <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-2 hover:border-amber-500/40 transition-all">
                  <div className="overflow-hidden rounded-2xl">
                    <img src={p.img} alt={p.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-xl group-hover:text-amber-500">{p.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{p.ar}</p>
                    <span className="text-amber-500 text-xs mt-3 block font-bold group-hover:underline">عرض التفاصيل ←</span>
                  </div>
                </div>
              </Tilt>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="py-20 text-center border-t border-gray-800 z-10 relative">
        <a href="https://wa.me/201220414662" target="_blank" rel="noopener noreferrer">
          <motion.button whileHover={{ scale: 1.05 }} className="bg-amber-500 text-black px-12 py-4 rounded-full font-black text-xl mb-10 hover:bg-white transition-all">
            CONTACT ME
          </motion.button>
        </a>
        <div className="flex justify-center gap-8 text-gray-400">
          <a href="https://wa.me/201220414662" className="hover:text-amber-500 transition-colors">WhatsApp</a>
          <a href="https://www.facebook.com/share/1J1qMR6gxU/" className="hover:text-amber-500 transition-colors">Facebook</a>
        </div>
      </footer>
    </main>
  );
}