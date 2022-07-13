import Head from "next/head"
import { getPosts } from "../services"
import { FeaturedPosts } from "../sections"
import { PostCard, Categories, PostWidget } from "../components"

const Home = ({ posts }) => {
  return (
    <div className="conatainer mx-auto px-10 mb-8">
      <Head>
        <title>Brent Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <div>
              <PostCard post={post.node} key={post.title} />
            </div>
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}

export default Home
