export default function GrainOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[49]"
      style={{ opacity: 0.038 }}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        <filter id="atlas-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.68"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#atlas-grain)" />
      </svg>
    </div>
  );
}
