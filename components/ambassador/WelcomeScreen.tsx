interface Props {
  onBegin: () => void;
}

export default function WelcomeScreen({ onBegin }: Props) {
  return (
    <div className="pt-2">
      <p className="text-charcoal text-base leading-relaxed max-w-[420px]">
        We&rsquo;re inviting students to apply for paid summer work experience
        with Atlas Intelligence, contributing to real project work while gaining
        experience in education, technology and startup growth.
      </p>
      <button
        type="button"
        onClick={onBegin}
        className="mt-10 bg-charcoal text-bone text-sm font-medium px-7 py-3.5 rounded-[4px] tracking-wide transition-colors duration-150 hover:bg-[#2a2420] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach-light focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
      >
        Begin
      </button>
    </div>
  );
}
