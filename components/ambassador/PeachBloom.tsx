export default function PeachBloom() {
  return (
    <div
      className="fixed pointer-events-none z-0"
      style={{
        right: '-18vw',
        top: '5vh',
        width: '72vw',
        height: '90vh',
        background:
          'radial-gradient(ellipse at 70% 40%, rgba(244,201,166,0.52) 0%, rgba(232,159,117,0.28) 30%, transparent 68%)',
        filter: 'blur(72px)',
      }}
      aria-hidden="true"
    />
  );
}
