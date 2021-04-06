import { SyntheticEvent } from 'react';
import { Layout, Button } from '../components';

export default function Download(): JSX.Element {
  const handleBack = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('Click Back');
  };
  const handleStart = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('Click Start Again');
  };
  const handleDownload = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('Click Download');
  };
  return (
    <Layout>
      <div className="lg:py-20 xl:py-32 xl:px-80">
        <form>
          <fieldset>
            <p className="text-md md:text-lg md:font-bold">Congratulations!</p>
            <p className="mt-2 text-sm sm:text-lg">
              Your configuration is ready! Click the download buttn below to get
              it.
            </p>
            <div className="mt-6 py-3">
              <Button type="submit" onClick={handleDownload}>
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
                    <a
                      href="https://hyperjumptech.github.io/monika/overview"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline">
                      here
                    </a>
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
                <Button type="submit" onClick={handleBack}>
                  Back
                </Button>
              </div>
              <div>
                <Button type="submit" onClick={handleStart}>
                  Start Again
                </Button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </Layout>
  );
}
