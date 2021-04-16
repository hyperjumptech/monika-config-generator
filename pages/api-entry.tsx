import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { Layout, TextInput, Select, SelectOption, Button } from '../components';
import Textarea from '../components/textarea';

export default function APIEntryPage(): JSX.Element {
  const router = useRouter();

  const [entries, setEntries] = useState([
    {
      id: 1,
      url: '',
      method: '',
      body: '',
    },
  ]);

  const addEntry = () => {
    setEntries((item) => [
      ...item,
      {
        id: (item[item.length - 1]?.id ?? 0) + 1,
        url: '',
        method: '',
        body: '',
      },
    ]);
  };

  const removeEntry = (id: number) => {
    setEntries((item) => item.filter((r) => r.id !== id));
  };

  const handleNext = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/download');
  };

  return (
    <Layout>
      <div className="lg:py-20 xl:py-32 xl:px-80">
        <form className="text-sm sm:text-lg" onSubmit={handleNext}>
          <fieldset>
            <div className="space-y-8 mb-10">
              <p>What is the endpoint of the API?</p>
              {entries.map(({ id }) => (
                <div key={id} className="space-y-8">
                  <div className="flex flex-row space-x-8">
                    <div className="w-8/12">
                      <TextInput
                        id={`data${id}_url`}
                        placeholder="https://github.com"
                      />
                    </div>
                    <div className="w-4/12">
                      <Select id={`data${id}_method`}>
                        <SelectOption value="GET">GET</SelectOption>
                        <SelectOption value="POST">POST</SelectOption>
                      </Select>
                    </div>
                  </div>
                  <div className="flex flex-row items-center space-x-8">
                    <p>Body</p>
                    <div className="w-full sm:w-3/12">
                      <Select id={`data${id}_content_type`}>
                        <SelectOption value="JSON">JSON</SelectOption>
                      </Select>
                    </div>
                  </div>
                  <Textarea placeholder="{ }" id={`data${id}_body`} />
                  {entries.length > 1 && (
                    <div className="flex justify-end">
                      <Button onClick={() => removeEntry(id)}>Remove</Button>
                    </div>
                  )}
                  {entries.length > 1 && <hr />}
                </div>
              ))}
            </div>
            <div className="space-y-8">
              <button
                className="cursor-pointer underline focus:outline-none"
                type="button"
                onClick={addEntry}>
                Add another endpoint
              </button>
            </div>
          </fieldset>
          <div className="mt-12 py-3 space-x-7">
            <Button type="button" outline onClick={() => router.back()}>
              Back
            </Button>
            <Button type="submit">Next</Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
