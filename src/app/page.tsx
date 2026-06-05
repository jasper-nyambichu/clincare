"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const navLinks = ["Home", "Features", "Services", "About", "Contact"];

  return (
    <main className="bg-background font-body-md text-on-surface">

      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-margin-desktop h-16 md:h-20 transition-all ${
        scrolled ? "bg-surface/80 backdrop-blur-md border-b border-white/20 shadow-md"
                 : "bg-surface/70 backdrop-blur-md border-b border-white/20 shadow-sm"
      }`}>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-display-lg text-headline-lg text-primary tracking-tight">ClinCare</span>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-6 lg:gap-8">
          {navLinks.map((link, idx) => (
            <a key={idx} href="#"
              className={`font-label-md text-label-md py-1 transition-colors ${
                idx === 0
                  ? "text-primary font-bold border-b-2 border-primary"
                  : "text-on-surface-variant font-medium hover:text-primary"
              }`}>
              {link}
            </a>
          ))}
        </div>

        {/* Right side: Login + hamburger */}
        <div className="flex items-center gap-2">
          <Link href="/login"
            className="bg-primary text-on-primary px-4 md:px-6 py-2 md:py-2.5 rounded-full font-label-md text-label-md active:scale-90 transition-all hover:shadow-lg text-sm md:text-base">
            Login
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-surface-container-high transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
        mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
        <div className={`absolute top-16 left-0 right-0 bg-surface border-b border-outline-variant/20 shadow-xl transition-transform duration-300 ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-4"
        }`}>
          <div className="p-4 space-y-1">
            {navLinks.map((link, idx) => (
              <a key={idx} href="#"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-label-md transition-colors ${
                  idx === 0
                    ? "bg-primary-container/20 text-primary font-bold"
                    : "text-on-surface-variant hover:bg-surface-container-high"
                }`}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 px-4 md:px-margin-desktop hero-gradient">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Hero Text */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm mb-4 md:mb-6">
              <span className="material-symbols-outlined text-[16px] md:text-[18px]">verified</span>
              The Professional Choice for Clinics
            </div>
            <h1 className="font-display-lg text-[2rem] md:text-[2.75rem] lg:text-display-lg text-on-surface mb-4 md:mb-6 leading-[1.15]">
              The Modern Operating System For{" "}
              <span className="text-primary">Healthcare Providers</span>
            </h1>
            <p className="font-body-md md:font-body-lg text-on-surface-variant mb-6 md:mb-10 max-w-xl">
              Manage patients, appointments, doctors, and billing from one intelligent, AI-powered platform designed for precision.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="medical-gradient text-on-primary px-6 md:px-8 py-3 md:py-4 rounded-xl font-label-md flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all active:scale-95">
                Request Demo
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="bg-surface text-primary border border-outline-variant px-6 md:px-8 py-3 md:py-4 rounded-xl font-label-md hover:bg-surface-container-low transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image & Floating Widgets */}
          <div className="relative flex justify-center mt-4 lg:mt-0">
            <div className="relative w-full max-w-sm md:max-w-md aspect-square">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQs6kjP05gT0Wm2Oqur0zg1xepfrIDV06j9Q6rQw2HKj557L-ofO2B7O2mNrIh9-J3sf9R4WesisB3LOwNtgzca_TU2vAPIRSmVkavyB1fWUzVqCi2SrpGOAScbXBj5aCUkEO8grnxRVoiFtRQJWCffVKU38h81VSF29b5NUMIEanZgV9PXTSJEhWaHfjOiIaDyVwPTjqFlR-jh_gK8AhNl4vuXnju3aMOsyfa7YYnCE-JbWsapLqR3W-wgD9VPsLcRuy4zVVAxa7W"
                alt="Doctor"
                width={500}
                height={500}
                className="relative z-10 w-full h-full object-cover rounded-[32px] md:rounded-[48px] shadow-2xl"
                priority
              />

              {/* Floating Widget 1: Analytics — hidden on very small screens */}
              <div className="hidden sm:block absolute -top-4 -right-4 md:-top-6 md:-right-10 z-20 glass-card p-3 md:p-4 rounded-2xl shadow-xl animate-bounce"
                style={{ animationDuration: "4s" }}>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-1.5 md:p-2 rounded-lg bg-tertiary-container/20 text-tertiary">
                    <span className="material-symbols-outlined text-[18px] md:text-[24px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}>monitoring</span>
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] uppercase tracking-wider font-bold text-on-surface-variant">Efficiency</p>
                    <p className="font-headline-md text-primary text-sm md:text-base">+24.8%</p>
                  </div>
                </div>
              </div>

              {/* Floating Widget 2: Patient Card — hidden on very small screens */}
              <div className="hidden sm:block absolute -bottom-6 -left-4 md:-left-10 z-20 glass-card p-3 md:p-5 rounded-2xl shadow-xl w-44 md:w-64">
                <div className="flex gap-3 mb-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary-container shrink-0" />
                  <div className="flex-1">
                    <div className="h-2 w-16 md:w-24 bg-outline-variant rounded-full mb-2" />
                    <div className="h-2 w-10 md:w-16 bg-outline-variant/40 rounded-full" />
                  </div>
                </div>
                <div className="flex justify-between items-center text-label-sm">
                  <span className="text-on-surface-variant text-[11px] md:text-xs">Active Recovery</span>
                  <span className="text-primary font-bold text-[11px] md:text-xs">88%</span>
                </div>
                <div className="mt-2 h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[88%]" />
                </div>
              </div>

              {/* Floating Widget 3: Icon strip — hidden on small screens */}
              <div className="hidden md:flex absolute top-1/2 -left-8 -translate-y-1/2 z-20 bg-white p-3 rounded-2xl shadow-lg flex-col gap-4">
                <span className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}>blood_pressure</span>
                <span className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}>ecg</span>
                <span className="material-symbols-outlined text-tertiary"
                  style={{ fontVariationSettings: "'FILL' 1" }}>pill</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-16">
            {[
              { value: "50,000+", label: "Patients" },
              { value: "5,000+", label: "Doctors" },
              { value: "99.9%", label: "Uptime" },
              { value: "500+", label: "Organizations" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <h2 className="font-display-lg text-2xl md:text-headline-lg text-primary">{stat.value}</h2>
                <p className="font-label-md text-on-surface-variant uppercase tracking-widest mt-1 md:mt-2 text-[10px] md:text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:section-padding px-4 md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-display-lg text-2xl md:text-headline-lg text-on-surface mb-3 md:mb-4">
              Precision Management Tools
            </h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              ClinCare provides clinical-grade digital infrastructure to streamline every facet of your healthcare operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-4 md:gap-gutter">

            {/* Patient Management — full width on tablet, 8-col on xl */}
            <div className="xl:col-span-8 bg-surface-container-lowest p-6 md:p-stack-lg rounded-[24px] shadow-[0px_4px_20px_rgba(26,31,54,0.05)] border border-outline-variant/20 hover:shadow-md transition-all group">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
                <div className="flex-1">
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person_search</span>
                  </div>
                  <h3 className="font-headline-md text-on-surface mb-3 md:mb-4">Patient Management</h3>
                  <p className="font-body-md text-on-surface-variant">
                    Centralized digital health records (EHR) with secure, real-time access to patient history, prescriptions, and lab results.
                  </p>
                  <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3">
                    {["End-to-end encryption", "Automated onboarding"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 font-label-md text-on-surface-variant">
                        <span className="material-symbols-outlined text-[18px] text-primary">check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:flex-1 overflow-hidden rounded-2xl">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsuAzsGEob9Zbse1wA2vPFfTnXR95KCN9yxIopeiQX-607bR9VkUjUtfSC0MyIwnOdA6NNcUgKDVCZ65KKrZUQOiTFYzXMjoNX8eyZmCQaCDNAorGNzXWE_-A57lATgLFKysBshmaR0RJgNpcbDrGToKE2DXsTx9Vnwji85a8G3o_0pWJjKNASPPaCQ37_N5yvUkD0i-n-Uuj3fzFO2lI8AEpGEkXVH3Y7wqezELA7mzT1QNFoO3Ry0ZDeZb9TJJd4XsTjwOJfw6ab"
                    alt="Patient Management Dashboard"
                    width={400}
                    height={300}
                    className="w-full h-44 md:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Smart Scheduling */}
            <div className="xl:col-span-4 bg-surface-container-lowest p-6 md:p-stack-lg rounded-[24px] shadow-[0px_4px_20px_rgba(26,31,54,0.05)] border border-outline-variant/20 hover:shadow-md transition-all group">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
              </div>
              <h3 className="font-headline-md text-on-surface mb-3 md:mb-4">Smart Scheduling</h3>
              <p className="font-body-md text-on-surface-variant">
                AI-optimized appointment slots reducing idle time and automated reminder systems.
              </p>
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-outline-variant/10">
                <div className="flex -space-x-2">
                  {["bg-primary-container", "bg-secondary-container", "bg-tertiary-container"].map((bg, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full ${bg} ring-2 ring-white`} />
                  ))}
                  <div className="w-8 h-8 rounded-full bg-outline-variant ring-2 ring-white flex items-center justify-center text-[10px] font-bold">+12</div>
                </div>
              </div>
            </div>

            {/* Staff Optimization */}
            <div className="xl:col-span-4 bg-surface-container-lowest p-6 md:p-stack-lg rounded-[24px] shadow-[0px_4px_20px_rgba(26,31,54,0.05)] border border-outline-variant/20 hover:shadow-md transition-all group">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
              </div>
              <h3 className="font-headline-md text-on-surface mb-3 md:mb-4">Staff Optimization</h3>
              <p className="font-body-md text-on-surface-variant">
                Track performance, manage rotations, and facilitate seamless peer-to-peer consultations.
              </p>
            </div>

            {/* Unified Billing */}
            <div className="xl:col-span-8 bg-surface-container-lowest p-6 md:p-stack-lg rounded-[24px] shadow-[0px_4px_20px_rgba(26,31,54,0.05)] border border-outline-variant/20 hover:shadow-md transition-all group">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="w-full md:flex-1 order-2 md:order-1 flex items-center justify-center">
                  <div className="w-full bg-surface-container rounded-2xl p-4 md:p-6 aspect-video flex items-end gap-2">
                    {["bg-primary/20 h-1/2", "bg-primary/40 h-2/3", "bg-primary h-5/6", "bg-primary/30 h-1/2"].map((cls, i) => (
                      <div key={i} className={`flex-1 ${cls} rounded-t-lg`} />
                    ))}
                  </div>
                </div>
                <div className="flex-1 order-1 md:order-2">
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-on-tertiary-fixed-variant/10 flex items-center justify-center text-on-tertiary-fixed-variant mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                  </div>
                  <h3 className="font-headline-md text-on-surface mb-3 md:mb-4">Unified Billing</h3>
                  <p className="font-body-md text-on-surface-variant">
                    Automated insurance claims, multi-currency support, and transparent invoice management for patients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:section-padding bg-surface-container-low px-4 md:px-margin-desktop overflow-hidden">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBnGqsnJT0OrgFBeSLBFxsuHf1mzbZ_B-XfykOuYSPkWu6yng-agWDRf6qBKIbYh1WhdRviSCxMIF9_txhBzYaDdLVRfFjx_rMWUSaZFTWCcoFB4QHN_rhOK1QFkeoyi4_Om5YMQDsNMygZGpYdTy0dGQLro8OenqrMkV2wIo4d8KeU0JbST8Eo7OLgokSteo_w7whtq2EZHnmSDeQgT3AoNW-YXdPVVjjVFsJUUy2WhQq0zkq2aywPGeXTZx45PdlfZZQVxY33GRL"
              alt="Modern Hospital Atrium"
              width={600}
              height={450}
              className="rounded-[24px] md:rounded-[32px] shadow-2xl relative z-10 w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 glass-card p-4 md:p-6 rounded-2xl shadow-xl z-20 max-w-[200px] md:max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
                <span className="font-label-md text-primary text-sm">Live Integration</span>
              </div>
              <p className="font-body-md text-on-surface font-semibold text-sm md:text-base">200+ Lab Partners Connected Today</p>
            </div>
          </div>
          <div className="mt-6 lg:mt-0">
            <span className="font-label-md text-primary uppercase tracking-[0.2em] mb-3 md:mb-4 block text-sm">Built For Scale</span>
            <h2 className="font-display-lg text-2xl md:text-display-lg text-on-surface mb-5 md:mb-8">
              Modern Healthcare Organizations Need Modern Tools
            </h2>
            <p className="font-body-md md:font-body-lg text-on-surface-variant mb-6 md:mb-8">
              The legacy systems of yesterday are holding healthcare back. ClinCare was engineered from the ground up to handle the complexities of high-volume clinical environments without sacrificing the human touch of patient care.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { icon: "speed", title: "Ultra-Fast Sync", desc: "Cloud-native architecture ensures no lag." },
                { icon: "security", title: "HIPAA Compliant", desc: "World-class security for sensitive data." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 md:gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-body-md font-bold mb-1">{item.title}</h4>
                    <p className="text-label-md text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:section-padding px-4 md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <h2 className="font-display-lg text-2xl md:text-headline-lg text-center mb-10 md:mb-16">
            Trusted by Clinical Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
              <div key={idx} className="bg-white p-7 md:p-10 rounded-[24px] md:rounded-[32px] shadow-[0px_4px_20px_rgba(26,31,54,0.05)] border border-outline-variant/10">
                <div className="flex text-primary mb-4 md:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[18px] md:text-[24px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="font-body-md text-on-surface italic mb-7 md:mb-10">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full shrink-0 ${testimonial.bgClass}`} />
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
      <section className="py-16 md:section-padding px-4 md:px-margin-desktop">
        <div className="max-w-container-max mx-auto bg-primary rounded-[28px] md:rounded-[40px] p-8 md:p-16 lg:p-24 text-center text-on-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          <div className="relative z-10">
            <h2 className="font-display-lg text-2xl md:text-display-lg mb-4 md:mb-8">
              Ready to Elevate Your Practice?
            </h2>
            <p className="font-body-md md:font-body-lg text-primary-fixed mb-8 md:mb-12 max-w-2xl mx-auto">
              Join hundreds of forward-thinking healthcare organizations who have switched to ClinCare.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link href="/login"
                className="bg-white text-primary px-8 md:px-10 py-4 md:py-5 rounded-2xl font-label-md hover:shadow-2xl hover:scale-105 transition-all">
                Get Started for Free
              </Link>
              <button className="bg-primary-container/20 text-on-primary border border-white/20 backdrop-blur-md px-8 md:px-10 py-4 md:py-5 rounded-2xl font-label-md hover:bg-primary-container/30 transition-all">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-inverse-surface text-on-primary-fixed py-12 md:py-20 px-4 md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-display-lg text-headline-lg text-primary-fixed-dim mb-4 md:mb-6">ClinCare</h3>
            <p className="text-surface-variant mb-6 md:mb-8">
              Empowering medical professionals with the tools they need to provide world-class care.
            </p>
            <div className="flex gap-3">
              {["public", "share", "thumb_up"].map((icon, idx) => (
                <a key={idx} href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-label-md text-on-primary mb-4 md:mb-6">Product</h4>
            <ul className="space-y-3 md:space-y-4 text-surface-variant">
              {["Patient Portal", "Doctor Dashboard", "Billing Suite", "Integrations"].map((item, i) => (
                <li key={i}><a className="hover:text-primary-fixed transition-colors" href="#">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-label-md text-on-primary mb-4 md:mb-6">Company</h4>
            <ul className="space-y-3 md:space-y-4 text-surface-variant">
              {["About Us", "Careers", "Security", "Contact"].map((item, i) => (
                <li key={i}><a className="hover:text-primary-fixed transition-colors" href="#">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-label-md text-on-primary mb-4 md:mb-6">Stay Updated</h4>
            <p className="text-surface-variant mb-4 md:mb-6">
              Get the latest healthcare tech news delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
                placeholder="Email address"
                type="email"
              />
              <button className="bg-primary text-on-primary p-3 rounded-xl shrink-0">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-container-max mx-auto mt-12 md:mt-20 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-surface-variant text-label-sm gap-4">
          <p>© 2024 ClinCare Systems Inc. All rights reserved.</p>
          <div className="flex gap-4 md:gap-8">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item, i) => (
              <a key={i} className="hover:text-white transition-colors" href="#">{item}</a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}