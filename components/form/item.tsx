import { ReactNode } from 'react';

type itemProps = { label?: string; name?: string; children?: ReactNode };

export default function Item({
  label,
  name,
  children,
}: itemProps): JSX.Element {
  return (
    <div className="pb-6 pt-7">
      <label className="block mb-5 text-sm sm:text-lg" htmlFor={name}>
        {label}
      </label>
      {children}
    </div>
  );
}
