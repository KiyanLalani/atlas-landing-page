'use client';

import { useFormContext, RegisterOptions, FieldError } from 'react-hook-form';
import { FormValues } from '@/lib/ambassador-types';

interface Props {
  name: keyof FormValues;
  label: string;
  options: string[];
  rules?: RegisterOptions<FormValues>;
}

export default function RadioPills({ name, label, options, rules }: Props) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<FormValues>();

  const current = watch(name) as string;
  const error = errors[name] as FieldError | undefined;

  return (
    <div className="flex flex-col gap-3">
      <p className="text-taupe text-xs font-medium tracking-widest uppercase">
        {label}
      </p>
      <div role="radiogroup" aria-label={label} className="flex gap-2 flex-wrap">
        {options.map((option) => {
          const isSelected = current === option;
          return (
            <label
              key={option}
              className="cursor-pointer inline-flex items-center rounded-full"
              style={{
                outline: 'none',
              }}
            >
              <input
                type="radio"
                value={option}
                {...register(name, rules)}
                className="sr-only"
              />
              <span
                className="px-5 py-2.5 text-sm rounded-full border transition-all duration-150 select-none"
                style={{
                  backgroundColor: isSelected ? '#3A3530' : 'transparent',
                  color: isSelected ? '#F2ECE3' : '#3A3530',
                  borderColor: isSelected ? '#3A3530' : '#E0D8CC',
                }}
              >
                {option}
              </span>
            </label>
          );
        })}
      </div>
      {error && (
        <p role="alert" className="text-terracotta text-xs leading-snug">
          {error.message}
        </p>
      )}
    </div>
  );
}
