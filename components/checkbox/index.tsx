import { ReactNode, InputHTMLAttributes } from 'react';

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  children?: ReactNode;
  label: string;
  description: string;
  value: string;
  name: string;
  defaultChecked?: boolean;
}

export default function Checkbox({
  children,
  label,
  description,
  value,
  name,
  disabled,
  defaultChecked,
  onChange,
}: CheckboxProps): JSX.Element {
  return (
    <div
      data-testid="checkbox-root"
      className="flex lg:items-center space-x-2 lg:space-x-4"
    >
      <div className="flex items-center">
        <input
          id={value}
          name={name}
          type="checkbox"
          disabled={disabled}
          defaultChecked={defaultChecked}
          className="focus:ring-indigo-500 flex-shrink-0 h-6 w-6 mr-2 text-indigo-600 border-gray-300"
          onChange={onChange}
        />
        <div>
          <label
            htmlFor={value}
            className="block text-sm sm:text-lg cursor-pointer"
          >
            {label}
          </label>
          <span
            data-testid="text-checkbox"
            className=" text-xs sm:text-base text-gray-400"
          >
            {description}
          </span>
        </div>
      </div>
      {children && children}
    </div>
  );
}
