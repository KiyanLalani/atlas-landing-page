'use client';

import { useRef, useState, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Calendar, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { FormValues } from '@/lib/ambassador-types';

// ─── helpers ──────────────────────────────────────────────────────────────────

function parseDate(val: string): Date | null {
  if (!val) return null;
  const [y, m, d] = val.split('-').map(Number);
  if (!y || !m || !d) return null;
  const date = new Date(y, m - 1, d);
  return isNaN(date.getTime()) ? null : date;
}

function toISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function formatDisplay(val: string): string {
  const date = parseDate(val);
  if (!date) return '';
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const MONTH_ABBR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// ─── props ────────────────────────────────────────────────────────────────────

interface DatePickerProps {
  name: keyof FormValues;
  label: string;
  rules?: object;
  min?: string;
  max?: string;
  disableWeekends?: boolean;
}

type ViewMode = 'days' | 'months' | 'years';

// ─── component ────────────────────────────────────────────────────────────────

export default function DatePicker({
  name,
  label,
  rules,
  min,
  max,
  disableWeekends = false,
}: DatePickerProps) {
  const { control } = useFormContext<FormValues>();

  const [open, setOpen] = useState(false);
  const [view, setView] = useState<ViewMode>('days');
  const [cursor, setCursor] = useState<Date>(new Date());

  const containerRef = useRef<HTMLDivElement>(null);

  // close on outside click
  useEffect(() => {
    if (!open) return;
    function handler(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const minDate = min ? parseDate(min) : null;
  const maxDate = max ? parseDate(max) : null;

  function isDayDisabled(date: Date): boolean {
    const iso = toISODate(date);
    if (minDate && iso < toISODate(minDate)) return true;
    if (maxDate && iso > toISODate(maxDate)) return true;
    if (disableWeekends) {
      const dow = date.getDay(); // 0=Sun,6=Sat
      if (dow === 0 || dow === 6) return true;
    }
    return false;
  }

  function openPicker(currentValue: string) {
    const parsed = parseDate(currentValue);
    const base = parsed ?? new Date();
    setCursor(new Date(base.getFullYear(), base.getMonth(), 1));
    setView('days');
    setOpen(true);
  }

  // ─── day grid ───────────────────────────────────────────────────────────────

  function buildDayGrid() {
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
    // Convert to Mon-first offset: Mon=0 … Sun=6
    const offset = (firstDay + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells: (number | null)[] = [];
    for (let i = 0; i < offset; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);
    // pad to full rows of 7
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }

  // ─── render ─────────────────────────────────────────────────────────────────

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => {
        const hasError = !!fieldState.error;
        const displayed = formatDisplay(field.value as string);
        const todayISO = toISODate(new Date());

        function selectDay(day: number) {
          const iso = toISODate(new Date(cursor.getFullYear(), cursor.getMonth(), day));
          field.onChange(iso);
          setOpen(false);
        }

        return (
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-charcoal">{label}</label>

            <div className="relative" ref={containerRef}>
              {/* trigger button */}
              <button
                type="button"
                onClick={() => (open ? setOpen(false) : openPicker(field.value as string))}
                className={[
                  'w-full flex items-center justify-between px-4 py-3 rounded-[4px] border bg-white text-sm text-left',
                  hasError ? 'border-terracotta' : 'border-warm-border',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/30',
                ].join(' ')}
              >
                <span className={displayed ? 'text-charcoal' : 'text-taupe'}>
                  {displayed || 'Select a date'}
                </span>
                <Calendar size={16} className="text-taupe flex-shrink-0" />
              </button>

              {/* popover */}
              {open && (
                <div className="absolute top-full left-0 mt-2 z-50 bg-white border border-warm-border rounded-xl shadow-xl p-4 w-72 select-none">

                  {/* ── DAYS VIEW ─────────────────────────────────────────── */}
                  {view === 'days' && (
                    <>
                      {/* header */}
                      <div className="flex items-center justify-between mb-3">
                        <button
                          type="button"
                          onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))}
                          className="p-1 rounded hover:bg-zinc-100 text-charcoal"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          type="button"
                          onClick={() => setView('months')}
                          className="text-sm font-medium text-charcoal hover:bg-zinc-100 px-2 py-1 rounded"
                        >
                          {MONTH_NAMES[cursor.getMonth()]} {cursor.getFullYear()}
                        </button>
                        <button
                          type="button"
                          onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))}
                          className="p-1 rounded hover:bg-zinc-100 text-charcoal"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>

                      {/* day-of-week labels */}
                      <div className="grid grid-cols-7 mb-1">
                        {DAY_LABELS.map((dl) => (
                          <div key={dl} className="text-center text-[10px] text-taupe font-medium py-1">
                            {dl}
                          </div>
                        ))}
                      </div>

                      {/* day grid */}
                      <div className="grid grid-cols-7 gap-y-1">
                        {buildDayGrid().map((day, i) => {
                          if (day === null) return <div key={`e-${i}`} />;
                          const date = new Date(cursor.getFullYear(), cursor.getMonth(), day);
                          const iso = toISODate(date);
                          const disabled = isDayDisabled(date);
                          const selected = iso === (field.value as string);
                          const isToday = iso === todayISO;

                          return (
                            <button
                              key={iso}
                              type="button"
                              disabled={disabled}
                              onClick={() => !disabled && selectDay(day)}
                              className={[
                                'mx-auto flex items-center justify-center w-8 h-8 rounded-full text-xs transition-colors',
                                disabled
                                  ? 'text-zinc-300 cursor-not-allowed'
                                  : selected
                                  ? 'bg-charcoal text-bone'
                                  : isToday
                                  ? 'border border-charcoal text-charcoal hover:bg-zinc-100'
                                  : 'text-charcoal hover:bg-zinc-100',
                              ].join(' ')}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                    </>
                  )}

                  {/* ── MONTHS VIEW ───────────────────────────────────────── */}
                  {view === 'months' && (
                    <>
                      <div className="flex items-center justify-between mb-3">
                        <button
                          type="button"
                          onClick={() => setCursor(new Date(cursor.getFullYear() - 1, cursor.getMonth(), 1))}
                          className="p-1 rounded hover:bg-zinc-100 text-charcoal"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          type="button"
                          onClick={() => setView('years')}
                          className="flex items-center gap-1 text-sm font-medium text-charcoal hover:bg-zinc-100 px-2 py-1 rounded"
                        >
                          {cursor.getFullYear()}
                          <ChevronDown size={14} />
                        </button>
                        <button
                          type="button"
                          onClick={() => setCursor(new Date(cursor.getFullYear() + 1, cursor.getMonth(), 1))}
                          className="p-1 rounded hover:bg-zinc-100 text-charcoal"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>

                      <div className="grid grid-cols-3 gap-1">
                        {MONTH_ABBR.map((abbr, idx) => {
                          const selectedMonth =
                            parseDate(field.value as string)?.getMonth() === idx &&
                            parseDate(field.value as string)?.getFullYear() === cursor.getFullYear();
                          return (
                            <button
                              key={abbr}
                              type="button"
                              onClick={() => {
                                setCursor(new Date(cursor.getFullYear(), idx, 1));
                                setView('days');
                              }}
                              className={[
                                'py-2 rounded text-sm transition-colors',
                                selectedMonth
                                  ? 'bg-charcoal text-bone'
                                  : 'text-charcoal hover:bg-zinc-100',
                              ].join(' ')}
                            >
                              {abbr}
                            </button>
                          );
                        })}
                      </div>
                    </>
                  )}

                  {/* ── YEARS VIEW ────────────────────────────────────────── */}
                  {view === 'years' && (() => {
                    const startYear = cursor.getFullYear() - 6;
                    const years = Array.from({ length: 12 }, (_, i) => startYear + i);
                    const selectedYear = parseDate(field.value as string)?.getFullYear();

                    return (
                      <>
                        <div className="flex items-center justify-between mb-3">
                          <button
                            type="button"
                            onClick={() => setCursor(new Date(cursor.getFullYear() - 12, cursor.getMonth(), 1))}
                            className="p-1 rounded hover:bg-zinc-100 text-charcoal"
                          >
                            <ChevronLeft size={16} />
                          </button>
                          <span className="text-sm font-medium text-charcoal">
                            {startYear} – {startYear + 11}
                          </span>
                          <button
                            type="button"
                            onClick={() => setCursor(new Date(cursor.getFullYear() + 12, cursor.getMonth(), 1))}
                            className="p-1 rounded hover:bg-zinc-100 text-charcoal"
                          >
                            <ChevronRight size={16} />
                          </button>
                        </div>

                        <div className="grid grid-cols-3 gap-1">
                          {years.map((yr) => (
                            <button
                              key={yr}
                              type="button"
                              onClick={() => {
                                setCursor(new Date(yr, cursor.getMonth(), 1));
                                setView('months');
                              }}
                              className={[
                                'py-2 rounded text-sm transition-colors',
                                yr === selectedYear
                                  ? 'bg-charcoal text-bone'
                                  : 'text-charcoal hover:bg-zinc-100',
                              ].join(' ')}
                            >
                              {yr}
                            </button>
                          ))}
                        </div>
                      </>
                    );
                  })()}
                </div>
              )}
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
