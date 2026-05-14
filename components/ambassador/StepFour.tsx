'use client';

import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import RadioPills from './RadioPills';
import FormTextarea from './FormTextarea';

function formatLocalDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export default function StepFour() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 60);

  return (
    <div className="flex flex-col gap-10 pt-2">
      <DatePicker
        name="interviewDate"
        label="Preferred interview date"
        disableWeekends={true}
        min={formatLocalDate(tomorrow)}
        max={formatLocalDate(maxDate)}
        rules={{
          required: 'Please select an interview date',
          validate: (value) => {
            if (!value) return 'Please select an interview date';
            const [y, mo, d] = (value as string).split('-').map(Number);
            const selected = new Date(y, mo - 1, d);
            const now = new Date();
            now.setHours(0, 0, 0, 0);
            const ceiling = new Date(now);
            ceiling.setDate(now.getDate() + 60);
            if (selected <= now) return 'Please select a future date';
            if (selected > ceiling) return 'Please select a date within the next 60 days';
            const day = selected.getDay();
            if (day === 0 || day === 6) return 'Please select a weekday (Monday to Friday)';
            return true;
          },
        }}
      />
      <TimePicker
        name="interviewTime"
        label="Preferred interview time"
        rules={{ required: 'Please select a time' }}
      />
      <RadioPills
        name="format"
        label="Preferred format"
        options={['Online', 'In person']}
        rules={{ required: 'Please select a format' }}
      />
      <FormTextarea
        name="anythingElse"
        label="Anything else you'd like us to know?"
        placeholder="Optional — share anything you think would be helpful…"
        rows={4}
      />
    </div>
  );
}
