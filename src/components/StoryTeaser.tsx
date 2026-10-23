/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { displayAttrs } from '@/lib/displayImage';
export default function StoryTeaser(){return <section className="story-teaser section-pad"><div className="shell story-teaser-grid"><div className="story-teaser-image"><img {...displayAttrs('/assets/brand/solo.webp', '(max-width: 720px) 92vw, 460px')} alt="Fictional portrait of Jonathan in racing goggles" loading="lazy" decoding="async" /></div><div className="story-teaser-copy"><span className="eyebrow">THIS IS NOT A NORMAL LIFE STORY</span><h2>1832: a tortoise.<br/>2026: <em>a legend.</em></h2><p>Born before cars were invented. Alive to see rocket-powered dreams. There was only one upgrade left: his name.</p><Link href="/history/" className="text-link">Explore his timeline <ArrowUpRight size={18}/></Link><span className="small-outline">THE LORE STARTS HERE →</span></div></div></section>}
