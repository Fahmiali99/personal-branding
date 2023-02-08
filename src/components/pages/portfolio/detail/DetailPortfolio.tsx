import React from "react";

interface DetailPortfolioProps {
  title: string;
  subString: string;
  href: string;
  image: string;
  bright: boolean;
  technology: any;
}

function DetailPortfolio({
  title,
  subString,
  href,
  image,
  bright,
  technology,
}: DetailPortfolioProps) {
  return (
    <div
      className={`${
        bright
          ? "border border-gray-700 rounded-lg shadow-md "
          : "border border-gray-200 rounded-lg shadow-md"
      }`}
    >
      <div className={`w-full  dark:bg-gray-800 dark:border-gray-700 `}>
        <button className="text-left" onClick={() => window.open(href)}>
          <div>
            <img className="rounded-t-lg " src={image} alt="" />
          </div>
          <div
            className={`${
              bright
                ? " bg-slate-800 text-white rounded rounded-b-lg"
                : "bg-white rounded rounded-b-lg"
            }`}
          >
            <div className="p-5 ">
              <h5 className="mb-2 text-xl font-bold tracking-tight  dark:text-white">
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
  );
}

export default DetailPortfolio;
