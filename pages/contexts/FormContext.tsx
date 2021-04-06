import { createContext, FunctionComponent, useState } from 'react';

import { FormContextInterface } from './FormContextInterface';

const FormContext = createContext<FormContextInterface>({
  text: '',
  setText: (text) => text,
});

const FormProvider: FunctionComponent = ({ children }) => {
  const [text, setText] = useState('Hello World');

  return (
    <FormContext.Provider value={{ text, setText }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormProvider, FormContext };
