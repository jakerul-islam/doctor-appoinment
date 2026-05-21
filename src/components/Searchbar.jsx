
'use client';

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const Searchbar = ({ defaultValue = "" }) => {
  const [searchTerm, setSearchTerm] = useState(defaultValue);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      
      if (searchTerm) {
        params.set('search', searchTerm);
      } else {
        params.delete('search'); 
      }

      
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }, 300); 

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, router, pathname, searchParams]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="w-full max-w-3xl px-4 mx-auto">
      <div className="relative flex items-center w-full">
       
        <div className="absolute left-4 pointer-events-none text-slate-400">
          <Search size={20} strokeWidth={1.8} />
        </div>

        
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search by doctor name or specialty..."
          className="w-full h-12 pl-12 pr-4 bg-white text-slate-700 placeholder-slate-400 text-base font-normal rounded-full border border-[#157a83] focus:border-[#009ba4] focus:ring-1 focus:ring-[#009ba4] outline-none transition-all duration-200 shadow-sm"
        />
      </div>
    </div>
  );
};

export default Searchbar;