"use client";
import Image from "next/image";
import { Camera, Play, ArrowRight, ImageIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/*
  ══════════════════════════════════════════════════════════════
  HOW TO ADD GALLERY IMAGES
  ══════════════════════════════════════════════════════════════
  1. Place your photos/videos inside:
       public/images/gallery/

  2. Set the `image` field below to the filename, e.g.:
       image: "/images/gallery/studio-a.jpg"

  3. For video thumbnails, keep  type: "video"  and set a
     poster image the same way.

  Recommended image size : 800 × 600 px (JPG or WebP, ≤ 300 KB)
  Wide (aspect-video)    : 1280 × 720 px
  Square (aspect-square) : 800 × 800 px
  ══════════════════════════════════════════════════════════════
*/

const galleryItems = [
  {
    image: "/images/gallery/studio-a.jpg",                        // ← "/images/gallery/studio-a.jpg"
    type: "image",
    labelEn: "Studio A — Production Set",
    labelAs: "ষ্টুডিঅ' এ — প্ৰযোজনা ছেট",
    aspect: "aspect-video",           // wide
    fallback: "from-blue-900 to-blue-700",
  },
  {
    image: "/images/gallery/film-festival.jpg",                        // ← "/images/gallery/film-festival.jpg"
    type: "image",
    labelEn: "Annual Film Festival",
    labelAs: "বাৰ্ষিক চলচ্চিত্ৰ উৎসৱ",
    aspect: "aspect-square",
    fallback: "from-purple-900 to-purple-700",
  },
  {
    image: "/images/gallery/studio-a.jpg",                        // ← "/images/gallery/student-reel-thumb.jpg"
    type: "video",
    videoUrl: "",                     // ← YouTube embed or /videos/reel.mp4
    labelEn: "Student Reel 2024",
    labelAs: "শিক্ষাৰ্থী ৰিল ২০২৪",
    aspect: "aspect-square",
    fallback: "from-green-900 to-green-700",
  },
  {
    image: "/images/gallery/studio-a.jpg",                        // ← "/images/gallery/editing-suite.jpg"
    type: "image",
    labelEn: "Editing Suite",
    labelAs: "সম্পাদনা চুইট",
    aspect: "aspect-video",           // wide
    fallback: "from-red-900 to-red-700",
  },
  {
    image: "/images/gallery/studio-a.jpg",                        // ← "/images/gallery/outdoor-shoot.jpg"
    type: "image",
    labelEn: "Outdoor Shoot",
    labelAs: "বাহ্যিক চিত্ৰগ্ৰহণ",
    aspect: "aspect-square",
    fallback: "from-yellow-900 to-yellow-700",
  },
  {
    image: "/images/gallery/convocation.jpg",                        // ← "/images/gallery/convocation.jpg"
    type: "image",
    labelEn: "Convocation 2023",
    labelAs: "সমাবৰ্তন ২০২৩",
    aspect: "aspect-square",
    fallback: "from-indigo-900 to-indigo-700",
  },
];

export default function GallerySection() {
  const { lang, tr } = useLanguage();

  return (
    <section id="gallery" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-yellow-400 font-bold text-sm tracking-widest uppercase">{tr.galleryTag}</span>
          <h2 className="text-3xl font-bold text-white mt-2 font-heading">{tr.galleryTitle}</h2>
          <div className="w-12 h-1 bg-yellow-400 mx-auto mt-3"></div>
          <p className="text-gray-400 text-sm mt-3">
            {lang === "en"
              ? "A glimpse into campus life, studios, productions, and events."
              : "কেম্পাছ জীৱন, ষ্টুডিঅ', প্ৰযোজনা আৰু অনুষ্ঠানৰ এক আভাস।"}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`relative ${item.aspect} rounded-xl overflow-hidden group cursor-pointer`}
            >
              {item.image ? (
                /* ── Real image ── */
                <Image
                  src={item.image}
                  alt={lang === "en" ? item.labelEn : item.labelAs}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              ) : (
                /* ── Placeholder gradient ── */
                <div className={`absolute inset-0 bg-gradient-to-br ${item.fallback}`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <ImageIcon size={28} className="text-white/30" />
                    <p className="text-white/30 text-xs text-center px-3 leading-snug">
                      {lang === "en" ? item.labelEn : item.labelAs}
                    </p>
                  </div>
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>

              {/* Video play button */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30">
                    <Play size={22} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              )}

              {/* Photo icon for non-video when image exists */}
              {item.type === "image" && item.image && (
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-7 h-7 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Camera size={13} className="text-white" />
                  </div>
                </div>
              )}

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent translate-y-1 group-hover:translate-y-0 transition-transform">
                <p className="text-white text-xs font-semibold leading-snug">
                  {lang === "en" ? item.labelEn : item.labelAs}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <Camera size={16} /> {tr.viewGallery} <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
