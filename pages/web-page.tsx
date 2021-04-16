import { useContext, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { v4 as uuid } from 'uuid';
import { Button, Form, Layout, TextInput } from '../components';
import { useForm } from '../hooks/use-form';
import { ProbeContext } from '../contexts/probe-context';

type ProbeRequest = {
  id: string;
  url: string;
};

export default function WebPage(): JSX.Element {
  const router = useRouter();
  const { handleSetProbes } = useContext(ProbeContext);
  const formHelper = useForm({
    initialValues: {
      probeRequests: [{ id: uuid(), url: '' }],
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
    handleSetProbes(
      probeRequests.map((pr: ProbeRequest) => ({
        id: uuid(),
        name: '',
        description: '',
        interval: 10,
        requests: [
          {
            url: pr.url,
            body: {} as JSON,
            timeout: 10000,
            headers: {},
            method: 'GET',
          },
        ],
        incidentThreshold: 5,
        recoveryThreshold: 5,
        alerts: [],
      }))
    );
    router.push('/notifications');
  };

  return (
    <Layout>
      <div className="lg:py-20 xl:py-32 xl:px-80">
        <form className="text-sm sm:text-lg" onSubmit={handleNext}>
          <Form.Item label="What is the address (URL) of the web page?">
            {probeRequests.map(({ id }: ProbeRequest) => (
              <div key={id} className="flex space-x-7 mb-6">
                <div className="flex-1">
                  <TextInput
                    id={`data${id}_name`}
                    onChange={(e) => updateProbeRequests(id, e.target.value)}
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
            ))}
            <Button variant="text" type="button" onClick={addProbeRequests}>
              Add another URL
            </Button>
          </Form.Item>
          <div className="py-3 space-x-7">
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
