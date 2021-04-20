import { Method } from 'axios';
import { useRouter } from 'next/router';
import { FormEvent, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Button, Layout, Select, SelectOption, TextInput } from '../components';
import Textarea from '../components/textarea';
import { ProbeContext } from '../contexts/probe-context';

export default function APIEntryPage(): JSX.Element {
  const HTTPMethods = [
    'GET',
    'DELETE',
    'HEAD',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
  ];
  const router = useRouter();
  const { handleSetProbes } = useContext(ProbeContext);
  const [entries, setEntries] = useState([
    {
      id: uuid(),
      url: '',
      method: 'GET',
      body: '',
    },
  ]);

  const addEntry = () => {
    setEntries((item) => [
      ...item,
      {
        id: uuid(),
        url: '',
        method: 'GET',
        body: '',
      },
    ]);
  };
  const removeEntry = (id: string) => {
    setEntries((item) => item.filter((r) => r.id !== id));
  };
  const handleFormDataChange = (id: string, key: string, value: string) => {
    setEntries((entry) =>
      entry.map((data) => {
        if (data.id === id) {
          return { ...data, [key]: value };
        }
        return data;
      })
    );
  };
  const handleNext = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const probes = entries.map((entry) => {
      const { id, url, method, body } = entry;

      return {
        id,
        name: '',
        requests: [
          {
            url,
            body: JSON.parse(body),
            timeout: 10000,
            method: method as Method,
          },
        ],
        incidentThreshold: 5,
        recoveryThreshold: 5,
        alerts: [],
      };
    });

    handleSetProbes(probes);

    router.push('/notifications');
  };

  return (
    <Layout>
      <div className="lg:py-20 xl:py-32 xl:px-80">
        <form className="text-sm sm:text-lg" onSubmit={handleNext}>
          <fieldset>
            <div className="space-y-8 mb-10">
              <p>What is the endpoint of the API?</p>
              {entries.map((entry) => {
                const { id, url, method, body } = entry;

                return (
                  <div key={id} className="space-y-8">
                    <div className="flex flex-row space-x-8">
                      <div className="w-8/12">
                        <TextInput
                          id={`data${id}-url`}
                          type="url"
                          placeholder="https://example.com"
                          onChange={(e) =>
                            handleFormDataChange(id, 'url', e.target.value)
                          }
                          value={url}
                        />
                      </div>
                      <div className="w-4/12">
                        <Select
                          id={`data${id}-method`}
                          onChange={(e) =>
                            handleFormDataChange(id, 'method', e.target.value)
                          }
                          value={method}>
                          {HTTPMethods.map((method) => (
                            <SelectOption key={method} value={method}>
                              {method}
                            </SelectOption>
                          ))}
                        </Select>
                      </div>
                    </div>
                    <div className="flex flex-row items-center space-x-8">
                      <p>Body</p>
                      <div className="w-full sm:w-3/12">
                        <Select id={`data${id}-content-type`}>
                          <SelectOption value="JSON">JSON</SelectOption>
                        </Select>
                      </div>
                    </div>
                    <Textarea
                      placeholder="{ }"
                      id={`data${id}-body`}
                      onChange={(e) =>
                        handleFormDataChange(id, 'body', e.target.value)
                      }
                      value={body}
                    />
                    {entries.length > 1 && (
                      <div className="flex justify-end">
                        <Button onClick={() => removeEntry(id)}>Remove</Button>
                      </div>
                    )}
                    {entries.length > 1 && <hr />}
                  </div>
                );
              })}
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
