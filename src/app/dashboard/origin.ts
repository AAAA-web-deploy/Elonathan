const HOSTED_API = 'https://elonathan.103.161.35.238.sslip.io';
const LOCAL_API = 'http://127.0.0.1:4206';

export function apiOrigin(): string {
  if (typeof window === 'undefined') return '';
  const { hostname, port } = window.location;
  if ((hostname === 'localhost' || hostname === '127.0.0.1') && port !== '4206') return LOCAL_API;
  if (hostname.endsWith('.sslip.io') || hostname === 'localhost' || hostname === '127.0.0.1') return '';
  if (hostname === 'aaaa-web-deploy.github.io') return HOSTED_API;
  return HOSTED_API;
}

export function apiUrl(path: string): string {
  const suffix = path.startsWith('/') ? path : `/${path}`;
  return `${apiOrigin()}${suffix}`;
}
