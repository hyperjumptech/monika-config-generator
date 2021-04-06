import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
}

export default function Button({
  outline,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      {...props}
      className={`inline-flex justify-center py-2 px-11 shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 ${
        outline
          ? 'border-2 border-gray-700 hover:border-gray-800'
          : 'text-white border border-transparent bg-gray-700 hover:bg-gray-800'
      }`}>
      {props.children}
    </button>
  );
}
