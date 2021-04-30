import { Layout, Radio, Button, HeadPage } from '../components';
import { useRouter } from 'next/router';

export default function WhatDoYouWant(): JSX.Element {
  const router = useRouter();

  return (
    <Layout>
      <HeadPage subtitle="Select what to monitor" />
      <div className="lg:py-20 xl:py-32 xl:px-80">
        <form>
          <fieldset>
            <div>
              <legend className="text-base sm:text-lg font-medium">
                What do you want to monitor?
              </legend>
            </div>
            <div className="mt-12 space-y-4">
              <Radio
                name="what"
                onClick={() => router.push('/web-page')}
                value="web_page"
                help="Select this if you want to regularly monitor a website, e.g., https://github.com">
                A web page
              </Radio>
              <Radio
                name="what"
                onClick={() => router.push('/web-form')}
                value="web_form"
                help="Select this if you want to be notified when a form submission to your website fails.">
                A web form
              </Radio>
              <Radio
                name="what"
                onClick={() => router.push('/api-entry')}
                value="api_server"
                help="Select this if you want to monitor the end points of your API server.">
                API server
              </Radio>
            </div>
          </fieldset>
          <div className="mt-12 py-3 space-x-7">
            <Button type="button" outline onClick={() => router.back()}>
              Back
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
