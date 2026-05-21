
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-center px-4">
      <h2 className="text-4xl font-bold text-slate-900 mb-2">404 - Page Not Found</h2>
      <p className="text-slate-600 mb-6">Sorry, the page you are looking for does not exist.</p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-[#157a83] text-white font-semibold rounded-xl hover:bg-[#11646a] transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}