'use client';

import FormTextarea from './FormTextarea';

export default function StepThree() {
  return (
    <div className="flex flex-col gap-10 pt-2">
      <FormTextarea
        name="motivation"
        label="Why do you want to do paid summer work experience with Atlas Intelligence?"
        placeholder="Tell us what draws you to this opportunity…"
        countHint="· aim for 200–600"
        rules={{ required: 'Please share your motivation' }}
      />
      <FormTextarea
        name="skills"
        label="What skills, experience, or qualities could you bring to Atlas?"
        placeholder="Think about things you've done at school, in your own time, or in any previous roles…"
        countHint="· aim for 200–600"
        rules={{ required: 'Please share your skills and experience' }}
      />
    </div>
  );
}
