import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  variant?: 'text';
}

export default function Button({
  outline,
  variant,
  ...props
}: ButtonProps): JSX.Element {
  if (variant === 'text') {
    return <TextButton {...props} />;
  }

  return (
    <button
      {...props}
      className={`inline-flex justify-center py-2 px-11 shadow-sm text-sm font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 ${
        outline
          ? 'border-2 border-gray-700 hover:border-gray-800'
          : 'text-white border border-transparent bg-gray-700 hover:bg-gray-800'
      } ${props.className}`}>
      {props.children}
    </button>
  );
}

function TextButton(props: any) {
  const { children, className } = props;

  return (
    <button
      {...props}
      className={`inline-flex justify-center py-2 font-bold rounded-md underline transition focus:outline-none hover:text-gray-800 ${className}`}>
      {children}
    </button>
  );
}
