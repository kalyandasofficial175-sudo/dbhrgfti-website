"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotificationBanner from "@/components/NotificationBanner";
import { ChevronRight } from "lucide-react";

const timeline = [
  {
    year: "1998",
    label: "Permission Granted",
    heading: "Foundation of the Institute",
    body: "Having seen the increasing demands for technically well-equipped film technicians in the regional film industry in the last few years of the 20th century, the Governing Body of Jyoti Chitraban (Film Studio) Society (JCFS) decided to establish a film institute in the Jyoti Chitraban film studio. The society acquired formal permission from the Ministry of Education, Govt. of Assam vide letter No. TEC. 131/96/22 dated Dispur, the 14th Dec., 1998.",
    accent: "bg-yellow-500",
    textAccent: "text-yellow-600",
  },
  {
    year: "1999",
    label: "Established",
    heading: "JCFTI — Jyoti Chitraban Film and Television Institute",
    body: "The institute came into existence on 17th January, 1999 by the name Jyoti Chitraban Film and Television Institute (JCFTI). Jyoti Chitraban (Film Studio) Society remained as the mother concern providing all sorts of existing audio-visual equipment of the studio and other logistics required to run the institute.",
    accent: "bg-[#0f3460]",
    textAccent: "text-[#0f3460]",
  },
  {
    year: "2011",
    label: "Bifurcation",
    heading: "RGFTI — Regional Government Film and Television Institute",
    body: "In 2011 the institute was bifurcated from the studio and became a complete government entity by the name Regional Government Film and Television Institute (RGFTI). For many years DBHRGFTI was the only institute of its kind in the entire north-eastern region of India.",
    accent: "bg-blue-600",
    textAccent: "text-blue-700",
  },
  {
    year: "2016",
    label: "Renamed",
    heading: "DBHRGFTI — Dr. Bhupen Hazarika Regional Government Film and Television Institute",
    body: "In 2016 the institute was renamed as Dr. Bhupen Hazarika Regional Government Film and Television Institute (DBHRGFTI) by the Govt. of Assam — honouring the legendary Bharat Ratna awardee, filmmaker, singer, and cultural ambassador of the region.",
    accent: "bg-yellow-400",
    textAccent: "text-yellow-600",
  },
];

export default function HistoryPage() {
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
            <span className="text-gray-400">About</span>
            <ChevronRight size={14} />
            <span className="text-white">History</span>
          </div>
          <h1 className="text-4xl font-black font-heading">History</h1>
          <p className="text-gray-300 mt-2 max-w-2xl">
            The journey of Dr. Bhupen Hazarika Regional Government Film &amp; Television Institute — from 1999 to the present day.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-14">

        {/* Intro paragraph */}
        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] rounded-2xl p-8 text-white mb-14 shadow-xl">
          <p className="text-base leading-relaxed">
            It is a regional centre of excellence in the field of film &amp; television education and programme production.
            The institute, considered as one of the leading film &amp; television institutes of the country, emphasizes on
            holistic development of its students as film makers through interactive practical training on various aspects
            of film education. A closely networked industry-institute interface is ensured through invitation of guest
            lecturers from the industry, regular visits to studios and laboratories, organizing workshops and seminars,
            and attending film festivals.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 md:left-1/2 md:-translate-x-px"></div>

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div key={item.year} className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>

                {/* Year bubble — centered on the line */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                  <div className={`w-12 h-12 rounded-full ${item.accent} flex items-center justify-center shadow-lg border-4 border-white`}>
                    <span className="text-white font-black text-xs leading-none text-center">{item.year}</span>
                  </div>
                </div>

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"}`}>
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <span className={`inline-block text-xs font-bold uppercase tracking-widest mb-1 ${item.textAccent}`}>
                      {item.label}
                    </span>
                    <h3 className="font-black text-gray-800 text-base leading-snug mb-3">{item.heading}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
          <p className="text-gray-700 font-semibold mb-1">Explore more about our institute</p>
          <p className="text-gray-500 text-sm mb-5">
            Learn about our faculty, organization, and the vision that drives us forward.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/who-we-are" className="bg-[#0f3460] hover:bg-[#1a1a2e] text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition-colors">
              Who We Are
            </Link>
            <Link href="/what-we-do" className="bg-white border border-gray-200 hover:border-yellow-400 text-gray-700 font-semibold text-sm px-6 py-2.5 rounded-xl transition-colors">
              What We Do
            </Link>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
