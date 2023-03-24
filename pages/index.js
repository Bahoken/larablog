import Button from "@/components/Button";
import MainLayout from "../layouts/MainLayout";
import axios from "../lib/axios";
import Head from "next/head";
import Link from "next/link";

const Home = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Larablog || Your dream blog</title>
      </Head>

      {articles.map((article) => (
        <div className="p-2 bg-white" key={article.id}>
          
          <h1 className="text-sm text-blue-500">
            {article.attributes.title}
          </h1>

          <p className="text-xs">
            {article.attributes.body}
          </p>

          <Link className="text-xs text-blue-800" href="">
              read more ...
          </Link>
        
        </div>
      ))}
    </>
  );
}

export default Home;

export async function getStaticProps() {
  const response = await axios.get("/api/v1/articles");
  const articles = response.data.data;

  return {
    props: {
      articles
    }
  }
}

Home.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}
