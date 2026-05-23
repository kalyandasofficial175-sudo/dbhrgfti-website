import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-yellow-400 font-black text-6xl mb-4">404</p>
        <p className="text-white font-bold text-xl mb-2">Page not found</p>
        <p className="text-gray-400 text-sm mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg text-sm transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
