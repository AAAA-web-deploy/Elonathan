import Link from 'next/link';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { site } from '@/content/site';
import AssetVisual from './AssetVisual';
export default function Hero() {
  return <section className="hero-section" aria-labelledby="main-title"><div className="hero-side-text">EST. 1832 <span>↗</span> STILL GOING</div><div className="hero-layout shell">
    <div className="hero-copy"><div className="label-pill"><span className="dot-gold"/> AN UNLIKELY LEGEND IS BORN</div><p className="hero-pretitle">HE WAS JONATHAN FOR 194 YEARS.</p><h1 id="main-title">NOW THEY CALL HIM <em>ELONATHAN.</em></h1><p className="hero-description">{site.heroDescription}</p><div className="hero-buttons"><Link className="btn btn-primary" href="/#history">Follow his journey <ArrowRight size={17}/></Link><Link className="btn btn-outline" href="/#memes">See the memes</Link></div><div className="hero-facts"><div><strong>194</strong><span>years of legend</span></div><div><strong>2026</strong><span>the new name</span></div><div><strong>2032</strong><span>the Moon · fiction</span></div></div></div>
    <div className="hero-visual"><div className="hero-glow"/><div className="hero-visual-border"><AssetVisual src="/assets/brand/duo.webp" alt="Fictional Elon and Jonathan together by a rocket Roadster" priority sizes="(max-width: 720px) 92vw, 46vw"/></div><div className="hero-stamp">ROADSTER<br/>MEETS<br/>HISTORY <ArrowDown size={15}/></div></div>
  </div><div className="hero-ticker" aria-hidden="true"><span>OLD ENOUGH TO HAVE SEEN EVERYTHING</span><i>✦</i><span>YOUNG ENOUGH TO GO TO THE MOON</span><i>✦</i><span>ELONATHAN FOREVER</span><i>✦</i></div></section>;
}
