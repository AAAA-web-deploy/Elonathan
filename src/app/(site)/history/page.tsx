import type { Metadata } from 'next';
import HistoryTimeline from '@/components/HistoryTimeline';
import StoryTeaser from '@/components/StoryTeaser';
export const metadata: Metadata={title:'The history of Jonathan | ELONATHAN'};
export default function History(){return <><section className="page-intro"><div className="shell"><span className="eyebrow">FROM 1832 TO A FICTIONAL FUTURE</span><h1>Time moves on.<br/><em>Jonathan doesn&apos;t rush.</em></h1><p>Discover the real photographic timeline and the made-up Roadster and Moon chapters.</p></div></section><HistoryTimeline/><StoryTeaser/></>}
