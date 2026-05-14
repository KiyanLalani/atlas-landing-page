'use client';

import FormInput from './FormInput';
import DatePicker from './DatePicker';

function formatLocalDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export default function StepOne() {
  const todayStr = formatLocalDate(new Date());

  return (
    <div className="flex flex-col gap-8 pt-2">
      <FormInput
        name="name"
        label="Full name"
        placeholder="Your full name"
        rules={{
          required: 'Please enter your full name',
          minLength: { value: 2, message: 'Name must be at least 2 characters' },
        }}
      />
      <DatePicker
        name="dateOfBirth"
        label="Date of birth"
        disableWeekends={false}
        max={todayStr}
        rules={{
          required: 'Please enter your date of birth',
          validate: (value: unknown) => {
            if (!value) return 'Please enter your date of birth';
            const [y, mo, d] = (value as string).split('-').map(Number);
            const date = new Date(y, mo - 1, d);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (date >= today) return 'Date of birth must be in the past';
            return true;
          },
        }}
      />
      <FormInput
        name="email"
        label="Email address"
        type="email"
        placeholder="you@example.com"
        rules={{
          required: 'Please enter your email address',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Please enter a valid email address',
          },
        }}
      />
    </div>
  );
}
