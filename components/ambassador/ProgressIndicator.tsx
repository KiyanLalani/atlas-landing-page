interface Props {
  currentStep: number;
  totalSteps?: number;
}

export default function ProgressIndicator({ currentStep, totalSteps = 4 }: Props) {
  return (
    <div
      className="flex gap-1.5 mb-8"
      role="progressbar"
      aria-label={`Step ${currentStep} of ${totalSteps}`}
      aria-valuenow={currentStep}
      aria-valuemin={1}
      aria-valuemax={totalSteps}
    >
      {Array.from({ length: totalSteps }, (_, i) => {
        const step = i + 1;
        const isActive = step <= currentStep;
        return (
          <div
            key={step}
            className="h-px flex-1 transition-colors duration-300"
            style={{ backgroundColor: isActive ? '#3A3530' : '#E0D8CC' }}
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
}
