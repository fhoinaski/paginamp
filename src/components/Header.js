// src/components/Header.js
'use client';
import React from 'react';
import MenuPopover from './MenuPopover';

import Link from 'next/link';

const Header = () => {


  return (
    <header className="bg-white dark:bg-slate-900 shadow fixed top-0 left-0 w-full z-50 transition-colors">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
   
        </div>
        
        <div className="flex items-center gap-4">
          <MenuPopover />
          
          
          
          <Link href="/dashboard" className="text-brand hover:text-brand-dark font-medium">
            Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;