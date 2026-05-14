'use client';

import { useState } from 'react';
import { useFormContext, RegisterOptions, FieldError } from 'react-hook-form';
import { FormValues } from '@/lib/ambassador-types';

interface Props {
  name: keyof FormValues;
  label: string;
  placeholder?: string;
  rules?: RegisterOptions<FormValues>;
  rows?: number;
  countHint?: string;
}

export default function FormTextarea({
  name,
  label,
  placeholder,
  rules,
  rows = 6,
  countHint,
}: Props) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<FormValues>();
  const [isFocused, setIsFocused] = useState(false);

  const error = errors[name] as FieldError | undefined;
  const value = (watch(name) as string) || '';
  const count = value.length;
  const overLimit = countHint && count > 600;

  const { onBlur: rhfOnBlur, ...restRegister } = register(name, rules);

  const borderColor = error
    ? '#C56B4F'
    : isFocused
    ? '#3A3530'
    : 'rgba(58, 53, 48, 0.22)';

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-taupe text-xs font-medium tracking-widest uppercase leading-relaxed"
      >
        {label}
      </label>
      <textarea
        id={name}
        placeholder={placeholder}
        rows={rows}
        {...restRegister}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          rhfOnBlur(e);
          setIsFocused(false);
        }}
        className="w-full bg-transparent text-charcoal placeholder:text-taupe/50 py-2.5 text-base leading-relaxed focus:outline-none"
        style={{
          border: 'none',
          borderBottom: `${isFocused ? '2px' : '1px'} solid ${borderColor}`,
          boxShadow: isFocused
            ? '0 3px 14px -5px rgba(244, 201, 166, 0.95)'
            : 'none',
          transition: 'border-color 0.18s ease, box-shadow 0.18s ease',
          borderRadius: 0,
          resize: 'vertical',
        }}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={[
          countHint ? `${name}-count` : '',
          error ? `${name}-error` : '',
        ]
          .filter(Boolean)
          .join(' ')}
      />
      <div className="flex justify-between items-center mt-1">
        {error ? (
          <p
            id={`${name}-error`}
            role="alert"
            className="text-terracotta text-xs leading-snug"
          >
            {error.message}
          </p>
        ) : (
          <span />
        )}
        {countHint && (
          <p
            id={`${name}-count`}
            className="text-xs tabular-nums"
            style={{ color: overLimit ? '#C56B4F' : '#7A6E63' }}
          >
            {count}
            <span className="opacity-60"> {countHint}</span>
          </p>
        )}
      </div>
    </div>
  );
}
