import type { ReactNode } from 'react';

import Footer from '@/components/footer';
import Header from '@/components/header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <div>
      {props.meta}
      <div>
        <Header />
        <div>{props.children}</div>
        <Footer />
      </div>
    </div>
  );
};

export { Main };
