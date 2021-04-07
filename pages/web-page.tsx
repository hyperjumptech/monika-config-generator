import { FormEvent, useState } from 'react';

import { Button, Layout, TextInput } from '../components';

export default function WebPage(): JSX.Element {
  const [data, setData] = useState([{ id: 1, name: '', value: '' }]);

  const addInputField = () => {
    setData((fd) => [
      ...fd,
      { id: (fd[fd.length - 1]?.id ?? 0) + 1, name: '', value: '' },
    ]);
  };

  const removeInputField = (id: number) => {
    setData((fd) => fd.filter((r) => r.id !== id));
  };

  const handleNext = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="lg:py-20 xl:py-32 xl:px-80">
        <form className="text-sm sm:text-lg" onSubmit={handleNext}>
          <fieldset>
            <div className="space-y-8 mb-10">
              <p>What is the address (URL) of the web page?</p>
              {data.map(({ id }) => (
                <div key={id} className="flex space-x-7 mb-6">
                  <div className="flex-1">
                    <TextInput
                      id={`data${id}_name`}
                      placeholder="https://example.com"
                    />
                  </div>
                  {data.length > 1 && (
                    <div className="self-end py-3">
                      <button
                        type="button"
                        className="cursor-pointer underline focus:outline-none"
                        onClick={() => removeInputField(id)}>
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              ))}
              <button
                className="cursor-pointer underline focus:outline-none"
                type="button"
                onClick={addInputField}>
                Add another URL
              </button>
            </div>
          </fieldset>
          <div className="mt-12 py-3 space-x-7">
            <Button type="button" outline>
              Back
            </Button>
            <Button type="submit">Next</Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
