'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import { Mail, UserPen } from 'lucide-react';
import React from 'react';
import { UpdateProfileModal } from './UpdateProfileModal';

const ProfileCard = () => {
    const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user)
    return (
        <div className="w-full max-w-md p-6 bg-white border border-slate-100 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all">
      {/* প্রোফাইল কন্টেন্ট এরিয়া */}
      <div className="flex items-center gap-4 mb-6">
        {/* প্রোফাইল ইমেজ (বর্ডারসহ) */}
        <div className="relative  rounded-full overflow-hidden border-2 border-[#157a83] p-0.5 shrink-0">
         <Avatar>
                           <Avatar.Image referrerPolicy="no-referrer" alt={user?.name} src={user?.image} />
                           <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                         </Avatar>
        </div>

        {/* টেক্সট ইনফরমেশন */}
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight leading-none">
            {user?.name}
          </h2>
          <div className="flex items-center gap-1.5 text-slate-500 mt-1">
            <Mail size={15} className="shrink-0 text-slate-400" />
            <span className="text-sm font-medium leading-none truncate max-w-[200px] sm:max-w-none">
              {user?.email}
            </span>
          </div>
        </div>
      </div>

      {/* আপডেট প্রোফাইল বাটন */}
   <UpdateProfileModal></UpdateProfileModal>
    </div>
    );
};

export default ProfileCard;