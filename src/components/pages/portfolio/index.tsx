import React, { useMemo, useState } from "react";
import { data } from "../../utils/Portfolio/data";
import DetailPortfolio from "./detail/DetailPortfolio";
import Pagination from "../../common/Pagination";
import Searching from "../../common/Searching";

interface PortfolioProps {
  bright: boolean;
}
let PageSize = 6;
function Portfolio({ bright }: PortfolioProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      return item.title.toLowerCase().includes(filter.toLowerCase());
    });
  }, [filter]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredData]);

  function handleFilterChange(e: {
    target: { value: React.SetStateAction<string> };
  }) {
    setFilter(e.target.value);
  }

  function handleFilterSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
  }

  return (
    <div>
      <div className="pt-28 pb-4 w-full  xl:min-h-[calc(100vh-3rem)] px-2 md:px-0">
        <div>
          <div className="text-center flex justify-center">
            <div>
              <h1 className="text-2xl sm:text-3xl font-medium">Portfolio</h1>
              <p className="py-5">
                Discover appropriate portfolios to guide you towards your
                desired selection.
              </p>
              <div className="pb-1 sm:pb-2">
                <Searching
                  handleSubmit={handleFilterSubmit}
                  filter={filter}
                  handleFilter={handleFilterChange}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-4 my-5 ">
            {currentTableData.map((item, idx) => {
              const technology = item.technology;

              const setLength = item.story;
              let substring = setLength.substring(0, 108);
              const maxLength = 107;
              if (substring.length > maxLength) {
                substring = substring.substring(0, maxLength) + "...";
              }
              return (
                <DetailPortfolio
                  key={idx}
                  title={item.title}
                  href={item.href}
                  image={item.image}
                  subString={substring}
                  technology={technology}
                  bright={bright}
                />
              );
            })}
          </div>
          <Pagination
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
