import React from "react";
import { programming } from "../../../utils/About/programming";
import Programming from "../components/Programming";

interface AboutDetailProps {
  bright: boolean;
}
function ProgrammingTabs({ bright }: AboutDetailProps) {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 ">
        {programming.map((item, idx) => (
          <div
            key={idx}
            className={`${
              bright
                ? "border border-gray-700 bg-slate-800 text-white rounded-lg p-3"
                : "border border-gray-200 bg-white rounded-lg p-3"
            }`}
          >
            <Programming title={item.title} icons={<item.Icons />} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgrammingTabs;
