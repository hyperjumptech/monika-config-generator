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
    <div>
      {label && (
        <label htmlFor={selectProps.id} className="text-sm sm:text-lg">
          {label}
        </label>
      )}
      <div className="relative inline-block w-full text-black">
        <select
          {...selectProps}
          className="w-full bg-white border appearance-none border-gray-400 rounded-md shadow-md py-3 px-5 pr-8 text-sm sm:text-lg placeholder-gray-400 h-full">
          {children}
        </select>
        <div className="absolute inset-y-0 right-0 mr-1 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
              fillRule="evenodd"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function SelectOption({
  children,
  ...selectOptionProps
}: SelectOptionProps): JSX.Element {
  return <option {...selectOptionProps}>{children}</option>;
}
