import Head from 'next/head';

type HeadPageProps = {
  title?: string;
  subtitle?: string;
  description?: string;
};

const HeadPage = ({
  title = 'Monika Configuration Generator',
  subtitle,
  description,
}: HeadPageProps): JSX.Element => {
  return (
    <Head>
      <title>{`${title}${subtitle ? ` | ${subtitle}` : ''}`}</title>
      {!!description && <meta name="description" content={description} />}
    </Head>
  );
};

export default HeadPage;
