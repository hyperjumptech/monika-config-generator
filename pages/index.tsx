import { SyntheticEvent } from "react";
import { Layout, Radio, Button } from "../components";

export default function Home(): JSX.Element {
  const handleNext = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("Click Next");
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
                Here you can create a configuration file for{" "}
                <a
                  href="https://hyperjumptech.github.io/monika/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>Monika</u>
                </a>
                . <br />
                Let’s get started.
              </p>
            </div>
            <div className="mt-12 space-y-4">
              <Radio
                name="condition"
                value="new"
                help="Select this if you have never tried Monika before. We will guideyou one step at a time."
              >
                I'm new to Monika
              </Radio>
              <Radio
                name="condition"
                value="have_used"
                help="Select this if you want to jump into customizing Monika's configuration."
              >
                I have used Monika before
              </Radio>
              <Radio
                name="condition"
                value="have_configuration"
                help="Select this if you want to edit your configuration file."
              >
                I have a configuration file
              </Radio>
            </div>
          </fieldset>
          <div className="mt-12 py-3">
            <Button type="submit" onClick={handleNext}>
              Next
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
