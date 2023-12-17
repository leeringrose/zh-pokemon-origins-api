import Head from 'next/head';

interface PageLayoutProps {
  children?: React.ReactNode;
  title?: string
}

const PageLayout = ({ title = 'Pokemon Api', children }: PageLayoutProps) => {
  return (<>
    <Head>
      <title>{title}</title>
    </Head>
    <div className='w-full flex items-center flex-col min-h-screen'>
      {children}
    </div>
  </>);
};

export default PageLayout;