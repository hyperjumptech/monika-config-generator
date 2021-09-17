import { useRouter } from 'next/router';
import { FormEvent, useContext } from 'react';
import { v4 as uuid } from 'uuid';

import { Button, Form, HeadPage, Layout, TextInput } from '../components';
import { ProbeContext } from '../contexts/probe-context';
import { useForm } from '../hooks/use-form';

type ProbeRequest = {
  id: string;
  url: string;
};

export default function WebPage(): JSX.Element {
  const router = useRouter();
  const { probeData, handleSetProbes } = useContext(ProbeContext);
  const probeRequestsFromContext = probeData?.map((probe) => ({
    id: probe.id,
    url: probe?.requests[0]?.url,
  }));
  const formHelper = useForm({
    initialValues: {
      probeRequests: probeData
        ? probeRequestsFromContext
        : [{ id: uuid(), url: '' }],
    },
  });
  const { values, setFieldValue } = formHelper;
  const { probeRequests } = values;
  const isProbeRequestsMoreThanOne = probeRequests?.length > 1;
  const addProbeRequests = () => {
    setFieldValue(
      'probeRequests',
      probeRequests
        ? [...probeRequests, { id: uuid(), url: '' }]
        : [{ id: uuid(), url: '' }]
    );
  };
  const updateProbeRequests = (id: string, url: string) => {
    setFieldValue(
      'probeRequests',
      probeRequests.map((pr: ProbeRequest) => {
        if (pr.id === id) {
          return { id: pr.id, url };
        }

        return pr;
      })
    );
  };
  const removeProbeRequests = (id: string) => {
    setFieldValue(
      'probeRequests',
      probeRequests.filter((pr: ProbeRequest) => pr.id !== id)
    );
  };
  const handleNext = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const probes = probeRequests.map((pr: ProbeRequest) => ({
      id: pr.id,
      name: '',
      requests: [
        {
          url: pr.url,
          body: {} as JSON,
          timeout: 10000,
        },
      ],
      incidentThreshold: 5,
      recoveryThreshold: 5,
      alerts: [],
    }));

    handleSetProbes(probes);

    router.push('/notifications');
  };

  return (
    <Layout>
      <HeadPage subtitle="Add website URL" />
      <div className="lg:py-20 xl:py-32 xl:px-80">
        <form className="text-sm sm:text-lg" onSubmit={handleNext}>
          <Form.Item label="What is the address (URL) of the web page?">
            {probeRequests.map((probeRequest: ProbeRequest) => {
              const { id, url } = probeRequest;

              return (
                <div key={id} className="flex space-x-7 mb-6">
                  <div className="flex-1">
                    <TextInput
                      id={`data${id}-name`}
                      onChange={(e) => updateProbeRequests(id, e.target.value)}
                      value={url}
                      type="url"
                      placeholder="https://example.com"
                    />
                  </div>
                  {isProbeRequestsMoreThanOne && (
                    <div className="self-end py-3">
                      <Button
                        variant="text"
                        onClick={() => removeProbeRequests(id)}>
                        Remove
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
            <Button variant="text" type="button" onClick={addProbeRequests}>
              Add another URL
            </Button>
          </Form.Item>
          <div className="py-3 space-x-7">
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
