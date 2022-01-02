import Head from 'next/head';
import { useQuery } from 'react-query';
import { getHomepagePosts } from '../queries/queries';

export default function Home() {
  const {
    status,
    data: posts,
    error,
    isFetching,
    isSuccess,
  } = useQuery('posts', async () => await getHomepagePosts());

  console.log(posts);

  return (
    <div className="flex flex-col items-center py-2 max-w-2xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isSuccess && posts.map((post) => <h1 key={post.id}>{post.title}</h1>)}
    </div>
  );
}
