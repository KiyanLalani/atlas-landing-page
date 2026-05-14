'use client';

import { useState } from 'react';
import { useFormContext, RegisterOptions, FieldError } from 'react-hook-form';
import { FormValues } from '@/lib/ambassador-types';

interface Props {
  name: keyof FormValues;
  label: string;
  type?: string;
  placeholder?: string;
  min?: string;
  max?: string;
  rules?: RegisterOptions<FormValues>;
}

export default function FormInput({
  name,
  label,
  type = 'text',
  placeholder,
  min,
  max,
  rules,
}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
  const [isFocused, setIsFocused] = useState(false);

  const error = errors[name] as FieldError | undefined;
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
        className="text-taupe text-xs font-medium tracking-widest uppercase"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        min={min}
        max={max}
        {...restRegister}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          rhfOnBlur(e);
          setIsFocused(false);
        }}
        className="w-full bg-transparent text-charcoal placeholder:text-taupe/50 py-2.5 text-base focus:outline-none"
        style={{
          border: 'none',
          borderBottom: `${isFocused ? '2px' : '1px'} solid ${borderColor}`,
          boxShadow: isFocused
            ? '0 3px 14px -5px rgba(244, 201, 166, 0.95)'
            : 'none',
          transition: 'border-color 0.18s ease, box-shadow 0.18s ease',
          borderRadius: 0,
        }}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p
          id={`${name}-error`}
          role="alert"
          className="text-terracotta text-xs mt-0.5 leading-snug"
        >
          {error.message}
        </p>
      )}
    </div>
  );
}
