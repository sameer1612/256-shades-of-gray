import { useRef, useEffect } from "react";

interface CanvasProps {
  size: number;
  formula: string;
}

export default function CanvasComponent({ size, formula }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      if (context) {
        const rectWidth = canvas.width;
        const rectHeight = canvas.height;

        for (let x = 0; x < rectWidth; x++) {
          for (let y = 0; y < rectHeight; y++) {
            const alpha = eval(formula) % 256;

            context.fillStyle = `rgb(${alpha}, ${alpha}, ${alpha})`;
            context.fillRect(x, y, 1, 1);
          }
        }
      }
    }
  }, [size, formula]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className="border border-dark rounded shadow"
    />
  );
}
