import type { Metadata } from 'next';
import MemeGallery from '@/components/MemeGallery';
export const metadata: Metadata={title:'Meme gallery | ELONATHAN'};
export default function Memes(){return <><section className="page-intro"><div className="shell"><span className="eyebrow">THE UNOFFICIAL IMAGE ARCHIVE</span><h1>194 years old.<br/><em>Still memeable.</em></h1><p>Five genuine photo views and five fictional scenes. Every card can be enlarged and downloaded with a custom filename.</p></div></section><MemeGallery full/></>}
