import React from "react";
import { design } from "../../../utils/About/design";
import SoftSkill from "../components/SoftSkill";

interface AboutDetailProps {
  bright: boolean;
}
function DesignTabs({ bright }: AboutDetailProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 ">
      {design.map((item, idx) => (
        <div
          key={idx}
          className={`${
            bright
              ? "border border-gray-700 bg-slate-800 text-white rounded-lg p-3"
              : "border border-gray-200 bg-white rounded-lg p-3"
          }`}
        >
          <SoftSkill title={item.title} icons={<item.Icons />} />
        </div>
      ))}
    </div>
  );
}

export default DesignTabs;
