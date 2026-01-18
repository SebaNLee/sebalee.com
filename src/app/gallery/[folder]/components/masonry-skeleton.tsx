const heights = ["h-[180px]", "h-[240px]", "h-[300px]", "h-[360px]"];

export function MasronySkeleton() {
  const QUANTITY = 20;

  return (
    <div
      className="
        columns-2 md:columns-3 2xl:columns-4
        gap-3 md:gap-4
      "
    >
      {Array.from({ length: QUANTITY }).map((_, i) => (
        <div
          key={i}
          className={`
            mb-1 md:mb-2
            inline-block
            w-full bg-neutral-400 animate-pulse
            ${heights[i % heights.length]}
            `}
        />
      ))}
    </div>
  );
}
