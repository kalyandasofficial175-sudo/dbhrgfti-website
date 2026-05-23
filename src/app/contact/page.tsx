"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotificationBanner from "@/components/NotificationBanner";
import {
  ChevronRight, MapPin, Mail, Phone, Globe,
  User, MessageSquare, Send, CheckCircle, Printer,
} from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    labelEn: "Address",
    valueEn: "Dr. Bhupen Hazarika Regional Government Film and Television Institute (DBHRGFTI), Sila, Changsari, Kamrup, Assam – 781101",
    href: "https://maps.google.com/?q=Sila+Changsari+Kamrup+Assam",
  },
  {
    icon: Mail,
    labelEn: "Email",
    valueEn: "rgftiassam@gmail.com",
    href: "mailto:rgftiassam@gmail.com",
  },
  {
    icon: Phone,
    labelEn: "Mobile",
    valueEn: "+91-9957360672",
    href: "tel:+919957360672",
  },
  {
    icon: Globe,
    labelEn: "Website",
    valueEn: "dbhrgfti.assam.gov.in",
    href: "https://dbhrgfti.assam.gov.in",
  },
];

const contactPerson = {
  name: "Rahul Chandra Das, ACS",
  designation: "Director",
  email: "rgftiassam@gmail.com",
  phone: "+91-9957360672",
  fax: "—",
  address: "Dr. Bhupen Hazarika Regional Government Film and Television Institute (DBHRGFTI), Sila, Changsari, Kamrup, Assam – 781101",
};

type FormState = "idle" | "sending" | "sent";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setErrors({});
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  };

  const field = (key: keyof typeof form) =>
    `w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition-colors ${
      errors[key]
        ? "border-red-400 focus:ring-red-300 bg-red-50"
        : "border-gray-200 focus:ring-yellow-400 bg-white"
    }`;

  return (
    <main>
      <NotificationBanner />
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#1a1a2e] to-[#0f3460] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-yellow-400 text-sm mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Contact Us</span>
          </div>
          <h1 className="text-4xl font-black font-heading">Contact Us</h1>
          <p className="text-gray-300 mt-2 max-w-2xl">
            Get in touch with Dr. Bhupen Hazarika Regional Government Film &amp; Television Institute.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-5 gap-10">

          {/* ── LEFT: Contact details ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Institute info card */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-yellow-500 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-black" />
                </div>
                <h2 className="font-black text-base">Institute Contact</h2>
              </div>
              <ul className="space-y-4">
                {contactDetails.map((c) => {
                  const Icon = c.icon;
                  return (
                    <li key={c.labelEn} className="flex items-start gap-3">
                      <Icon size={15} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-400 text-xs mb-0.5">{c.labelEn}</p>
                        {c.href ? (
                          <a
                            href={c.href}
                            target={c.href.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                            className="text-white text-sm hover:text-yellow-400 transition-colors leading-snug"
                          >
                            {c.valueEn}
                          </a>
                        ) : (
                          <p className="text-white text-sm leading-snug">{c.valueEn}</p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* Office hours */}
              <div className="mt-5 pt-5 border-t border-white/10">
                <p className="text-gray-400 text-xs mb-1">Office Hours</p>
                <p className="text-white text-sm">Mon – Fri: 9:30 AM – 5:30 PM</p>
                <p className="text-gray-400 text-xs">Saturday: 9:30 AM – 1:30 PM</p>
              </div>
            </div>

            {/* Whom to contact */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h2 className="font-black text-gray-800 text-base mb-4 flex items-center gap-2">
                <User size={16} className="text-yellow-500" />
                Whom to Contact
              </h2>
              <div className="space-y-3">
                {/* Director photo + name */}
                <div className="flex items-center gap-4">
                  <div className="w-24 h-28 rounded-xl overflow-hidden border-2 border-yellow-400 flex-shrink-0 shadow">
                    {/* ← Place photo at: public/images/staff/director.jpg */}
                    <Image
                      src="/images/staff/director.jpg"
                      alt="Rahul Chandra Das, ACS — Director"
                      width={96}
                      height={112}
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{contactPerson.name}</p>
                    <p className="text-yellow-600 text-xs font-semibold">{contactPerson.designation}</p>
                    <p className="text-gray-400 text-xs mt-0.5 italic">DBHRGFTI</p>
                  </div>
                </div>
                <div className="space-y-2 pt-1 border-t border-gray-100">
                  <a href={`tel:${contactPerson.phone.replace(/\s|-/g, "")}`}
                    className="flex items-center gap-2 text-xs text-gray-600 hover:text-[#0f3460] transition-colors">
                    <Phone size={12} className="text-yellow-500 flex-shrink-0" />
                    {contactPerson.phone}
                  </a>
                  <a href={`mailto:${contactPerson.email}`}
                    className="flex items-center gap-2 text-xs text-gray-600 hover:text-[#0f3460] transition-colors">
                    <Mail size={12} className="text-yellow-500 flex-shrink-0" />
                    {contactPerson.email}
                  </a>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Printer size={12} className="text-yellow-500 flex-shrink-0" />
                    Fax: {contactPerson.fax}
                  </div>
                  <div className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed">
                    <MapPin size={12} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                    {contactPerson.address}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ── RIGHT: Contact form ── */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#0f3460] flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={18} className="text-yellow-400" />
                </div>
                <div>
                  <h2 className="font-black text-gray-800 text-base">Send Us a Message</h2>
                  <p className="text-gray-400 text-xs">We&apos;ll get back to you within 2 working days.</p>
                </div>
              </div>

              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle size={52} className="text-green-500 mb-4" />
                  <h3 className="font-black text-gray-800 text-lg mb-1">Message Sent!</h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Thank you for reaching out. We will respond to <strong>{form.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => { setForm({ name: "", email: "", phone: "", subject: "", message: "" }); setStatus("idle"); }}
                    className="bg-[#0f3460] hover:bg-[#1a1a2e] text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={field("name")}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={field("email")}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={field("phone")}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1.5">Subject <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        placeholder="Regarding admissions / courses…"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className={field("subject")}
                      />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">Message <span className="text-red-500">*</span></label>
                    <textarea
                      rows={6}
                      placeholder="Write your message here…"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${field("message")} resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <p className="text-gray-400 text-xs"><span className="text-red-500">*</span> Required fields</p>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 disabled:bg-yellow-300 text-black font-bold px-7 py-3 rounded-xl text-sm transition-colors shadow-md"
                    >
                      {status === "sending" ? (
                        <>
                          <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                          Sending…
                        </>
                      ) : (
                        <><Send size={15} /> Send Message</>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
