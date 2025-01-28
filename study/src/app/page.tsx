import Link from 'next/link';
import { client } from '@/libs/microcms';
import { propagateServerField } from 'next/dist/server/lib/render-server';

// ブログ記事の型定義
type Props = {
  id: string;
  title: string;
};

// microCMSからブログ記事を取得
async function getStudyPosts(): Promise<Props[]> {
  const data = await client.get({
    endpoint: 'study',
    queries: {
      fields: 'id,title',
      limit: 5, // 最新の5件を取得
    },
  });
  return data.contents; // microCMSでデータの取得時、contents内にデータが格納されている
}

export default async function Home() {
  const posts = await getStudyPosts();

  return (
    <main>
      <h1>記事一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/study/${post.id}`}> {/* 記事へのリンク作成 */}
              {post.title} {/* タイトルを表示 */}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
