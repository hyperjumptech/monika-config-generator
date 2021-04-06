import { ReactNode } from 'react';

type RadioProps = {
  children: ReactNode;
  help: string;
  value: string;
  name: string;
  onClick?: (value: string) => void
};

export default function Radio({
  children,
  help,
  value,
  name,
  onClick
}: RadioProps): JSX.Element {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <input
          id={value}
          name={name}
          type="radio"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
          onClick={() => onClick ? onClick(value) : {}}
        />
        <label
          htmlFor={value}
          className="ml-3 block text-base sm:text-lg cursor-pointer">
          {children}
        </label>
      </div>
      <span className="ml-7 text-sm sm:text-lg text-gray-400">{help}</span>
    </div>
  );
}
