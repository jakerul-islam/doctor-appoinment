


'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const logoutHandle = async () => {
    await authClient.signOut();
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/appointments', label: 'All Appointment' },
    { href: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="text-xl font-bold text-blue-600">DocAppoint</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`font-medium relative group transition-colors ${
                  isActive ? 'text-teal-500' : 'text-gray-700 hover:text-teal-500'
                }`}
              >
                {label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-teal-500 transition-all ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Desktop Buttons */}
        <ul className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <li>
                <Avatar>
                  <Avatar.Image referrerPolicy="no-referrer" alt={user?.name} src={user?.image} />
                  <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                </Avatar>
              </li>
              <li>
                <Button onClick={logoutHandle} className="rounded-none" variant="outline">
                  LogOut
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  href="/login"
                  className={`px-4 py-2 rounded-xl text-sm transition border border-teal-500 text-teal-500 ${
                    pathname === '/login'
                      ? ' bg-[#157a83] text-white font-semibold'
                      : 'hover:bg-teal-500/10'
                  }`}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className={`px-4 py-2  text-sm transition rounded-xl bg-[#157a83]   font-semibold text-white ${
                    pathname === '/register'
                      ? 'ring-2 ring-teal-400 ring-offset-2 font-semibold'
                      : 'hover:bg-teal-600'
                  }`}
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Mobile: Avatar + Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          {user && (
            <Avatar>
              <Avatar.Image referrerPolicy="no-referrer" alt={user?.name} src={user?.image} />
              <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
            </Avatar>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4 shadow-md">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`font-medium transition-colors px-2 py-1 rounded-md ${
                  isActive
                    ? 'text-teal-500 bg-teal-50 font-semibold'
                    : 'text-gray-700 hover:text-teal-500 hover:bg-teal-50'
                }`}
              >
                {isActive && <span className="mr-2">›</span>}
                {label}
              </Link>
            );
          })}

          <div className="border-t pt-3 flex flex-col gap-3">
            {user ? (
              <Button
                onClick={() => { logoutHandle(); setMenuOpen(false); }}
                className="rounded-none w-full"
                variant="outline"
              >
                LogOut
              </Button>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-2 rounded-xl text-sm text-center transition border border-teal-500 text-teal-500 ${
                    pathname === '/login'
                      ? 'bg-teal-500 text-white font-semibold'
                      : 'hover:bg-teal-500/10'
                  }`}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-2 rounded-xl text-sm text-center transition bg-teal-500 text-white ${
                    pathname === '/register'
                      ? 'ring-2 ring-teal-400 ring-offset-2 font-semibold'
                      : 'hover:bg-teal-600'
                  }`}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;