import { TextareaHTMLAttributes } from 'react';

interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {
  label?: string;
}

export default function Textarea({
  label,
  ...textAreaProps
}: TextareaProps): JSX.Element {
  return (
    <>
      {label && (
        <label
          htmlFor={textAreaProps.id}
          className="text-gray-400 text-sm sm:text-lg">
          {label}
        </label>
      )}
      <textarea
        {...textAreaProps}
        className="bg-white w-full border border-gray-400 rounded-md shadow-md py-3 px-5 text-black text-sm sm:text-lg placeholder-gray-400 h-full"
      />
    </>
  );
}
