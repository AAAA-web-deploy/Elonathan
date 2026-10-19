import { site } from '@/content/site';
import Link from 'next/link';
export default function Footer(){return <footer className="footer"><div className="shell"><div className="footer-main"><div><span className="eyebrow">SLOW IS THE NEW FAST</span><div className="footer-big">ELONATHAN<span>✦</span></div></div><div className="footer-nav"><Link href="/history/">Our story</Link><Link href="/memes/">Memes</Link><Link href="/how-to-buy/">How to buy</Link></div></div><div className="footer-bottom"><p>© 2026 ELONATHAN · Original fictional parody.</p><p>{site.disclaimer}</p></div></div></footer>}
