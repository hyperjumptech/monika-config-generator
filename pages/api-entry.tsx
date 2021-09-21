import { Method } from 'axios';
import { useRouter } from 'next/router';
import { FormEvent, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

import {
  Button,
  HeadPage,
  Layout,
  Select,
  SelectOption,
  TextInput,
} from '../components';
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
  const { probeData, handleSetProbes } = useContext(ProbeContext);
  const [bodyErrors, setBodyErrors] = useState<any[]>([]);
  const probeRequestsFromContext = probeData?.map((probe) => ({
    id: probe.id,
    url: probe?.requests[0]?.url,
    method: probe.requests[0]?.method,
    body: JSON.stringify(probe?.requests[0]?.body, null, 2),
  }));
  const [entries, setEntries] = useState(
    probeRequestsFromContext || [
      {
        id: uuid(),
        url: '',
        method: 'GET',
        body: JSON.stringify(null, null, 2),
      },
    ]
  );

  const addEntry = () => {
    setEntries((item) => [
      ...item,
      {
        id: uuid(),
        url: '',
        method: 'GET',
        body: JSON.stringify(null, null, 2),
      },
    ]);
  };
  const removeEntry = (id: string) => {
    setEntries((item) => item.filter((r) => r.id !== id));
  };
  const handleFormDataChange = (id: string, key: string, value: string) => {
    // validate body json
    if (key === 'body') {
      try {
        JSON.parse(value);

        // remove error for this id
        setBodyErrors((bodyError) =>
          bodyError.filter((error) => error.id !== id)
        );
      } catch (error) {
        const newBodyError = { id, message: error.message };

        // add error for this id
        setBodyErrors((bodyError) => [
          ...bodyError.filter((error) => error.id !== id),
          newBodyError,
        ]);
      }
    }

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
      <HeadPage subtitle="Add API" />
      <div className="lg:py-20 xl:py-32 xl:px-80">
        <form className="text-sm sm:text-lg" onSubmit={handleNext}>
          <fieldset>
            <div className="space-y-8 mb-10">
              <p>What is the endpoint of the API?</p>
              {entries.map((entry) => {
                const { id, url, method, body } = entry;
                const isBodyError = bodyErrors.find(
                  (bodyError) => bodyError.id === id
                );

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
                    {isBodyError && (
                      <span className="text-red-500">
                        {isBodyError?.message}
                      </span>
                    )}
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
