'use client';
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { site } from '@/content/site';
import { displayAttrs } from '@/lib/displayImage';
export default function NavBar() {
  const [open,setOpen]=useState(false);
  const pathname=usePathname();
  const routes=[{name:'The story',url:'/history/'},{name:'Memes',url:'/memes/'},{name:'How to buy',url:'/how-to-buy/'}];
  const mobile=[{name:'Home',url:'/#top'},{name:'Timeline',url:'/#history'},{name:'Meme gallery',url:'/#memes'},{name:'Token + how to buy',url:'/#token'}];
  return <header className="header" id="top"><div className="header-inner">
    <Link href="/" className="wordmark" aria-label="Elonathan home"><img {...displayAttrs('/assets/brand/logo.png', '44px')} alt="" width={44} height={44} loading="lazy" decoding="async"/><span>ELONATHAN<small>JONATHAN&apos;S NEW NAME</small></span></Link>
    <nav className="desktop-links" aria-label="Desktop navigation">{routes.map(r=><Link key={r.url} href={r.url} className={pathname===r.url?'active':''}>{r.name}</Link>)}</nav>
    <span className="network-tag">ETH MAINNET <span className="pulse-dot"/></span>
    <button className="mobile-menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </div>{open&&<nav className="mobile-menu" aria-label="Mobile navigation">{mobile.map(r=><Link key={r.url} href={r.url} onClick={()=>setOpen(false)}>{r.name}<ArrowUpRight size={16}/></Link>)}<small>{site.disclaimer}</small></nav>}</header>;
}
