"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotificationBanner from "@/components/NotificationBanner";
import { ChevronRight, Target, Eye } from "lucide-react";

const missions = [
  {
    text: "Impart training in all aspects of Film & Television Programme Production and other allied subjects.",
  },
  {
    text: "Confer Diploma & Certificate to successful students who complete the prescribed courses and qualify the examinations.",
  },
  {
    text: "Provide facilities to undertake research in various fields of Film & Television Programme Production.",
  },
  {
    text: "Co-ordinate the activities of technicians of Film & Television Industry of North-Eastern Region.",
  },
  {
    text: "Develop suitable patterns of teaching in all branches of Film & Television, both at undergraduate & post graduate levels, so as to establish high standards of Film & Television Education in North-East India.",
  },
  {
    text: "Work constantly to raise the technical standards of regional films and television programmes so as to make them aesthetically more satisfying and acceptable.",
  },
  {
    text: "Produce trained manpower, both for the growing need of the film industry and television organizations in the North Eastern Region.",
  },
  {
    text: "Create a new awareness among the future workers in Film & Television, about the potentialities of the medium and to establish film not only as a means of entertainment but also as a medium of education and artistic expression.",
  },
  {
    text: "Organize Refresher Courses, Summer Schools and the like and invite experts and research scholars from within the country and abroad for delivering lectures and/or carrying out research work.",
  },
  {
    text: "Assist and associate itself with the efforts of other academic bodies, governments/non-governmental organizations for fulfillment of the objectives of DBHRGFTI.",
  },
];

export default function WhatWeDoPage() {
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
            <span className="text-white">What We Do</span>
          </div>
          <h1 className="text-4xl font-black font-heading">What We Do</h1>
          <p className="text-gray-300 mt-2 max-w-2xl">
            Vision, mission, and objectives of Dr. Bhupen Hazarika Regional Government Film &amp; Television Institute.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-14">

        {/* Vision */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-yellow-500 flex items-center justify-center shadow">
              <Eye size={20} className="text-black" />
            </div>
            <h2 className="text-2xl font-black text-gray-800">Our Vision</h2>
          </div>
          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] rounded-2xl p-8 text-white shadow-xl">
            <p className="text-lg leading-relaxed font-medium">
              To be the premier institution for Film &amp; Television education in North-East India — nurturing creative talent,
              raising technical excellence, and establishing film as a powerful medium of art, education, and expression.
            </p>
          </div>
        </div>

        {/* Mission / Objectives */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#0f3460] flex items-center justify-center shadow">
              <Target size={20} className="text-yellow-400" />
            </div>
            <h2 className="text-2xl font-black text-gray-800">Our Mission &amp; Objectives</h2>
          </div>

          <div className="space-y-4">
            {missions.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-yellow-300 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-yellow-500 flex items-center justify-center flex-shrink-0 shadow text-black font-black text-sm group-hover:bg-[#0f3460] group-hover:text-yellow-400 transition-colors">
                  {i + 1}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed pt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
          <p className="text-gray-700 text-base font-semibold mb-1">
            Interested in joining us?
          </p>
          <p className="text-gray-500 text-sm mb-5">
            Explore our courses and become part of the next generation of Film &amp; Television professionals from North-East India.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/#courses"
              className="bg-[#0f3460] hover:bg-[#1a1a2e] text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition-colors"
            >
              View Courses
            </Link>
            <Link
              href="/who-we-are"
              className="bg-white border border-gray-200 hover:border-yellow-400 text-gray-700 font-semibold text-sm px-6 py-2.5 rounded-xl transition-colors"
            >
              Meet Our Team
            </Link>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
