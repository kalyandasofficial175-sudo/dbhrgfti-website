"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotificationBanner from "@/components/NotificationBanner";
import {
  Users, GitBranch, ClipboardList,
  Mail, Phone, Shield, Briefcase,
  DollarSign, Camera, Volume2, Film, Library,
  Wrench, Car, UserCircle, ChevronRight, Award,
  Download, FileText,
} from "lucide-react";

/* ─── TABS ───────────────────────────────────────────── */
const TABS = [
  { id: "officials", label: "Key Officials",                 icon: Users },
  { id: "org",       label: "Organization Chart",           icon: GitBranch },
  { id: "jobs",      label: "Job Chart & Responsibilities", icon: ClipboardList },
];

/* ─── DEPARTMENT FILTERS ──────────────────────────────── */
const DEPT_FILTERS = [
  "All",
  "Administration",
  "Audiography & Sound Engineering",
  "Cinematography",
  "Film & Video Editing",
  "Applied Acting",
  "Library",
  "Technical & Support",
];

/* ─── REAL OFFICIALS DATA ─────────────────────────────── */
const officials = [
  // ── Administration ──
  {
    name: "Rahul Chandra Das, ACS",
    designation: "Director in-Charge",
    department: "Administration",
    phone: "+91-9957360672",
    email: "rgftiassam@gmail.com",
    photo: "/images/staff/director.jpg", // ← public/images/staff/director.jpg
    icon: Shield,
    headerBg: "from-[#1a1a2e] to-[#0f3460]",
    badge: "bg-yellow-500",
    superannuation: null,
  },
  {
    name: "Dr. Bimal Krishna Sarma",
    designation: "Nodal Officer",
    department: "Administration",
    phone: "9954707944",
    email: "bimaljcfti@rediffmail.com",
    icon: Award,
    headerBg: "from-[#1e3a5f] to-[#0f3460]",
    badge: "bg-blue-500",
    superannuation: null,
  },
  {
    name: "Mridusmita Sadhanidar",
    designation: "Senior Administrative Assistant",
    department: "Administration",
    phone: "8403073900",
    email: "msadhanidar@gmail.com",
    icon: Briefcase,
    headerBg: "from-[#374151] to-[#1f2937]",
    badge: "bg-gray-500",
    superannuation: null,
  },
  {
    name: "Deepjyoti Rajbongshi",
    designation: "Junior Administrative Assistant (Accounts)",
    department: "Administration",
    phone: "9101974947",
    email: "deepjyotirajbongshi795@gmail.com",
    icon: Briefcase,
    headerBg: "from-[#374151] to-[#1f2937]",
    badge: "bg-gray-500",
    superannuation: null,
  },
  {
    name: "Karishma Deka",
    designation: "Junior Administrative Assistant cum Computer Operator",
    department: "Administration",
    phone: "7002980748",
    email: "karishma.deka2u@gmail.com",
    icon: Briefcase,
    headerBg: "from-[#374151] to-[#1f2937]",
    badge: "bg-gray-500",
    superannuation: null,
  },
  {
    name: "Sanjib Kumar Kalita",
    designation: "Accountant",
    department: "Administration",
    phone: "9508812160",
    email: "s.kumar.kalita@gmail.com",
    icon: DollarSign,
    headerBg: "from-[#7f1d1d] to-[#991b1b]",
    badge: "bg-red-500",
    superannuation: null,
  },

  // ── Audiography & Sound Engineering ──
  {
    name: "Faruk Iqbal",
    designation: "Lecturer",
    department: "Audiography & Sound Engineering",
    phone: "9864040919",
    email: "farukjcfti@gmail.com",
    icon: Volume2,
    headerBg: "from-[#4c1d95] to-[#5b21b6]",
    badge: "bg-purple-500",
    superannuation: null,
  },
  {
    name: "Chungkham Ingo",
    designation: "Lecturer",
    department: "Audiography & Sound Engineering",
    phone: "9954095343",
    email: "ingijcfti@gmail.com",
    icon: Volume2,
    headerBg: "from-[#4c1d95] to-[#5b21b6]",
    badge: "bg-purple-500",
    superannuation: null,
  },
  {
    name: "Kakali Nath",
    designation: "Lecturer, Electronics & Telecommunication",
    department: "Audiography & Sound Engineering",
    phone: "8486881664",
    email: "kakali.nath123@gmail.com",
    icon: Volume2,
    headerBg: "from-[#4c1d95] to-[#5b21b6]",
    badge: "bg-purple-500",
    superannuation: null,
  },
  {
    name: "Ankur Pathak",
    designation: "Senior Instructor",
    department: "Audiography & Sound Engineering",
    phone: "7002516409",
    email: "ankurdbhrgfti@gmail.com",
    icon: Volume2,
    headerBg: "from-[#4c1d95] to-[#5b21b6]",
    badge: "bg-purple-500",
    superannuation: null,
  },

  // ── Cinematography ──
  {
    name: "Kishore Kumar Sarma",
    designation: "Lecturer",
    department: "Cinematography",
    phone: "9864068399",
    email: "kishorecamb3@gmail.com",
    icon: Camera,
    headerBg: "from-[#431407] to-[#7c2d12]",
    badge: "bg-orange-500",
    superannuation: null,
  },
  {
    name: "Sanjib Parasar",
    designation: "Lecturer",
    department: "Cinematography",
    phone: "9864235326",
    email: "sanjibparasar@gmail.com",
    icon: Camera,
    headerBg: "from-[#431407] to-[#7c2d12]",
    badge: "bg-orange-500",
    superannuation: null,
  },
  {
    name: "Pranab Kumar Haloi",
    designation: "Senior Instructor",
    department: "Cinematography",
    phone: "9707011157",
    email: "pk_3n9@ymail.com",
    icon: Camera,
    headerBg: "from-[#431407] to-[#7c2d12]",
    badge: "bg-orange-500",
    superannuation: null,
  },
  {
    name: "Keshab Talukdar",
    designation: "Lighting Assistant",
    department: "Cinematography",
    phone: "8837046461",
    email: "",
    icon: Camera,
    headerBg: "from-[#431407] to-[#7c2d12]",
    badge: "bg-orange-500",
    superannuation: null,
  },
  {
    name: "Ritu Das",
    designation: "Crane & Trolley Operator",
    department: "Cinematography",
    phone: "9577259888",
    email: "riturita11091990@gmail.com",
    icon: Camera,
    headerBg: "from-[#431407] to-[#7c2d12]",
    badge: "bg-orange-500",
    superannuation: null,
  },

  // ── Film & Video Editing ──
  {
    name: "Hiranya Kalita",
    designation: "Lecturer",
    department: "Film & Video Editing",
    phone: "9864821210",
    email: "ritzedit07@gmail.com",
    icon: Film,
    headerBg: "from-[#1e3a5f] to-[#1d4ed8]",
    badge: "bg-blue-500",
    superannuation: null,
  },
  {
    name: "Pranjul Kashyap",
    designation: "Lecturer",
    department: "Film & Video Editing",
    phone: "9864809255",
    email: "pranz.editor@gmail.com",
    icon: Film,
    headerBg: "from-[#1e3a5f] to-[#1d4ed8]",
    badge: "bg-blue-500",
    superannuation: null,
  },
  {
    name: "Sanjib Talukdar",
    designation: "Senior Instructor",
    department: "Film & Video Editing",
    phone: "8723050955",
    email: "sanjibtalukdardbhrgfti@gmail.com",
    icon: Film,
    headerBg: "from-[#1e3a5f] to-[#1d4ed8]",
    badge: "bg-blue-500",
    superannuation: null,
  },
  {
    name: "Rituparna Sarma",
    designation: "Studio Assistant",
    department: "Film & Video Editing",
    phone: "7002336798",
    email: "rituparnadbhrgfti@gmail.com",
    icon: Film,
    headerBg: "from-[#1e3a5f] to-[#1d4ed8]",
    badge: "bg-blue-500",
    superannuation: null,
  },

  // ── Applied Acting ──
  {
    name: "Bhaskar Boruah",
    designation: "Demonstrator",
    department: "Applied Acting",
    phone: "6901253997",
    email: "bhaskarnsd@gmail.com",
    icon: UserCircle,
    headerBg: "from-[#14532d] to-[#166534]",
    badge: "bg-green-600",
    superannuation: null,
  },

  // ── Library ──
  {
    name: "Rajib Kalita",
    designation: "Librarian cum Archive Officer",
    department: "Library",
    phone: "8638670671",
    email: "dbhrgftilibrary@gmail.com",
    icon: Library,
    headerBg: "from-[#164e63] to-[#0e7490]",
    badge: "bg-cyan-500",
    superannuation: null,
  },
  {
    name: "Kishor Talukdar",
    designation: "Assistant Librarian",
    department: "Library",
    phone: "7002946273",
    email: "kishortalukdar81@gmail.com",
    icon: Library,
    headerBg: "from-[#164e63] to-[#0e7490]",
    badge: "bg-cyan-500",
    superannuation: null,
  },

  // ── Technical & Support ──
  {
    name: "Dhan Changmai",
    designation: "Power Pump Operator",
    department: "Technical & Support",
    phone: "9101421003",
    email: "dhanchang@gmail.com",
    icon: Wrench,
    headerBg: "from-[#1c1917] to-[#292524]",
    badge: "bg-stone-500",
    superannuation: null,
  },
  {
    name: "Hiren Kalita",
    designation: "Electrician",
    department: "Technical & Support",
    phone: "9859613431",
    email: "hirenkalita850@gmail.com",
    icon: Wrench,
    headerBg: "from-[#1c1917] to-[#292524]",
    badge: "bg-stone-500",
    superannuation: null,
  },
  {
    name: "Sanjib Kumar Das",
    designation: "Driver",
    department: "Technical & Support",
    phone: "9854380147",
    email: "sanjibkrdas018@gmail.com",
    icon: Car,
    headerBg: "from-[#1c1917] to-[#292524]",
    badge: "bg-stone-500",
    superannuation: null,
  },
  {
    name: "Sunil Sarma",
    designation: "Driver",
    department: "Technical & Support",
    phone: "8011592434",
    email: "sunil.94358@gmail.com",
    icon: Car,
    headerBg: "from-[#1c1917] to-[#292524]",
    badge: "bg-stone-500",
    superannuation: null,
  },
  {
    name: "Manas Pratim Bora",
    designation: "MTS",
    department: "Technical & Support",
    phone: "8812067570",
    email: "manaspratimbora2002@gmail.com",
    icon: UserCircle,
    headerBg: "from-[#1c1917] to-[#292524]",
    badge: "bg-stone-500",
    superannuation: null,
  },
  {
    name: "Nayanjyoti Talukdar",
    designation: "MTS",
    department: "Technical & Support",
    phone: "8099643239",
    email: "nayanjyotitalukdar2002@gmail.com",
    icon: UserCircle,
    headerBg: "from-[#1c1917] to-[#292524]",
    badge: "bg-stone-500",
    superannuation: null,
  },
  {
    name: "Sanjib Kr. Nath",
    designation: "MTS",
    department: "Technical & Support",
    phone: "8638029880",
    email: "sanjibkrnath68@gmail.com",
    icon: UserCircle,
    headerBg: "from-[#1c1917] to-[#292524]",
    badge: "bg-stone-500",
    superannuation: null,
  },
];

/* ─── SUPERANNUATION ──────────────────────────────────── */
const superannuated = [
  {
    name: "Dr. Anup Hazarika",
    designation: "Lecturer, Applied Acting (Film & TV) Department",
    superannuationDate: "31/03/2025",
  },
];

/* ─── JOB CHART DATA ─────────────────────────────────────────────────────────
   Source: Official Job Chart & Responsibilities document (DBHRGFTI)
   PDF file location: /public/documents/job-chart-responsibilities.pdf
   ← Place the PDF file at: public/documents/job-chart-responsibilities.pdf
   ──────────────────────────────────────────────────────────────────────────── */
const jobChart = [
  {
    sl: 1,
    name: "Monita Borgohain",
    designation: "Director In-Charge",
    department: "Administration",
    icon: Shield,
    borderColor: "border-yellow-500",
    bgColor: "bg-yellow-50",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-700",
    badge: "bg-yellow-100 text-yellow-800",
    workAllocations: ["Overall Academic & Administrative In-Charge"],
    duties: [
      "Administrative head of the institute — overall in-charge of academic and administrative affairs",
      "Preside over all meetings of the Governing Body and Academic Council",
      "Approve all academic programmes, curricula, and examination schedules",
      "Sanction leave, advances, bills, and all official expenditure",
      "Oversee student admission, examination conduct, and result publication",
      "Liaise with Government of Assam, Cultural Affairs Department, and statutory bodies",
      "Represent the institute at all official, governmental, and inter-institutional functions",
      "Approve annual budget, financial statements, and audit compliance",
      "Monitor staff attendance, performance appraisal, and disciplinary matters",
      "Authorize all official correspondence with government departments and agencies",
      "Ensure compliance with AICTE norms, extension of approvals, and inspection requirements",
      "Oversee campus infrastructure, development works, and maintenance",
      "Constitute committees for academic, administrative, and student-welfare functions",
      "Final authority for all administrative decisions and policy implementation",
    ],
  },
  {
    sl: 2,
    name: "Dr. Bimal Krishna Sarma",
    designation: "Nodal Officer",
    department: "Administration",
    icon: Award,
    borderColor: "border-blue-500",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    badge: "bg-blue-100 text-blue-800",
    workAllocations: [
      "Academic Programme Coordination",
      "Office Management",
      "Admissions",
      "Budget & Fee Management",
      "AICTE Compliance",
      "Governing Body & Academic Council",
      "Government Liaison",
    ],
    duties: [
      "Coordinate all academic programmes and ensure timely conduct of classes and examinations",
      "Manage day-to-day office operations and supervise administrative staff",
      "Oversee the entire admission process — notification, scrutiny, counselling, and enrolment",
      "Prepare and monitor the annual budget; manage fee collection and disbursement",
      "Handle all AICTE-related correspondence, compliance filings, and Extension of Approval (EoA)",
      "Coordinate meetings of the Governing Body and Academic Council; prepare agendas and minutes",
      "Liaise with Cultural Affairs Department, Government of Assam, and other statutory bodies",
      "Maintain service records, leave accounts, and personnel files of all staff",
      "Supervise scholarship administration and student welfare activities",
      "Any other duty assigned by the Director",
    ],
  },
  {
    sl: 3,
    name: "Anup Hazarika",
    designation: "Lecturer — Applied Acting (Film & TV) Dept.",
    department: "Applied Acting",
    icon: UserCircle,
    borderColor: "border-green-500",
    bgColor: "bg-green-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
    badge: "bg-green-100 text-green-800",
    workAllocations: [
      "I/C Applied Acting Department",
      "I/C Library",
      "I/C Examination",
      "I/C Students' Diploma Films",
      "I/C Website",
    ],
    duties: [
      "In-charge of the Applied Acting Department — planning and execution of theory and practical classes",
      "Oversee library operations, procurement of books and resources, and archival management",
      "In-charge of examination — scheduling, invigilation, paper-setting, and result processing",
      "Supervise and coordinate production of students' diploma films",
      "Manage and update the official institute website with current information and notices",
      "Maintain departmental equipment and studio props in good working condition",
      "Guide students in acting projects, stage productions, and film assignments",
      "Any other duty assigned by the Director",
    ],
    note: "Superannuation on 31/03/2025",
  },
  {
    sl: 4,
    name: "Faruk Iqubal",
    designation: "Lecturer — Audiography & Sound Engineering (ASE) Dept.",
    department: "Audiography & Sound Engineering",
    icon: Volume2,
    borderColor: "border-purple-500",
    bgColor: "bg-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-700",
    badge: "bg-purple-100 text-purple-800",
    workAllocations: [
      "I/C ASE Department",
      "I/C Film & Video Editing (FVE) Department",
      "AICTE Project Coordinator",
    ],
    duties: [
      "In-charge of Audiography & Sound Engineering Department — planning, teaching, and equipment management",
      "Oversee Film & Video Editing Department operations in coordination with FVE faculty",
      "Act as AICTE Project Coordinator — handle all AICTE MODROB/NEQIP project-related work",
      "Conduct theory and practical classes in sound recording, mixing, and post-production",
      "Supervise student projects and guide diploma film sound design",
      "Maintain and manage ASE studio equipment, consoles, and recording gear",
      "Coordinate inter-departmental studio bookings and production schedules",
      "Any other duty assigned by the Director",
    ],
  },
  {
    sl: 5,
    name: "Kishore Kumar Sarma",
    designation: "Senior Instructor — Motion Picture Photography (MPP) Dept.",
    department: "Cinematography",
    icon: Camera,
    borderColor: "border-orange-500",
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-700",
    badge: "bg-orange-100 text-orange-800",
    workAllocations: [
      "In-Charge — MPP Department",
      "Associate Coordinator — AICTE NEQIP",
    ],
    duties: [
      "In-charge of Motion Picture Photography Department — day-to-day academic and practical operations",
      "Conduct practical sessions in camera operation, lighting, and cinematography techniques",
      "Assist as Associate Coordinator for AICTE NEQIP project — documentation, procurement, and compliance",
      "Maintain and schedule MPP department equipment including cameras, lenses, and lighting rigs",
      "Supervise student shoots, location work, and studio cinematography exercises",
      "Prepare equipment inventory, maintenance logs, and service schedules",
      "Coordinate with guest faculty and visiting cinematographers for workshops",
      "Any other duty assigned by the Director",
    ],
  },
  {
    sl: 6,
    name: "Hiranya Kalita",
    designation: "Regular Guest Faculty — Film & Video Editing (FVE) Dept.",
    department: "Film & Video Editing",
    icon: Film,
    borderColor: "border-sky-500",
    bgColor: "bg-sky-50",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-700",
    badge: "bg-sky-100 text-sky-800",
    workAllocations: [
      "Teaching — FVE Department",
      "Student Project Supervision",
      "Assistant Examination Superintendent",
      "AICTE EoA Preparation",
    ],
    duties: [
      "Conduct theory and practical classes in non-linear editing, colour grading, and post-production workflows",
      "Supervise students' editing projects and diploma film post-production",
      "Assist as Examination Superintendent — invigilation, attendance, and examination duties",
      "Assist in preparation of AICTE Extension of Approval (EoA) documents and compliance reports",
      "Maintain editing suites and ensure software licenses and hardware are functional",
      "Guide students in editing for short films, documentaries, and TV productions",
      "Any other duty assigned by the Director",
    ],
  },
  {
    sl: 7,
    name: "Pranjul Kashyap",
    designation: "Regular Guest Faculty — Film & Video Editing (FVE) Dept.",
    department: "Film & Video Editing",
    icon: Film,
    borderColor: "border-indigo-500",
    bgColor: "bg-indigo-50",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-700",
    badge: "bg-indigo-100 text-indigo-800",
    workAllocations: [
      "Teaching — FVE & TV Integrated Course",
      "Equipment List Management",
      "Website Maintenance",
      "Audio-Visual Exhibitions",
    ],
    duties: [
      "Conduct editing and post-production classes for FVE and TV integrated course students",
      "Maintain and update the departmental equipment list and asset register",
      "Assist in maintaining and updating the official institute website",
      "Organize and coordinate audio-visual exhibitions and student film screenings",
      "Supervise student editing and graphics projects for diploma films",
      "Handle visual content creation for institute events and promotional materials",
      "Any other duty assigned by the Director",
    ],
  },
  {
    sl: 8,
    name: "Sanjib Parasar",
    designation: "Regular Guest Faculty — Motion Picture Photography (MPP) Dept.",
    department: "Cinematography",
    icon: Camera,
    borderColor: "border-amber-500",
    bgColor: "bg-amber-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    badge: "bg-amber-100 text-amber-800",
    workAllocations: [
      "Teaching — MPP Department",
      "Student Project Supervision",
      "Workshops & Seminars Coordination",
      "Institutional Liaison",
    ],
    duties: [
      "Conduct theory and practical classes in cinematography, camera operations, and visual storytelling",
      "Supervise students' cinematography projects, outdoor shoots, and diploma film productions",
      "Coordinate workshops, seminars, and masterclasses by visiting cinematographers",
      "Liaise with external production houses, film bodies, and industry professionals",
      "Maintain and operate MPP department camera and lighting equipment",
      "Guide students on industry exposure through internships and production visits",
      "Any other duty assigned by the Director",
    ],
  },
  {
    sl: 9,
    name: "Chungkham Ingo",
    designation: "Regular Guest Faculty — Audiography & Sound Engineering (ASE) Dept.",
    department: "Audiography & Sound Engineering",
    icon: Volume2,
    borderColor: "border-violet-500",
    bgColor: "bg-violet-50",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-700",
    badge: "bg-violet-100 text-violet-800",
    workAllocations: [
      "Teaching — ASE Department",
      "Equipment Installation & Maintenance",
      "Internet & Networking",
      "Student Study Tours",
    ],
    duties: [
      "Conduct theory and practical classes in sound recording, mixing, and audiography",
      "Install, configure, and maintain ASE studio equipment, consoles, and audio workstations",
      "Manage and maintain institute's internet infrastructure, networking, and LAN/Wi-Fi systems",
      "Organize and coordinate student study tours, production visits, and field recordings",
      "Ensure proper functioning of all audio and communication equipment across departments",
      "Guide students in live sound, location recording, and post-production audio",
      "Any other duty assigned by the Director",
    ],
  },
  {
    sl: 10,
    name: "Lakshi Das",
    designation: "Laboratory Assistant — MPP Department",
    department: "Cinematography",
    icon: Wrench,
    borderColor: "border-teal-500",
    bgColor: "bg-teal-50",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-700",
    badge: "bg-teal-100 text-teal-800",
    workAllocations: [
      "Establishment Bills",
      "Store In-Charge",
      "Bank Transactions",
    ],
    duties: [
      "Prepare, process, and maintain establishment bills and related financial documents",
      "Act as store in-charge — manage departmental equipment, consumables, and asset inventory",
      "Handle bank transactions including deposits, withdrawals, and reconciliation for the department",
      "Maintain stock registers, issue slips, and equipment loan records",
      "Assist in procurement processes — quotations, purchase orders, and delivery verification",
      "Support the laboratory operations and practical sessions as required",
      "Any other duty assigned by the Director",
    ],
  },
  {
    sl: 11,
    name: "Mridusmita Sadhanidar",
    designation: "Office Assistant (On Contract)",
    department: "Administration",
    icon: Briefcase,
    borderColor: "border-rose-500",
    bgColor: "bg-rose-50",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-700",
    badge: "bg-rose-100 text-rose-800",
    workAllocations: [
      "AICTE Documentation Assistance",
      "Administrative Support",
      "Library Assistance",
      "Examination Assistance",
    ],
    duties: [
      "Assist in preparation and compilation of AICTE compliance documents, approvals, and returns",
      "Provide general administrative support — file management, correspondence, and data entry",
      "Assist in library operations — cataloguing, lending records, and book maintenance",
      "Assist in examination-related work — invigilation duties, answer sheet management, and result tabulation",
      "Handle official correspondence, dispatch, and receipt of documents",
      "Maintain office records, registers, and notice boards",
      "Any other duty assigned by the Director / Nodal Officer",
    ],
  },
];

/* ─── OFFICIAL CARD ───────────────────────────────────── */
function OfficialCard({ off }: { off: typeof officials[0] }) {
  const Icon = off.icon;
  const photo = (off as typeof officials[0] & { photo?: string }).photo;
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group flex flex-col">
      {/* Header */}
      <div className={`bg-gradient-to-br ${off.headerBg} h-24 flex items-center justify-center relative flex-shrink-0`}>
        {photo ? (
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400 shadow-lg">
            <Image
              src={photo}
              alt={off.name}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
        ) : (
          <div className={`w-14 h-14 ${off.badge} rounded-full flex items-center justify-center shadow-lg`}>
            <Icon size={24} className="text-white" />
          </div>
        )}
        <span className="absolute top-2 right-2 bg-white/10 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-full">
          {off.department}
        </span>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-gray-800 text-sm leading-snug group-hover:text-[#0f3460] transition-colors">
          {off.name}
        </h3>
        <p className="text-yellow-600 text-xs font-semibold mt-0.5 leading-snug">{off.designation}</p>
        <p className="text-gray-400 text-xs mt-0.5 italic">
          Dr. Bhupen Hazarika Regional Government Film and Television Institute
        </p>

        <div className="mt-auto pt-3 space-y-1.5 border-t border-gray-100 mt-3">
          {off.phone && (
            <a href={`tel:${off.phone}`} className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#0f3460] transition-colors">
              <Phone size={11} className="flex-shrink-0 text-yellow-500" />
              {off.phone}
            </a>
          )}
          {off.email && (
            <a href={`mailto:${off.email}`} className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#0f3460] transition-colors truncate">
              <Mail size={11} className="flex-shrink-0 text-yellow-500" />
              <span className="truncate">{off.email}</span>
            </a>
          )}
          {!off.phone && !off.email && (
            <p className="text-xs text-gray-300 italic">Contact details not available</p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── PAGE ───────────────────────────────────────────── */
export default function WhoWeArePage() {
  const [activeTab, setActiveTab] = useState("officials");
  const [deptFilter, setDeptFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = officials.filter((o) => {
    const matchDept = deptFilter === "All" || o.department === deptFilter;
    const matchSearch =
      o.name.toLowerCase().includes(search.toLowerCase()) ||
      o.designation.toLowerCase().includes(search.toLowerCase()) ||
      o.department.toLowerCase().includes(search.toLowerCase());
    return matchDept && matchSearch;
  });

  // Group by department for display
  const grouped = DEPT_FILTERS.filter((d) => d !== "All").reduce<Record<string, typeof officials>>((acc, dept) => {
    const items = filtered.filter((o) => o.department === dept);
    if (items.length) acc[dept] = items;
    return acc;
  }, {});

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
            <span className="text-white">Who We Are</span>
          </div>
          <h1 className="text-4xl font-black font-heading">Who We Are</h1>
          <p className="text-gray-300 mt-2 max-w-2xl">
            Faculty, staff, and key officials of Dr. Bhupen Hazarika Regional Government Film &amp; Television Institute.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex overflow-x-auto">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-all ${
                activeTab === id
                  ? "border-yellow-500 text-yellow-600"
                  : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
              }`}
            >
              <Icon size={16} /> {label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* ── TAB 1: KEY OFFICIALS ── */}
        {activeTab === "officials" && (
          <div>
            {/* Search + Filter */}
            <div className="flex flex-col md:flex-row gap-3 mb-8">
              <input
                type="text"
                placeholder="Search by name, designation, or department…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <select
                value={deptFilter}
                onChange={(e) => setDeptFilter(e.target.value)}
                className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
              >
                {DEPT_FILTERS.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            {/* Stats bar */}
            <div className="flex items-center gap-2 mb-6 text-sm text-gray-500">
              <Users size={14} className="text-yellow-500" />
              Showing <strong className="text-gray-800">{filtered.length}</strong> of {officials.length} staff members
            </div>

            {/* Grouped cards */}
            {deptFilter === "All" ? (
              Object.entries(grouped).map(([dept, members]) => (
                <div key={dept} className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-base font-bold text-gray-700">{dept}</h2>
                    <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-0.5 rounded-full">
                      {members.length}
                    </span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                  </div>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {members.map((off) => <OfficialCard key={off.name} off={off} />)}
                  </div>
                </div>
              ))
            ) : (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filtered.map((off) => <OfficialCard key={off.name} off={off} />)}
              </div>
            )}

            {filtered.length === 0 && (
              <div className="text-center py-16 text-gray-400">
                <Users size={40} className="mx-auto mb-3 opacity-30" />
                <p>No staff found matching your search.</p>
              </div>
            )}

            {/* Superannuation section */}
            {(deptFilter === "All" || deptFilter === "Applied Acting") && (
              <div className="mt-12 border-t border-gray-200 pt-8">
                <h2 className="text-base font-bold text-gray-600 mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-gray-400 inline-block"></span>
                  Superannuation (Faculty/Staff)
                </h2>
                <div className="space-y-3">
                  {superannuated.map((s) => (
                    <div key={s.name} className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <UserCircle size={20} className="text-gray-400" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-700 text-sm">{s.name}</p>
                        <p className="text-gray-500 text-xs">{s.designation}</p>
                        <p className="text-xs text-gray-400 italic mt-1">
                          Dr. Bhupen Hazarika Regional Government Film and Television Institute
                        </p>
                        <span className="inline-block mt-1 bg-red-100 text-red-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                          Superannuation on {s.superannuationDate}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── TAB 2: ORG CHART ── */}
        {activeTab === "org" && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">Organization Chart</h2>
              <p className="text-gray-500 text-sm">Official hierarchy of DBHRGFTI as per the Government of Assam structure.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 md:p-10 overflow-x-auto">
              <h3 className="text-center font-bold text-gray-700 text-base mb-6 tracking-wide uppercase">
                Organization Chart of DBHRGFTI
              </h3>

              <div className="min-w-[640px] flex flex-col items-center gap-0">

                {/* ── Row helper ── */}
                {/* TOP BANNER ROWS */}
                {[
                  { label: "Government of Assam",       bg: "bg-[#1a1a2e]",  text: "text-white",        border: "border-[#0f3460]",  bold: true },
                  { label: "Cultural Affairs Department", bg: "bg-[#0f3460]", text: "text-yellow-300",   border: "border-[#16213e]",  bold: true },
                  { label: "Dr. Bhupen Hazarika Regional Government Film and Television Institute", bg: "bg-[#16213e]", text: "text-white", border: "border-[#0f3460]", bold: true },
                ].map((row, i) => (
                  <div key={i} className="w-full">
                    <div className={`${row.bg} ${row.text} border-2 ${row.border} rounded-xl px-6 py-3 text-center shadow-md`}>
                      <p className={`text-sm ${row.bold ? "font-bold" : "font-medium"}`}>{row.label}</p>
                    </div>
                    <div className="flex justify-center"><div className="w-0.5 h-5 bg-gray-400"></div></div>
                  </div>
                ))}

                {/* DIRECTOR */}
                <div className="w-full max-w-xs">
                  <div className="bg-yellow-500 text-black border-2 border-yellow-600 rounded-xl px-6 py-3 text-center shadow-lg">
                    <p className="text-sm font-black tracking-wide">Director</p>
                  </div>
                </div>

                {/* Connector down then split */}
                <div className="flex justify-center"><div className="w-0.5 h-6 bg-gray-400"></div></div>
                <div className="w-full relative flex justify-center">
                  <div className="absolute top-0 left-[25%] right-[25%] h-0.5 bg-gray-400"></div>
                </div>

                {/* DEAN ROW */}
                <div className="w-full grid grid-cols-2 gap-4">
                  {[
                    { label: "Dean Administration", bg: "bg-[#0f3460]", text: "text-yellow-300", border: "border-[#16213e]" },
                    { label: "Dean Academics",      bg: "bg-[#0f3460]", text: "text-yellow-300", border: "border-[#16213e]" },
                  ].map((col, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="w-0.5 h-6 bg-gray-400"></div>
                      <div className={`${col.bg} ${col.text} border ${col.border} rounded-xl px-4 py-3 text-center shadow-md w-full`}>
                        <p className="text-sm font-bold">{col.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ROWS: left + right columns */}
                {[
                  {
                    left:  { label: "Nodal Officer",                        bg: "bg-[#16213e]",  text: "text-gray-200",  border: "border-[#0f3460]" },
                    right: { label: "HoD",                                  bg: "bg-[#16213e]",  text: "text-gray-200",  border: "border-[#0f3460]" },
                  },
                  {
                    left:  { label: "Senior Instructor",                    bg: "bg-orange-800", text: "text-orange-100", border: "border-orange-900" },
                    right: { label: "Lecturer (Selection Grade)",            bg: "bg-orange-800", text: "text-orange-100", border: "border-orange-900" },
                  },
                  {
                    left:  { label: "Jr. Instructor",                       bg: "bg-orange-700", text: "text-orange-100", border: "border-orange-800" },
                    right: { label: "Lecturer (Senior Grade)",               bg: "bg-orange-700", text: "text-orange-100", border: "border-orange-800" },
                  },
                  {
                    left:  { label: "Demonstrator / Lab. Assistant",        bg: "bg-green-800",  text: "text-green-100", border: "border-green-900" },
                    right: { label: "Lecturer",                              bg: "bg-green-800",  text: "text-green-100", border: "border-green-900" },
                  },
                  {
                    left:  { label: "Superintendent",                       bg: "bg-gray-700",   text: "text-gray-200",  border: "border-gray-800" },
                    right: null,
                  },
                  {
                    left:  { label: "3rd Grade Clerical Staff & Technical Staff", bg: "bg-gray-600", text: "text-gray-200", border: "border-gray-700" },
                    right: null,
                  },
                  {
                    left:  { label: "4th Grade Staff (Peon, Gardener, Pump Operator etc.)", bg: "bg-gray-500", text: "text-white", border: "border-gray-600" },
                    right: null,
                  },
                ].map((row, i) => (
                  <div key={i} className="w-full grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-5 bg-gray-400"></div>
                      <div className={`${row.left.bg} ${row.left.text} border ${row.left.border} rounded-xl px-4 py-3 text-center shadow w-full`}>
                        <p className="text-xs font-semibold leading-snug">{row.left.label}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      {row.right ? (
                        <>
                          <div className="w-0.5 h-5 bg-gray-400"></div>
                          <div className={`${row.right.bg} ${row.right.text} border ${row.right.border} rounded-xl px-4 py-3 text-center shadow w-full`}>
                            <p className="text-xs font-semibold leading-snug">{row.right.label}</p>
                          </div>
                        </>
                      ) : (
                        <div className="h-5 w-full"></div>
                      )}
                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-gray-500">
              {[
                { color: "bg-[#1a1a2e]", label: "Government of Assam" },
                { color: "bg-[#0f3460]", label: "Dean / Nodal Level" },
                { color: "bg-yellow-500", label: "Director" },
                { color: "bg-orange-700", label: "Instructor / Lecturer Grade" },
                { color: "bg-green-800",  label: "Demonstrator / Lab Asst / Lecturer" },
                { color: "bg-gray-600",  label: "Clerical & Support Staff" },
              ].map((l) => (
                <div key={l.label} className="flex items-center gap-1.5">
                  <div className={`w-3 h-3 rounded ${l.color}`}></div>
                  {l.label}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TAB 3: JOB CHART & RESPONSIBILITIES ── */}
        {activeTab === "jobs" && (
          <div>
            {/* Header row with title + download button */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-1">Job Chart &amp; Responsibilities</h2>
                <p className="text-gray-500 text-sm">
                  Official work allocations and duties of faculty &amp; staff as per institute records.
                </p>
              </div>

              {/*
                ── PDF DOWNLOAD BUTTON ──────────────────────────────────────────
                Place your PDF at:  public/documents/job-chart-responsibilities.pdf
                Then this button will automatically trigger a download.
                ─────────────────────────────────────────────────────────────── */}
              <a
                href="/documents/job-chart-responsibilities.pdf"
                download
                className="inline-flex items-center gap-2 bg-[#0f3460] hover:bg-[#1a1a2e] text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow transition-colors flex-shrink-0"
              >
                <FileText size={16} />
                Download PDF
                <Download size={14} className="opacity-70" />
              </a>
            </div>

            {/* Staff count badge */}
            <div className="flex items-center gap-2 mb-6 text-sm text-gray-500">
              <ClipboardList size={14} className="text-yellow-500" />
              Showing job chart for <strong className="text-gray-800">{jobChart.length}</strong> faculty &amp; staff members
            </div>

            <div className="space-y-5">
              {jobChart.map((job) => {
                const Icon = job.icon;
                return (
                  <div
                    key={job.sl}
                    className={`rounded-2xl border-l-4 ${job.borderColor} ${job.bgColor} p-6 shadow-sm hover:shadow-md transition-shadow`}
                  >
                    {/* Card header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-11 h-11 rounded-xl ${job.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                        <Icon size={20} className={job.iconColor} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                          <span className="text-xs font-bold text-gray-400 tracking-wider">#{job.sl.toString().padStart(2, "0")}</span>
                          {job.note && (
                            <span className="text-xs bg-red-100 text-red-600 font-semibold px-2 py-0.5 rounded-full">
                              {job.note}
                            </span>
                          )}
                        </div>
                        <h3 className="font-black text-gray-800 text-base leading-snug">{job.name}</h3>
                        <p className={`text-xs font-semibold mt-0.5 ${job.iconColor}`}>{job.designation}</p>
                        <span className={`inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full ${job.badge}`}>
                          {job.department}
                        </span>
                      </div>
                    </div>

                    {/* Work Allocations chips */}
                    <div className="mb-4">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Work Allocations</p>
                      <div className="flex flex-wrap gap-2">
                        {job.workAllocations.map((wa, i) => (
                          <span
                            key={i}
                            className="text-xs bg-white border border-gray-200 text-gray-700 px-2.5 py-1 rounded-lg font-medium shadow-sm"
                          >
                            {wa}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Duties list */}
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Duties</p>
                      <ul className="space-y-1.5">
                        {job.duties.map((d, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <ChevronRight size={13} className={`flex-shrink-0 mt-0.5 ${job.iconColor}`} />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom note */}
            <p className="mt-8 text-xs text-gray-400 text-center">
              This job chart is based on official DBHRGFTI records. For the complete official document,
              use the Download PDF button above.
            </p>
          </div>
        )}

      </div>

      <Footer />
    </main>
  );
}
