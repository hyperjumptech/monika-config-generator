import { useState } from 'react';

export interface FormHelper {
  values: any;
  setFieldValue: (key: string, value: any) => void;
}

export function useForm({ initialValues }: any): FormHelper {
  const [values, setValues] = useState(initialValues);
  const setFieldValue = (key: string, value: any): void => {
    setValues((prev: any) => ({ ...prev, [key]: value }));
  };

  return { values, setFieldValue };
}
