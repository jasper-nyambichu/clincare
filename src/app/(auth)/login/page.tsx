"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("demo@clincare.com");
  const [password, setPassword] = useState("password123");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to dashboard
    router.push("/dashboard");
  };

  return (
    <div className="bg-background font-body-md text-on-background min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Atmospheric Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] medical-gradient opacity-10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] bg-tertiary opacity-5 rounded-full blur-[100px]"></div>

      <main className="w-full max-w-[1000px] flex flex-col md:flex-row bg-surface-container-lowest rounded-[24px] shadow-xl overflow-hidden min-h-[640px] z-10 border border-outline-variant/20">
        {/* Brand/Visual Side */}
        <div className="hidden md:flex md:w-5/12 bg-surface-container-low p-12 flex-col justify-between relative overflow-hidden">
          <div className="z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 medical-gradient rounded-xl flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
              </div>
              <span className="font-headline-md text-headline-md text-primary tracking-tight">ClinCare</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 leading-tight">
              Your health data, <br />precisely managed.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[280px]">
              Access your clinical dashboard with the same care and precision we provide your patients.
            </p>
          </div>
          <div className="relative z-10 mt-auto">
            <div className="w-full aspect-square relative">
              <img
                alt="Medical Illustration"
                className="w-full h-full object-contain mix-blend-multiply opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWSltI3a3EvDu0sEu6_gw4O9JCtThvrjEfCZWgwvo3muF4FZy45_HRE56ovTBZunULQU1OAdyqTP1nuI2dL-ov6F7dqy0IIdde0gc4bRW9T-FjKLZ9xicx3idDXT8X7hvECl6Rp4nONFF00hwZEneEIIcDCvOeotqC1D-JyCCysS5t9HZrljj9PDkr18j5_p40gDNzGFR-EaMudOrwxeZEuChcwOEEJ78buj0Fga_2bwYUdgwPvOFxNT5Zp7OOTrjK6EXs1SJJMkDQ"
              />
            </div>
          </div>
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#006688 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }}></div>
        </div>

        {/* Login Form Side */}
        <div className="w-full md:w-7/12 p-8 md:p-16 flex flex-col justify-center bg-white">
          <div className="max-w-[400px] mx-auto w-full">
            <div className="mb-10 text-center md:text-left">
              <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Welcome Back</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">Please enter your credentials to continue.</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant ml-1" htmlFor="email">
                  Email Address
                </label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                    mail
                  </span>
                  <input
                    className="w-full h-12 pl-12 pr-4 bg-white border border-outline-variant rounded-xl font-body-md text-on-surface focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="password">
                    Password
                  </label>
                  <a className="font-label-md text-label-md text-primary hover:underline" href="#">
                    Forgot Password?
                  </a>
                </div>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                    lock
                  </span>
                  <input
                    className="w-full h-12 pl-12 pr-12 bg-white border border-outline-variant rounded-xl font-body-md text-on-surface focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface-variant"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined text-[20px]">{showPassword ? "visibility_off" : "visibility"}</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 px-1">
                <input className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" id="remember" type="checkbox" />
                <label className="font-label-md text-label-md text-on-surface-variant select-none" htmlFor="remember">
                  Remember Me
                </label>
              </div>

              <button
                type="submit"
                className="w-full h-14 medical-gradient text-white rounded-xl font-headline-md text-headline-md shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4"
              >
                Login
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-outline-variant"></span>
              </div>
              <div className="relative flex justify-center text-label-md uppercase">
                <span className="bg-white px-4 text-on-surface-variant">Or continue with</span>
              </div>
            </div>

            <button className="w-full h-12 bg-white border border-outline-variant rounded-xl font-label-md text-label-md text-on-surface flex items-center justify-center gap-3 hover:bg-surface-container-low transition-colors shadow-sm active:scale-[0.98]">
              <img
                alt="Google"
                className="w-5 h-5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOnTqPlC1IZ_Ee456DmEMWmnhtA65x7TvGBTjTAa2m-bII5OoPpMDAy2JoCScahsvBWjWPTF65Itbdt0gZZG6daQ2D7vFc79jNj5VCuy1uYKogxU1hcLy3WafGRANWdKfY2aQxDifM__UfdYOKl8I4uTVBYYXxi6o6EYAimNfw4xdQrzddfY6LVNAxpN-I6nkpZPxal9x40wRwEVg8Sx9jG4Sx-T7kZbx4QwTRzvLgg3edGSth4m0O4a7haHBLroDQnmidrITbvQ-e"
              />
              Continue with Google
            </button>

            <p className="text-center mt-10 font-body-md text-body-md text-on-surface-variant">
              Don't have an account?{" "}
              <a className="text-primary font-bold hover:underline" href="#">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}