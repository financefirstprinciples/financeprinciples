import type { CompoundingFrequency } from "@/lib/finance-math";

export const FREQUENCY_OPTIONS: { value: CompoundingFrequency; label: string }[] = [
  { value: "annual", label: "Annually" },
  { value: "monthly", label: "Monthly" },
  { value: "daily", label: "Daily" },
];

export function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {label}
      </span>
      {children}
    </label>
  );
}

export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{label}</p>
      <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{value}</p>
    </div>
  );
}

export function NumberInput({
  value,
  onChange,
  prefix,
  suffix,
  min,
  step = 1,
}: {
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  min?: number;
  step?: number;
}) {
  return (
    <div className="relative">
      {prefix && (
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
          {prefix}
        </span>
      )}
      <input
        type="number"
        value={Number.isNaN(value) ? "" : value}
        min={min}
        step={step}
        onChange={(e) => onChange(e.target.valueAsNumber)}
        className={`w-full rounded-md border border-zinc-300 py-2 text-zinc-900 focus:border-blue-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 ${
          prefix ? "pl-7" : "pl-3"
        } ${suffix ? "pr-12" : "pr-3"}`}
      />
      {suffix && (
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500">
          {suffix}
        </span>
      )}
    </div>
  );
}

export function FrequencySelect({
  value,
  onChange,
}: {
  value: CompoundingFrequency;
  onChange: (v: CompoundingFrequency) => void;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as CompoundingFrequency)}
      className="w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 focus:border-blue-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
    >
      {FREQUENCY_OPTIONS.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
