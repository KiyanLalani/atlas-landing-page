'use client';

import { Controller, useFormContext } from 'react-hook-form';
import { Clock, ChevronUp, ChevronDown } from 'lucide-react';
import { FormValues } from '@/lib/ambassador-types';

interface TimePickerProps {
  name: keyof FormValues;
  label: string;
  rules?: object;
}

const MINUTE_STEPS = [0, 15, 30, 45];

export default function TimePicker({ name, label, rules }: TimePickerProps) {
  const { control } = useFormContext<FormValues>();

  function parseTime(val: string): { hour: number; minute: number } {
    if (!val) return { hour: 9, minute: 0 };
    const [h, m] = val.split(':').map(Number);
    const hour = isNaN(h) ? 9 : h;
    const minute = isNaN(m) ? 0 : m;
    // snap minute to nearest step
    const snapped = MINUTE_STEPS.reduce((prev, cur) =>
      Math.abs(cur - minute) < Math.abs(prev - minute) ? cur : prev
    );
    return { hour, minute: snapped };
  }

  function toTimeString(hour: number, minute: number): string {
    return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={'09:00' as FormValues[typeof name]}
      render={({ field, fieldState }) => {
        const raw = (field.value as string) || '09:00';
        const { hour, minute } = parseTime(raw);
        const minuteIdx = MINUTE_STEPS.indexOf(minute) === -1 ? 0 : MINUTE_STEPS.indexOf(minute);
        const hasError = !!fieldState.error;

        function setHour(newHour: number) {
          const h = ((newHour % 24) + 24) % 24;
          field.onChange(toTimeString(h, minute));
        }

        function setMinute(newIdx: number) {
          const idx = ((newIdx % 4) + 4) % 4;
          field.onChange(toTimeString(hour, MINUTE_STEPS[idx]));
        }

        return (
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-charcoal">{label}</label>

            <div
              className={[
                'flex items-center gap-3 px-4 py-3 rounded-[4px] border bg-white',
                hasError ? 'border-terracotta' : 'border-warm-border',
              ].join(' ')}
            >
              {/* clock icon */}
              <Clock size={16} className="text-taupe flex-shrink-0" />

              {/* hour column */}
              <div className="flex flex-col items-center gap-0.5">
                <button
                  type="button"
                  onClick={() => setHour(hour + 1)}
                  className="p-0.5 rounded hover:bg-zinc-100 text-charcoal"
                  aria-label="Increase hour"
                >
                  <ChevronUp size={16} />
                </button>
                <span className="font-mono text-lg w-8 text-center text-charcoal leading-none">
                  {String(hour).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  onClick={() => setHour(hour - 1)}
                  className="p-0.5 rounded hover:bg-zinc-100 text-charcoal"
                  aria-label="Decrease hour"
                >
                  <ChevronDown size={16} />
                </button>
              </div>

              {/* colon */}
              <span className="font-mono text-lg text-charcoal leading-none select-none">:</span>

              {/* minute column */}
              <div className="flex flex-col items-center gap-0.5">
                <button
                  type="button"
                  onClick={() => setMinute(minuteIdx + 1)}
                  className="p-0.5 rounded hover:bg-zinc-100 text-charcoal"
                  aria-label="Increase minute"
                >
                  <ChevronUp size={16} />
                </button>
                <span className="font-mono text-lg w-8 text-center text-charcoal leading-none">
                  {String(MINUTE_STEPS[minuteIdx]).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  onClick={() => setMinute(minuteIdx - 1)}
                  className="p-0.5 rounded hover:bg-zinc-100 text-charcoal"
                  aria-label="Decrease minute"
                >
                  <ChevronDown size={16} />
                </button>
              </div>

              {/* spacer + 24h label */}
              <span className="ml-auto text-xs text-taupe">24h</span>
            </div>

            {hasError && (
              <p className="text-terracotta text-xs">{fieldState.error?.message}</p>
            )}
          </div>
        );
      }}
    />
  );
}
