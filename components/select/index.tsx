import { SelectHTMLAttributes, OptionHTMLAttributes, ReactNode } from 'react';

interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className'> {
  label?: string;
  children?: ReactNode;
}

interface SelectOptionProps
  extends Omit<OptionHTMLAttributes<HTMLOptionElement>, 'className'> {
  value?: string;
  children?: ReactNode;
}

export default function Select({
  label,
  children,
  ...selectProps
}: SelectProps): JSX.Element {
  return (
    <div className="space-y-3">
      {label && (
        <label
          htmlFor={selectProps.id}
          className="text-gray-400 text-sm sm:text-lg">
          {label}
        </label>
      )}
      <select
        {...selectProps}
        className="w-full border bg-white border-gray-400 rounded-md shadow-md py-3 px-5 text-sm sm:text-lg placeholder-gray-400 h-full">
        {children}
      </select>
    </div>
  );
}

export function SelectOption({
  children,
  ...selectOptionProps
}: SelectOptionProps): JSX.Element {
  return <option {...selectOptionProps}>{children}</option>;
}
