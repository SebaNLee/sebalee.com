import { AnmRectangle } from "../rectangle/anm-rectangle";

type Props = {
  invertOpacity?: boolean;
};

export function AnmRevealGrid({ invertOpacity = false }: Props) {
  const x = 5;
  const y = 100 / x;

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {Array.from({ length: x }).map((_, row) =>
        Array.from({ length: x }).map((_, col) => {
          const delay = 270 + Math.random() * 450;

          return (
            <AnmRectangle
              key={`${row}-${col}`}
              x={col * y}
              y={row * y}
              width={y + 0.2}
              height={y + 0.2}
              delay={delay}
              duration={500}
              color="rgb(196 196 196)"
              invertOpacity={invertOpacity}
            />
          );
        }),
      )}
    </div>
  );
}
