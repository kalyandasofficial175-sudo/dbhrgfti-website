"use client";

const platforms = [
  {
    name: "LinkedIn",
    handle: "DBHRGFTI Official",
    icon: "in",
    iconBg: "#0077b5",
    color: "#0077b5",
    href: "#",
    posts: [
      "🎬 DBHRGFTI students win at Mumbai International Film Festival 2026",
      "📣 Admissions open for B.Sc. Film & Television Production — Apply by 30 June",
      "🏆 Our alumnus wins Best Director at MIFF 2026 — Congratulations!",
    ],
  },
  {
    name: "Twitter / X",
    handle: "@dbhrgfti",
    icon: "𝕏",
    iconBg: "#000",
    color: "#333",
    href: "#",
    posts: [
      "Master Class on Documentary Filmmaking by renowned director Jahnu Barua! Register by 30th May. #DBHRGFTI #NorthEastCinema",
      "Admissions open for 2025-26 session. Apply at dbhrgfti.ac.in 🎓 #FilmInstitute #Assam",
      "Semester IV results declared. Check the student portal now. 🔔 #DBHRGFTI",
    ],
  },
  {
    name: "Instagram",
    handle: "@dbhrgfti_official",
    icon: "📷",
    iconBg: "linear-gradient(45deg,#f09433,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888)",
    color: "#c13584",
    href: "#",
    posts: [
      "Behind the scenes at our Annual Film Festival 2026 🎬✨",
      "Production Studio life at DBHRGFTI 📷🎥",
      "Proud moment — our alumnus on stage at MIFF 2026 🏆",
    ],
  },
  {
    name: "Facebook",
    handle: "DBHRGFTI Guwahati",
    icon: "f",
    iconBg: "#1877f2",
    color: "#1877f2",
    href: "#",
    posts: [
      "Annual Film Festival 2026 — Screening & Awards Night. Join us for a celebration of cinema from North-East India.",
      "DBHRGFTI signs MoU with Doordarshan Kendra Guwahati for student internships and broadcast training.",
      "Applications for 2025-26 academic session are now open. Limited seats available — apply today!",
    ],
  },
];

export default function SocialMedia() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-yellow-600 font-bold text-sm tracking-widest uppercase">
            Stay Connected
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 font-heading">
            Trending on Social Media
          </h2>
          <div className="w-12 h-1 bg-yellow-500 mx-auto mt-3 rounded-full" />
          <p className="text-gray-500 text-sm mt-3">
            Join our social hub to stay up to date
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {platforms.map((platform, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Platform header */}
              <div
                className="px-4 py-3 flex items-center gap-3"
                style={{ background: platform.iconBg }}
              >
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                  {platform.icon}
                </div>
                <div>
                  <div className="text-white font-bold text-sm leading-none">
                    {platform.name}
                  </div>
                  <div className="text-white/70 text-xs mt-0.5">
                    {platform.handle}
                  </div>
                </div>
              </div>

              {/* Posts */}
              <div className="flex flex-col gap-2.5 p-3 flex-1">
                {platform.posts.map((post, j) => (
                  <div
                    key={j}
                    className="bg-gray-50 rounded-lg p-3 text-xs text-gray-600 leading-relaxed border-l-4"
                    style={{ borderColor: platform.color }}
                  >
                    {post}
                  </div>
                ))}
              </div>

              {/* Footer link */}
              <div className="px-4 pb-4 pt-1 text-center">
                <a
                  href={platform.href}
                  className="text-xs font-semibold hover:underline transition-colors"
                  style={{ color: platform.color }}
                >
                  View More →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
