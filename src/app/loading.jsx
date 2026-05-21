import React from 'react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full bg-white">
      <div className="relative flex items-center justify-center">
        {/* বাইরের বড় অ্যানিমেটেড সার্কেল */}
        <div className="w-12 h-12 rounded-full border-4 border-slate-100 border-t-[#157a83] animate-spin"></div>
        {/* ভেতরের ছোট ডট বা পালস (ঐচ্ছিক, সুন্দর দেখানোর জন্য) */}
        <div className="absolute w-3 h-3 bg-[#157a83] rounded-full animate-ping"></div>
      </div>
      <p className="mt-4 text-sm font-medium text-slate-500 tracking-wide animate-pulse">
        Loading appointments...
      </p>
    </div>
  );
}