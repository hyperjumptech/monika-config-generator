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
      className={`inline-flex justify-center py-2 px-11 shadow-sm text-sm font-semibold rounded-full focus:outline-none ${
        outline
          ? 'border-2 border-solid border-purple text-purple'
          : 'text-white bg-gradient-to-r from-purple to-aqua'
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
      data-testid="text-button"
      className={`inline-flex justify-center py-2 bg-gradient-to-r from-purple to-aqua font-semibold rounded-full focus:outline-none ${className}`}>
      {children}
    </button>
  );
}
