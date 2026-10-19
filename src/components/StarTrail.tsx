'use client';

import { useEffect, useRef } from 'react';

type Star = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  rot: number;
  spin: number;
  warm: boolean;
};

export default function StarTrail() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const fine = window.matchMedia('(pointer: fine)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!fine.matches || reduce.matches) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const stars: Star[] = [];
    let px = -1;
    let py = -1;
    let raf = 0;
    let running = false;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawStar = (x: number, y: number, radius: number, rot: number) => {
      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
        const angle = rot + (i * Math.PI) / 4;
        const length = i % 2 === 0 ? radius : radius * 0.36;
        const sx = x + Math.cos(angle) * length;
        const sy = y + Math.sin(angle) * length;
        if (i === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      }
      ctx.closePath();
      ctx.fill();
    };

    const spawn = (x: number, y: number) => {
      stars.push({
        x: x + (Math.random() - 0.5) * 6,
        y: y + (Math.random() - 0.5) * 6,
        vx: (Math.random() - 0.5) * 0.22,
        vy: -0.08 - Math.random() * 0.18,
        life: 1,
        size: 3.2 + Math.random() * 2.6,
        rot: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 0.02,
        warm: Math.random() > 0.35,
      });
    };

    const tick = () => {
      running = true;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = stars.length - 1; i >= 0; i--) {
        const star = stars[i];
        star.life -= 0.012;
        star.x += star.vx;
        star.y += star.vy;
        star.rot += star.spin;
        if (star.life <= 0) {
          stars.splice(i, 1);
          continue;
        }
        const alpha = star.life * 0.62;
        ctx.globalAlpha = alpha * 0.35;
        ctx.fillStyle = star.warm ? '#f6e7c4' : '#fffaf0';
        drawStar(star.x, star.y, star.size * 1.8, star.rot);
        ctx.globalAlpha = alpha;
        drawStar(star.x, star.y, star.size * (0.62 + star.life * 0.38), star.rot);
      }
      ctx.globalAlpha = 1;
      if (stars.length) raf = window.requestAnimationFrame(tick);
      else running = false;
    };

    const onMove = (event: MouseEvent) => {
      if (px < 0) {
        px = event.clientX;
        py = event.clientY;
        return;
      }
      const dx = event.clientX - px;
      const dy = event.clientY - py;
      const distance = Math.hypot(dx, dy);
      if (distance < 4) return;
      const steps = Math.min(10, Math.max(1, Math.round(distance / 14)));
      for (let step = 1; step <= steps; step++) {
        const t = step / steps;
        spawn(px + dx * t, py + dy * t);
      }
      px = event.clientX;
      py = event.clientY;
      if (stars.length > 90) stars.splice(0, stars.length - 90);
      if (!running) raf = window.requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('resize', resize);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={ref} className="star-trail" aria-hidden="true" />;
}
