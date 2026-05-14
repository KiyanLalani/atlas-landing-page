interface Props {
  onReturn: () => void;
}

export default function ThankYouScreen({ onReturn }: Props) {
  return (
    <div className="pt-2">
      <h1
        className="text-charcoal text-3xl font-semibold leading-tight"
        style={{ letterSpacing: '-0.02em' }}
      >
        Thank you.
      </h1>
      <p className="text-taupe text-base leading-relaxed mt-4 max-w-[380px]">
        We&apos;ve received your application and will be in touch within 5
        working days.
      </p>
      <button
        type="button"
        onClick={onReturn}
        className="mt-10 text-taupe text-sm underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach-light focus-visible:ring-offset-2 focus-visible:ring-offset-bone rounded-sm"
      >
        Return to start
      </button>
    </div>
  );
}
