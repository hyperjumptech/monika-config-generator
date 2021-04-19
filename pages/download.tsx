import Link from 'next/link';
import router from 'next/router';
import { useContext } from 'react';
import { Layout, Button } from '../components';
import { downloadJsonConfig } from '../utils/download-json-config';
import { NotificationContext } from '../contexts/notification-context';
import { ProbeContext } from '../contexts/probe-context';

export default function Download(): JSX.Element {
  const { notificationData } = useContext(NotificationContext);
  const { probeData } = useContext(ProbeContext);

  const jsonConfig = {
    notifications: notificationData,
    probes: probeData,
  };

  return (
    <Layout>
      <div className="lg:py-20 xl:py-32 xl:px-80">
        <fieldset>
          <p className="text-md md:text-lg md:font-bold">Congratulations!</p>
          <p className="mt-2 text-sm sm:text-lg">
            Your configuration is ready! Click the download button below to get
            it.
          </p>
          <div className="mt-6 py-3">
            <Button
              type="submit"
              onClick={() => downloadJsonConfig(jsonConfig)}>
              <div className="py-3 px-3">Download Config File</div>
            </Button>
          </div>
          <div className="mt-12 py-3">
            <p className="text-md md:text-lg md:font-bold">Next step ...</p>
            <p className="mt-2 ml-4 text-sm sm:text-lg">
              <ul className="list-disc">
                <li>
                  Use the configuration file with Monika. Please refer to{' '}
                  <a
                    href="https://hyperjumptech.github.io/monika/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline">
                    our documentation
                  </a>{' '}
                  for more information.
                </li>
                <li>
                  You can also customize the configuration even further by
                  clicking{' '}
                  <Link href="/advanced">
                    <a className="underline">here</a>
                  </Link>
                  .
                </li>
                <li>
                  <a
                    href="https://hyperjumptech.github.io/monika/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline">
                    Tell your friends
                  </a>{' '}
                  about Monika.
                </li>
                <li>
                  <a
                    href="https://github.com/hyperjumptech/monika/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline">
                    Report a bug or give us some feedback!
                  </a>
                </li>
              </ul>
            </p>
          </div>
          <div className="flex space-x-4 mt-12 py-3">
            <div>
              <Button outline onClick={() => router.back()}>
                Back
              </Button>
            </div>
            <div>
              <Button onClick={() => router.push('/')}>Start Again</Button>
            </div>
          </div>
        </fieldset>
      </div>
    </Layout>
  );
}
