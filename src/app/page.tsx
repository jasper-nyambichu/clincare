"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-background font-body-md text-on-surface">
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-desktop h-20 transition-all ${
          scrolled
            ? "bg-surface/70 backdrop-blur-md border-b border-white/20 shadow-md"
            : "bg-surface/70 backdrop-blur-md border-b border-white/20 shadow-sm"
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="font-display-lg text-headline-lg text-primary tracking-tight">
            ClinCare
          </span>
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#" className="text-primary font-bold border-b-2 border-primary font-label-md text-label-md py-1">
            Home
          </a>
          <a href="#" className="text-on-surface-variant font-medium hover:text-primary transition-colors font-label-md text-label-md py-1">
            Features
          </a>
          <a href="#" className="text-on-surface-variant font-medium hover:text-primary transition-colors font-label-md text-label-md py-1">
            Services
          </a>
          <a href="#" className="text-on-surface-variant font-medium hover:text-primary transition-colors font-label-md text-label-md py-1">
            About
          </a>
          <a href="#" className="text-on-surface-variant font-medium hover:text-primary transition-colors font-label-md text-label-md py-1">
            Contact
          </a>
        </div>
        <Link
          href="/login"
          className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-md text-label-md scale-95 active:scale-90 transition-all hover:shadow-lg"
        >
          Login
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-24 md:pt-32 md:pb-32 px-margin-desktop hero-gradient">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm mb-6">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              The Professional Choice for Clinics
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-6 leading-[1.1]">
              The Modern Operating System For <span className="text-primary">Healthcare Providers</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
              Manage patients, appointments, doctors, and billing from one intelligent, AI-powered platform designed for precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="medical-gradient text-on-primary px-8 py-4 rounded-xl font-headline-md text-label-md flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all active:scale-95">
                Request Demo
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="bg-surface text-primary border border-outline-variant px-8 py-4 rounded-xl font-headline-md text-label-md hover:bg-surface-container-low transition-all">
                Learn More
              </button>
            </div>
          </div>
          {/* Hero Image & Floating Widgets */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl"></div>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQs6kjP05gT0Wm2Oqur0zg1xepfrIDV06j9Q6rQw2HKj557L-ofO2B7O2mNrIh9-J3sf9R4WesisB3LOwNtgzca_TU2vAPIRSmVkavyB1fWUzVqCi2SrpGOAScbXBj5aCUkEO8grnxRVoiFtRQJWCffVKU38h81VSF29b5NUMIEanZgV9PXTSJEhWaHfjOiIaDyVwPTjqFlR-jh_gK8AhNl4vuXnju3aMOsyfa7YYnCE-JbWsapLqR3W-wgD9VPsLcRuy4zVVAxa7W"
                alt="Doctor"
                width={500}
                height={500}
                className="relative z-10 w-full h-full object-cover rounded-[48px] shadow-2xl"
                priority
              />
              {/* Floating Widget 1: Analytics */}
              <div className="absolute -top-6 -right-12 z-20 glass-card p-4 rounded-2xl shadow-xl animate-bounce" style={{ animationDuration: "4s" }}>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-tertiary-container/20 text-tertiary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>monitoring</span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-on-surface-variant">Efficiency</p>
                    <p className="font-headline-md text-primary">+24.8%</p>
                  </div>
                </div>
              </div>
              {/* Floating Widget 2: Patient Card */}
              <div className="absolute -bottom-10 -left-12 z-20 glass-card p-5 rounded-2xl shadow-xl w-64">
                <div className="flex gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-container"></div>
                  <div className="flex-1">
                    <div className="h-2 w-24 bg-outline-variant rounded-full mb-2"></div>
                    <div className="h-2 w-16 bg-outline-variant/40 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center text-label-sm">
                  <span className="text-on-surface-variant">Active Recovery</span>
                  <span className="text-primary font-bold">88%</span>
                </div>
                <div className="mt-2 h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[88%]"></div>
                </div>
              </div>
              {/* Floating Widget 3: Icon Groups */}
              <div className="absolute top-1/2 -left-8 -translate-y-1/2 z-20 bg-white p-3 rounded-2xl shadow-lg flex flex-col gap-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>blood_pressure</span>
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>ecg</span>
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>pill</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {[
              { value: "50,000+", label: "Patients" },
              { value: "5,000+", label: "Doctors" },
              { value: "99.9%", label: "Uptime" },
              { value: "500+", label: "Organizations" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <h2 className="font-display-lg text-headline-lg text-primary">{stat.value}</h2>
                <p className="font-label-md text-on-surface-variant uppercase tracking-widest mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section (Bento Grid Style) */}
      <section className="section-padding px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-headline-lg text-on-surface mb-4">Precision Management Tools</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              ClinCare provides clinical-grade digital infrastructure to streamline every facet of your healthcare operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Patient Management */}
            <div className="md:col-span-8 bg-surface-container-lowest p-stack-lg rounded-[24px] shadow-[0px_4px_20px_rgba(26,31,54,0.05)] border border-outline-variant/20 hover:shadow-md transition-all group">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person_search</span>
                  </div>
                  <h3 className="font-headline-lg text-headline-md text-on-surface mb-4">Patient Management</h3>
                  <p className="font-body-md text-on-surface-variant">
                    Centralized digital health records (EHR) with secure, real-time access to patient history, prescriptions, and lab results.
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center gap-2 font-label-md text-on-surface-variant">
                      <span className="material-symbols-outlined text-[18px] text-primary">check_circle</span> End-to-end encryption
                    </li>
                    <li className="flex items-center gap-2 font-label-md text-on-surface-variant">
                      <span className="material-symbols-outlined text-[18px] text-primary">check_circle</span> Automated onboarding
                    </li>
                  </ul>
                </div>
                <div className="flex-1 w-full overflow-hidden rounded-2xl">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsuAzsGEob9Zbse1wA2vPFfTnXR95KCN9yxIopeiQX-607bR9VkUjUtfSC0MyIwnOdA6NNcUgKDVCZ65KKrZUQOiTFYzXMjoNX8eyZmCQaCDNAorGNzXWE_-A57lATgLFKysBshmaR0RJgNpcbDrGToKE2DXsTx9Vnwji85a8G3o_0pWJjKNASPPaCQ37_N5yvUkD0i-n-Uuj3fzFO2lI8AEpGEkXVH3Y7wqezELA7mzT1QNFoO3Ry0ZDeZb9TJJd4XsTjwOJfw6ab"
                    alt="Patient Management Dashboard"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Appointment Scheduling */}
            <div className="md:col-span-4 bg-surface-container-lowest p-stack-lg rounded-[24px] shadow-[0px_4px_20px_rgba(26,31,54,0.05)] border border-outline-variant/20 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
              </div>
              <h3 className="font-headline-lg text-headline-md text-on-surface mb-4">Smart Scheduling</h3>
              <p className="font-body-md text-on-surface-variant">AI-optimized appointment slots reducing idle time and automated reminder systems.</p>
              <div className="mt-8 pt-8 border-t border-outline-variant/10">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary-container ring-2 ring-white"></div>
                  <div className="w-8 h-8 rounded-full bg-secondary-container ring-2 ring-white"></div>
                  <div className="w-8 h-8 rounded-full bg-tertiary-container ring-2 ring-white"></div>
                  <div className="w-8 h-8 rounded-full bg-outline-variant ring-2 ring-white flex items-center justify-center text-[10px] font-bold">+12</div>
                </div>
              </div>
            </div>

            {/* Doctor Management */}
            <div className="md:col-span-4 bg-surface-container-lowest p-stack-lg rounded-[24px] shadow-[0px_4px_20px_rgba(26,31,54,0.05)] border border-outline-variant/20 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
              </div>
              <h3 className="font-headline-lg text-headline-md text-on-surface mb-4">Staff Optimization</h3>
              <p className="font-body-md text-on-surface-variant">Track performance, manage rotations, and facilitate seamless peer-to-peer consultations.</p>
            </div>

            {/* Billing & Payments */}
            <div className="md:col-span-8 bg-surface-container-lowest p-stack-lg rounded-[24px] shadow-[0px_4px_20px_rgba(26,31,54,0.05)] border border-outline-variant/20 hover:shadow-md transition-all group">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 w-full order-2 md:order-1 flex items-center justify-center">
                  <div className="w-full bg-surface-container rounded-2xl p-6 aspect-video flex items-end gap-2">
                    <div className="flex-1 bg-primary/20 h-1/2 rounded-t-lg"></div>
                    <div className="flex-1 bg-primary/40 h-2/3 rounded-t-lg"></div>
                    <div className="flex-1 bg-primary h-5/6 rounded-t-lg"></div>
                    <div className="flex-1 bg-primary/30 h-1/2 rounded-t-lg"></div>
                  </div>
                </div>
                <div className="flex-1 order-1 md:order-2">
                  <div className="w-12 h-12 rounded-xl bg-on-tertiary-fixed-variant/10 flex items-center justify-center text-on-tertiary-fixed-variant mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                  </div>
                  <h3 className="font-headline-lg text-headline-md text-on-surface mb-4">Unified Billing</h3>
                  <p className="font-body-md text-on-surface-variant">Automated insurance claims, multi-currency support, and transparent invoice management for patients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (Built For Scale) */}
      <section className="section-padding bg-surface-container-low px-margin-desktop overflow-hidden">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBnGqsnJT0OrgFBeSLBFxsuHf1mzbZ_B-XfykOuYSPkWu6yng-agWDRf6qBKIbYh1WhdRviSCxMIF9_txhBzYaDdLVRfFjx_rMWUSaZFTWCcoFB4QHN_rhOK1QFkeoyi4_Om5YMQDsNMygZGpYdTy0dGQLro8OenqrMkV2wIo4d8KeU0JbST8Eo7OLgokSteo_w7whtq2EZHnmSDeQgT3AoNW-YXdPVVjjVFsJUUy2WhQq0zkq2aywPGeXTZx45PdlfZZQVxY33GRL"
              alt="Modern Hospital Atrium"
              width={600}
              height={450}
              className="rounded-[32px] shadow-2xl relative z-10 w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl shadow-xl z-20 max-w-xs">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="font-label-md text-primary">Live Integration</span>
              </div>
              <p className="font-body-md text-on-surface font-semibold">200+ Lab Partners Connected Today</p>
            </div>
          </div>
          <div>
            <span className="font-label-md text-primary uppercase tracking-[0.2em] mb-4 block">Built For Scale</span>
            <h2 className="font-display-lg text-display-lg text-on-surface mb-8">Modern Healthcare Organizations Need Modern Tools</h2>
            <p className="font-body-lg text-on-surface-variant mb-8">
              The legacy systems of yesterday are holding healthcare back. ClinCare was engineered from the ground up to handle the complexities of high-volume clinical environments without sacrificing the human touch of patient care.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary">speed</span>
                <div>
                  <h4 className="font-headline-md text-body-md font-bold mb-1">Ultra-Fast Sync</h4>
                  <p className="text-label-md text-on-surface-variant">Cloud-native architecture ensures no lag.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary">security</span>
                <div>
                  <h4 className="font-headline-md text-body-md font-bold mb-1">HIPAA Compliant</h4>
                  <p className="text-label-md text-on-surface-variant">World-class security for sensitive data.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <h2 className="font-display-lg text-headline-lg text-center mb-16">Trusted by Clinical Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "ClinCare transformed our patient flow. We've seen a 30% reduction in wait times and significantly better staff satisfaction scores.",
                name: "Dr. Sarah Mitchell",
                title: "Chief Medical Officer, HealthPoint",
                bgClass: "bg-primary-fixed",
              },
              {
                quote: "The most intuitive billing system I've used in 20 years of practice. It actually makes the business side of medicine enjoyable.",
                name: "Mark Henderson",
                title: "Practice Administrator, Veda Care",
                bgClass: "bg-secondary-fixed",
              },
              {
                quote: "Deployment was seamless. Their support team is medical-literate, which makes a world of difference for our doctors.",
                name: "Elena Rodriguez",
                title: "Head of Operations, City Clinics",
                bgClass: "bg-tertiary-fixed",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[32px] shadow-[0px_4px_20px_rgba(26,31,54,0.05)] border border-outline-variant/10">
                <div className="flex text-primary mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="font-body-md text-on-surface italic mb-10">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${testimonial.bgClass}`}></div>
                  <div>
                    <p className="font-label-md text-on-surface font-bold">{testimonial.name}</p>
                    <p className="text-label-sm text-on-surface-variant">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding px-margin-desktop">
        <div className="max-w-container-max mx-auto bg-primary rounded-[40px] p-12 md:p-24 text-center text-on-primary relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
          <div className="relative z-10">
            <h2 className="font-display-lg text-display-lg mb-8">Ready to Elevate Your Practice?</h2>
            <p className="font-body-lg text-primary-fixed mb-12 max-w-2xl mx-auto">Join hundreds of forward-thinking healthcare organizations who have switched to ClinCare.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login" className="bg-white text-primary px-10 py-5 rounded-2xl font-headline-md text-label-md hover:shadow-2xl hover:scale-105 transition-all">
                Get Started for Free
              </Link>
              <button className="bg-primary-container/20 text-on-primary border border-white/20 backdrop-blur-md px-10 py-5 rounded-2xl font-headline-md text-label-md hover:bg-primary-container/30 transition-all">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-inverse-surface text-on-primary-fixed py-20 px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h3 className="font-display-lg text-headline-lg text-primary-fixed-dim mb-6">ClinCare</h3>
            <p className="text-surface-variant mb-8">Empowering medical professionals with the tools they need to provide world-class care.</p>
            <div className="flex gap-4">
              {["public", "share", "thumb_up"].map((icon, idx) => (
                <a key={idx} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[20px]">{icon}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-label-md text-on-primary mb-6">Product</h4>
            <ul className="space-y-4 text-surface-variant">
              <li><a className="hover:text-primary-fixed transition-colors" href="#">Patient Portal</a></li>
              <li><a className="hover:text-primary-fixed transition-colors" href="#">Doctor Dashboard</a></li>
              <li><a className="hover:text-primary-fixed transition-colors" href="#">Billing Suite</a></li>
              <li><a className="hover:text-primary-fixed transition-colors" href="#">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-md text-on-primary mb-6">Company</h4>
            <ul className="space-y-4 text-surface-variant">
              <li><a className="hover:text-primary-fixed transition-colors" href="#">About Us</a></li>
              <li><a className="hover:text-primary-fixed transition-colors" href="#">Careers</a></li>
              <li><a className="hover:text-primary-fixed transition-colors" href="#">Security</a></li>
              <li><a className="hover:text-primary-fixed transition-colors" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-md text-on-primary mb-6">Stay Updated</h4>
            <p className="text-surface-variant mb-6">Get the latest healthcare tech news delivered to your inbox.</p>
            <form className="flex gap-2">
              <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Email address" type="email" />
              <button className="bg-primary text-on-primary p-3 rounded-xl">
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>
        <div className="max-w-container-max mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-surface-variant text-label-sm">
          <p>© 2024 ClinCare Systems Inc. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-white transition-colors" href="#">Cookies</a>
          </div>
        </div>
      </footer>
    </main>
  );
}