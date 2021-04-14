import { ReactNode } from 'react';

type CheckboxProps = {
  children: ReactNode;
  help: string;
  value: string;
  name: string;
  onClick?: (value: string) => void;
};

export default function Checkbox({
  children,
  help,
  value,
  name,
  onClick,
}: CheckboxProps): JSX.Element {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <input
          id={value}
          name={name}
          type="checkbox"
          className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-gray-300"
          onClick={() => (onClick ? onClick(value) : {})}
        />
        <label
          htmlFor={value}
          className="ml-3 block text-base sm:text-lg cursor-pointer">
          {children}
        </label>
      </div>
      <span className="ml-8 text-sm sm:text-lg text-gray-400">{help}</span>
    </div>
  );
}
