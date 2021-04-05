import { ButtonHTMLAttributes } from 'react';

export default function Button(
  props: ButtonHTMLAttributes<HTMLButtonElement>
): JSX.Element {
  return (
    <button
      {...props}
      className="inline-flex justify-center py-2 px-11 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-700 mr-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
      {props.children}
    </button>
  );
}
