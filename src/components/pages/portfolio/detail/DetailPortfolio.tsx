import { Fragment } from "react";

interface DetailPortfolioProps {
  title: string;
  subString: string;
  href: string;
  image: string;
  bright: boolean;
  technology: any;
  date: string;
}

function DetailPortfolio({
  title,
  subString,
  href,
  image,
  bright,
  technology,
  date,
}: DetailPortfolioProps) {
  return (
    <Fragment>
      <div
        className={`${
          bright
            ? "border border-gray-700 rounded-lg shadow-md bg-slate-800"
            : "border border-gray-200 rounded-lg shadow-md bg-white"
        }`}
      >
        <div className={`w-full `}>
          <button className="text-left" onClick={() => window.open(href)}>
            <div>
              <div className="relative right-3 top-3 ">
                <div
                  className={
                    bright
                      ? "absolute right-0 bg-slate-800 px-2 rounded-md text-xs "
                      : "absolute right-0 bg-slate-50 px-2 rounded-md text-xs"
                  }
                >
                  {date}
                </div>
              </div>
              <img className="rounded-t-lg " 
                  src={image} 
                  alt={title}
                  width="900px"
                  height="600px"
              />
            </div>
            <div
              className={`${
                bright
                  ? " bg-slate-800 text-white rounded rounded-b-lg"
                  : "bg-white rounded rounded-b-lg"
              }`}
            >
              <div className="p-5 ">
                <h5 className="mb-2 text-xl font-bold tracking-tight">
                  {title}
                </h5>

                <p className="mb-3 font-normal  dark:text-gray-400">
                  {subString}
                </p>

                <div className="flex">
                  {technology.map((item: any, idx: number) => {
                    return (
                      <div
                        key={idx}
                        className=" mr-1 py-0.5 rounded border shadow-md ..."
                      >
                        <p className="mx-2 text-xs">{item.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default DetailPortfolio;
