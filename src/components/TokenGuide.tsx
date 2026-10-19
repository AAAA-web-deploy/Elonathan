'use client';
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { Copy, Check, ExternalLink, Wallet, ShieldCheck, ScanSearch, ArrowLeftRight, CircleAlert } from 'lucide-react';
import { site } from '@/content/site';
import { publicPath } from '@/lib/publicPath';
const steps=[
{n:'01',icon:Wallet,title:'Get an Ethereum wallet',description:'Install a reputable self-custody wallet. Never reveal a seed phrase or private key.'},
{n:'02',icon:ArrowLeftRight,title:'Prepare ETH',description:'Use Ethereum mainnet ETH to fund your swap and cover network fees.'},
{n:'03',icon:ScanSearch,title:'Verify the contract',description:'Check the official Ethereum contract address and independently inspect its token details.'},
{n:'04',icon:ShieldCheck,title:'Review before swapping',description:'Check pool liquidity, price impact, slippage, and contract warnings. Never trade based on a logo alone.'},
];
export default function TokenGuide({detail=false}:{detail?:boolean}) {
 const [copied,setCopied]=useState(false);
 async function copy(){if(!site.contractAddress)return; try{await navigator.clipboard.writeText(site.contractAddress);setCopied(true);window.setTimeout(()=>setCopied(false),2400)}catch{setCopied(false)}}
 return <section id="token" className={`token-section section-pad ${detail?'token-detail':''}`}><div className="shell"><div className="section-heading"><div><span className="eyebrow">CHAPTER 03 / THE ETHEREUM TOKEN</span><h2>Jonathan&apos;s new name.<br/><em>Same legendary spirit.</em></h2></div><p>All the practical details, without making you read a wall of fine print.</p></div>
 <div className="token-top"><div className="token-identity"><span className="eyebrow">TOKEN IDENTITY</span><div className="token-icon"><img src={publicPath('/assets/brand/logo.png')} alt="Elonathan logo"/></div><h3>{site.name}</h3><div className="ticker-name">${site.ticker}</div><span className="chain-chip">ETHEREUM MAINNET <span/></span></div><div className="token-facts"><div><span>Network</span><strong>Ethereum (ERC-20)</strong></div><div><span>Token ticker</span><strong>{site.ticker}</strong></div><div><span>Contract address</span><strong className="contract-value">{site.contractAddress||'Not yet published'}</strong></div><div><span>DEX listing</span><strong>{site.dexUrl?'Verified link available':'Not yet published'}</strong></div><div className="token-buttons"><button className="btn btn-primary" disabled={!site.contractAddress} onClick={copy}>{copied?<Check size={16}/>:<Copy size={16}/>} {copied?'Copied':'Copy contract'}</button>{site.dexUrl?<a className="btn btn-outline" href={site.dexUrl} target="_blank" rel="noopener noreferrer">Open DEX <ExternalLink size={15}/></a>:<button className="btn btn-outline" disabled>DEX link pending</button>}</div></div></div>
 <div className="guide-title"><div><span className="eyebrow">THE EASY WAY</span><h3>How to buy safely</h3></div><span className="guide-time">FOUR SIMPLE STEPS</span></div><div className="buy-guide">{steps.map(S=><div className="buy-step" key={S.n}><span className="buy-step-number">{S.n}</span><div className="step-icon"><S.icon size={23} strokeWidth={1.5}/></div><h4>{S.title}</h4><p>{S.description}</p></div>)}</div><div className="risk-note"><CircleAlert size={18}/><p>Meme tokens are highly speculative. Contract and trading links are intentionally inactive until verified; no association with Tesla, Elon Musk or Jonathan&apos;s caretakers is implied.</p></div></div></section>;
}
