import type { Metadata } from 'next';
import TokenGuide from '@/components/TokenGuide';
export const metadata:Metadata={title:'How to buy safely | ELONATHAN'};
export default function HowToBuy(){return <><section className="page-intro"><div className="shell"><span className="eyebrow">ETHEREUM, WITHOUT THE CONFUSION</span><h1>Know the token.<br/><em>Know the risks.</em></h1><p>Simple steps, verified links only, and no fake contracts or claims.</p></div></section><TokenGuide detail/></>}
