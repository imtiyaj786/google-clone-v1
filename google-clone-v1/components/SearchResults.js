import React from "react";
import Parser from "html-react-parser";
import PaginationButtons from "./PaginationButtons";
export default function SearchResults({ results }) {
  console.log("SearchResult Components ", results);
  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      {/* <p>Hello Search Result Js</p> */}

      {/* In this paragraph tag if I remove ? then I'm getting the error */}
      {/* Unhandled Runtime Error
            TypeError: Cannot read properties of undefined (reading 'formattedTotalResults') */}
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results?.searchInformation?.formattedTotalResults} results (
        {results?.searchInformation?.formattedSearchTime} seconds)
      </p>
      {/* Here problem */}

      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group">
            <a className="text-sm truncate" href={result.link}>
              {result.formattedUrl}
            </a>
            <a
              className="group-hover:underline decoration-blue-800"
              href={result.link}
            >
              <h2 className="truncate text-xl font-medium text-blue-800">
                {result.title}
              </h2>
            </a>
          </div>
          <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}
