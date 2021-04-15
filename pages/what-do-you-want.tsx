import { SyntheticEvent, useState } from 'react';
import { Layout, Radio, Button } from '../components';
import { useRouter } from 'next/router';

const WEB_PAGE = 'web_page';
const WEB_FORM = 'web_form';
const API_SERVER = 'api_server';

export default function WhatDoYouWant(): JSX.Element {
  const router = useRouter();

  const [nextPage, setNextPage] = useState('');

  const handleNext = (e: SyntheticEvent) => {
    e.preventDefault();

    switch (nextPage) {
      case WEB_PAGE:
        router.push('/web-page');
        break;
      case WEB_FORM:
        router.push('/web-form');
        break;
      case API_SERVER:
        router.push('/api-entry');
        break;
      default:
        break;
    }
  };

  return (
    <Layout>
      <div className="lg:py-20 xl:py-32 xl:px-80">
        <form onSubmit={handleNext}>
          <fieldset>
            <div>
              <legend className="text-base sm:text-lg font-medium">
                What do you want to monitor?
              </legend>
            </div>
            <div className="mt-12 space-y-4">
              <Radio
                name="what"
                onClick={setNextPage}
                value={WEB_PAGE}
                help="Select this if you want to regularly monitor a website, e.g., https://github.com">
                A web page
              </Radio>
              <Radio
                name="what"
                onClick={setNextPage}
                value={WEB_FORM}
                help="Select this if you want to be notified when a form submission to your website fails.">
                A web form
              </Radio>
              <Radio
                name="what"
                onClick={setNextPage}
                value={API_SERVER}
                help="Select this if you want to monitor the end points of your API server.">
                API server
              </Radio>
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
