import { FormEvent, useState } from 'react';
import { Button, Layout, TextInput } from '../components';

export default function WebForm(): JSX.Element {
  const [formData, setFormData] = useState([{ id: 1, name: '', value: '' }]);

  const addInputField = () => {
    setFormData((fd) => [
      ...fd,
      { id: (fd[fd.length - 1]?.id ?? 0) + 1, name: '', value: '' },
    ]);
  };

  const removeInputField = (id: number) => {
    setFormData((fd) => fd.filter((r) => r.id !== id));
  };

  const handleNext = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Click Next');
  };

  return (
    <Layout>
      <div className="lg:py-20 xl:py-32 xl:px-80">
        <form className="text-sm sm:text-lg" onSubmit={handleNext}>
          <fieldset>
            <div className="space-y-8 mb-10">
              <p>What is the address (URL) of the web form?</p>
              <TextInput />
            </div>
            <div>
              <p className="mb-6">What are the data to send?</p>
              {formData.map(({ id }) => (
                <div key={id} className="flex space-x-7 mb-6">
                  <div className="flex-1">
                    <TextInput id={`data${id}_name`} label="Name" />
                  </div>
                  <div className="flex-1">
                    <TextInput id={`data${id}_value`} label="Value" />
                  </div>
                  <div className="self-end py-3">
                    <button
                      type="button"
                      className="cursor-pointer underline focus:outline-none"
                      onClick={() => removeInputField(id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <button
                className="cursor-pointer underline focus:outline-none"
                type="button"
                onClick={addInputField}>
                Add more data
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
