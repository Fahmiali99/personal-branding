import React, { Fragment } from "react";

interface SearchingProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  filter: string;
  handleFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Searching({ handleSubmit, filter, handleFilter }: SearchingProps) {
  return (
    <Fragment>
      <form className="flex items-center" onSubmit={handleSubmit}>
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            value={filter}
            onChange={handleFilter}
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            placeholder="Search ..."
            required
          />
        </div>
      </form>
    </Fragment>
  );
}

export default Searching;
