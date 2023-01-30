import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Blog = () => (
  <Main meta={<Meta title="Blog page" description="blog page" />}>
    <p className="flex justify-center">home page</p>
  </Main>
);

export default Blog;
