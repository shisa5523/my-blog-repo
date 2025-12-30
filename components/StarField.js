'use client';

import { useEffect, useRef } from 'react';

export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star class
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 2000;
        this.size = Math.random() * 2 + 0.5;
        this.speed = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.7 ? 'indigo' : 'white';
        this.twinkle = Math.random() * Math.PI * 2;
      }

      update() {
        this.z -= this.speed;
        if (this.z <= 0) {
          this.z = 2000;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
        this.twinkle += 0.02;
      }

      draw() {
        const x = (this.x - canvas.width / 2) * (1000 / this.z) + canvas.width / 2;
        const y = (this.y - canvas.height / 2) * (1000 / this.z) + canvas.height / 2;
        const radius = (1 - this.z / 2000) * this.size;
        const opacity = Math.max(0.7, (1 - this.z / 2000) * (0.8 + Math.sin(this.twinkle) * 0.5));

        if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) {
          this.z = 2000;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          return;
        }

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        
        if (this.color === 'indigo') {
          ctx.fillStyle = 'rgba(99, 102, 241, ' + opacity + ')';
          ctx.shadowBlur = radius * 3;
          ctx.shadowColor = 'rgba(99, 102, 241, 1)';
        } else {
          ctx.fillStyle = 'rgba(255, 255, 255, ' + opacity + ')';
          ctx.shadowBlur = radius * 3;
          ctx.shadowColor = 'rgba(255, 255, 255, 1)';
        }
        
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw star trail
        if (this.z < 500 && radius > 1) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          const prevX = (this.x - canvas.width / 2) * (1000 / (this.z + this.speed * 10)) + canvas.width / 2;
          const prevY = (this.y - canvas.height / 2) * (1000 / (this.z + this.speed * 10)) + canvas.height / 2;
          ctx.lineTo(prevX, prevY);
          ctx.strokeStyle = ctx.fillStyle;
          ctx.lineWidth = radius * 0.5;
          ctx.stroke();
        }
      }
    }

    // Create stars
    const numStars = 400;
    for (let i = 0; i < numStars; i++) {
      stars.push(new Star());
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div 
        className="absolute inset-0"
        style={{ 
          background: '#000000'
        }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
