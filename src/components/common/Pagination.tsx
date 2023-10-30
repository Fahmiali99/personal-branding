import { Fragment } from "react";
import classnames from "classnames";
import { LogicPagination, DOTS } from "./LogicPagination";
import { BsThreeDots } from "react-icons/bs";
type Props = {
  onPageChange: (pageNumber: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
};
function Pagination(props: Props) {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange: any = LogicPagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <Fragment>
      <div className="py-3 md:py-5">
        <ul
          className={classnames("flex justify-center gap-1 text-xs font-medium", {
            className,
          })}
        >
          <button
            className={classnames(
              "inline-flex hover:bg-gray-50 hover:text-black h-12 w-12 items-center justify-center rounded-full border border-gray-200",
              {
                " pointer-events-none": currentPage === 1,
              }
            )}
            onClick={onPrevious}
          >
            <span className="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {paginationRange.map((pageNumber: any, idx: string) => {
            if (pageNumber === DOTS) {
              return (
                <li key={idx} className="px-2 flex items-center ">
                  <BsThreeDots />
                </li>
              );
            }

            return (
              <button
                key={idx}
                className={classnames(
                  "block h-12 w-12 rounded-full text-center leading-8 border border-gray-200 hover:bg-gray-50 hover:text-black transition duration-300 ease-in-out",
                  {
                    " border-blue-500 bg-blue-500 hover:bg-blue-500 text-white":
                      pageNumber === currentPage,
                  }
                )}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            );
          })}

          <button
            className={classnames(
              "inline-flex h-12 w-12 hover:bg-gray-50 hover:text-black items-center justify-center rounded-full border border-gray-200",
              {
                " pointer-events-none": currentPage === lastPage,
              }
            )}
            onClick={onNext}
          >
            <span className="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </ul>
      </div>
    </Fragment>
  );
}

export default Pagination;
