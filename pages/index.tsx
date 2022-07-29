import { ChangeEvent, SyntheticEvent, useRef, useState } from 'react';
import { Layout, Radio, Button, HeadPage } from '../components';
import { useRouter } from 'next/router';
import { useConfigFileImporter } from '../contexts/importer';

const NEW = 'new';
const HAVE_USED = 'have_used';
const HAVE_CONFIGURATION_FILE = 'have_configuration_file';

export default function Home(): JSX.Element {
  const router = useRouter();
  const [condition, setCondition] = useState<string | null>();
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleNext = (e: SyntheticEvent) => {
    e.preventDefault();

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
          setErrorMessage(error.message);
        });
    }
  };

  return (
    <Layout>
      <HeadPage description="Web app to generate configuration file for Monika, the open source and free monitoring tool." />
      <div className="lg:py-20 xl:py-32 xl:px-80 md:mb-0 mb-12">
        <form>
          <fieldset>
            <div>
              <legend className="text-base sm:text-lg font-medium">
                Monika Configuration Generator
              </legend>
              <p className="text-sm sm:text-lg text-gray-400">
                Here you can create a configuration file for{' '}
                <a
                  className="font-semibold bg-gradient-to-r from-purple to-aqua bg-clip-text text-transparent"
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
                data-testid={NEW}
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
            {/* Display error messsage */}
            {!!errorMessage && (
              <p className="text-red-500 mb-4">
                {`YAML file is not valid: ${errorMessage}. Please check the right format from our `}
                <a
                  className="underline font-bold text-black"
                  href="https://hyperjumptech.github.io/monika/overview"
                  target="_blank"
                  rel="noopener noreferrer">
                  docs
                </a>
              </p>
            )}
            <Button data-testid="next-button" onClick={handleNext}>
              Next
            </Button>
            {/* hidden file input */}
            <input
              ref={fileInputElement}
              type="file"
              accept="text/yaml"
              className="hidden h-0 w-0"
              aria-hidden="true"
              onChange={handleFileChange}
            />
          </div>
        </form>
        <div className="card absolute flex md:left-36 left-0 md:right-36 right-0 md:rounded-xl rounded-none lg:p-10 p-6 px-4 xl:mt-5 mt-3">
          <p className="text-white font-medium lg:text-xl text-center">
            If you use{' '}
            <a href="https://code.visualstudio.com/" className="font-bold">Visual Studio Code</a> on a
            daily basis, you can write Monika configuration easily with the help
            of auto completion and validation by installing the{' '}
            <a href="https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml" className="font-bold">
              YAML extension
            </a>
            . More information can be found in our{' '}
            <a href="https://medium.com/hyperjump-tech/creating-monika-configuration-from-scratch-using-autocomplete-in-visual-studio-code-d7bc86c1d36a" className="font-bold">
              Creating Monika Configuration from Scratch using Autocomplete in
              Visual Studio Code
            </a>{' '}
            blog post.
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .card {
            background: linear-gradient(350deg, #2fdcdc, rgba(255, 0, 0, 0) 20%),
              linear-gradient(45deg, #2fdcdc, rgba(0, 255, 0, 0) 30.71%),
              linear-gradient(336deg, #987ce8, #987ce8 80.71%);
          }
        `}
      </style>
    </Layout>
  );
}
