import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";
import { useRouter } from "next/router";
import Response from "../Response";

export default function Search(results) {
  console.log("Search.js Components ", results);
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Search </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Search Header */}
      <SearchHeader />

      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
}
export async function getServerSideProps(context) {
  // const startIndex = context.query.start || "1";
  const mockData = true;
  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }`
      ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
}
