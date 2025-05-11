"use client";

import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  distance: number;
  angle: number;
  size: number;
  isSquare: boolean;
  opacity: number;
}

export const CosmicUniverse = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const frameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Generate points
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const points: Point[] = [];

    for (let i = 0; i < 150; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * Math.min(canvas.width, canvas.height) * 0.4;
      points.push({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        distance,
        angle,
        size: Math.random() * 4 + 1,
        isSquare: Math.random() > 0.5,
        opacity: Math.random() * 0.5 + 0.5
      });
    }

    pointsRef.current = points;

    let time = 0;
    const animate = () => {
      time += 0.016;
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const rotationSpeed = 0.0002 * (Math.sin(time * 0.5) * 0.5 + 1);

      points.forEach(point => {
        point.angle += rotationSpeed;
        const x = centerX + Math.cos(point.angle) * point.distance;
        const y = centerY + Math.sin(point.angle) * point.distance;

        // Draw line
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = `rgba(255, 255, 255, 0.1)`;
        ctx.lineWidth = 0.3;
        ctx.stroke();

        // Draw point
        ctx.beginPath();
        if (point.isSquare) {
          ctx.fillStyle = `rgba(176, 224, 255, ${point.opacity})`;
          ctx.fillRect(x - point.size / 2, y - point.size / 2, point.size, point.size);
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${point.opacity})`;
          ctx.arc(x, y, point.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
};