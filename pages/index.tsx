import { ChangeEvent, SyntheticEvent, useRef, useState } from 'react';
import { Layout, Radio, Button } from '../components';
import { useRouter } from 'next/router';
import { useConfigFileImporter } from '../contexts/importer';

const NEW = 'new';
const HAVE_USED = 'have_used';
const HAVE_CONFIGURATION_FILE = 'have_configuration_file';

export default function Home(): JSX.Element {
  const router = useRouter();
  const [condition, setCondition] = useState<string | null>();

  const handleNext = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e.target, 'Click Next');

    switch (condition) {
      case NEW:
        router.push('/what-do-you-want');
        break;
      case HAVE_USED:
        router.push('/advanced');
        break;
      case HAVE_CONFIGURATION_FILE:
        // user pick a .json file
        fileInputElement.current?.click();
        break;
      default:
        break;
    }
  };

  const fileInputElement = useRef<HTMLInputElement>(null);

  const importConfigFile = useConfigFileImporter();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      importConfigFile(file)
        .then(() => {
          router.push('/advanced');
        })
        .catch((error) => {
          /* TODO: How to display error? */
          console.log(error.message);
        });
    }
  };

  return (
    <Layout>
      <div className="lg:py-20 xl:py-32 xl:px-80">
        <form>
          <fieldset>
            <div>
              <legend className="text-base sm:text-lg font-medium">
                Monika Configuration Generator
              </legend>
              <p className="text-sm sm:text-lg text-gray-400">
                Here you can create a configuration file for{' '}
                <a
                  href="https://hyperjumptech.github.io/monika/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <u>Monika</u>
                </a>
                . <br />
                Let&apos;s get started.
              </p>
            </div>
            <div className="mt-12 space-y-4">
              <Radio
                name="condition"
                onClick={(v: string) => setCondition(v)}
                value={NEW}
                help="Select this if you have never tried Monika before. We will guide you one step at a time.">
                I&apos;m new to Monika
              </Radio>
              <Radio
                name="condition"
                onClick={(v: string) => setCondition(v)}
                value={HAVE_USED}
                help="Select this if you want to jump into customizing Monika's configuration.">
                I have used Monika before
              </Radio>
              <Radio
                name="condition"
                onClick={(v: string) => setCondition(v)}
                value={HAVE_CONFIGURATION_FILE}
                help="Select this if you want to edit your configuration file.">
                I have a configuration file
              </Radio>
            </div>
          </fieldset>
          <div className="mt-12 py-3">
            <Button onClick={handleNext}>Next</Button>
            {/* hidden file input */}
            <input
              ref={fileInputElement}
              type="file"
              accept="application/json"
              className="hidden h-0 w-0"
              aria-hidden="true"
              onChange={handleFileChange}
            />
          </div>
        </form>
      </div>
    </Layout>
  );
}
