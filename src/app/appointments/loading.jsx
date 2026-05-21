import React from 'react';

export default function Loading() {
  
  const skeletonCards = Array(3).fill(0);

  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
     
      <div className="text-center my-5 space-y-3 flex flex-col items-center">
        <div className="h-8 w-64 bg-slate-200 rounded-lg animate-pulse"></div>
        <div className="h-4 w-48 bg-slate-100 rounded-md animate-pulse"></div>
       
        <div className="h-12 w-full max-w-3xl bg-slate-100 border border-slate-200 rounded-full mt-4 animate-pulse"></div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {skeletonCards.map((_, index) => (
          <div 
            key={index} 
            className="w-full p-5 bg-white border border-slate-100 rounded-[24px] shadow-sm space-y-4 animate-pulse"
          >
       
            <div className="flex items-center gap-4">
        
              <div className="w-16 h-16 rounded-full bg-slate-200 border-2 border-[#157a83]/20 shrink-0"></div>
              
            
              <div className="space-y-2 w-full">
                <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                <div className="h-3 bg-slate-100 rounded w-1/2"></div>
              </div>
            </div>

            <hr className="border-slate-50" />

          
            <div className="space-y-2">
              <div className="h-3 bg-slate-100 rounded w-5/6"></div>
              <div className="h-3 bg-slate-100 rounded w-4/5"></div>
            </div>

            
            <div className="h-11 bg-[#157a83]/10 rounded-xl w-full mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}