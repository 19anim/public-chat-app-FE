import React from "react";

const DropdownList = ({ label, options }) => {
  return (
    <div className="flex items-center gap-3">
      {/* <label htmlFor={label.toLowerCase()}>{label}</label> */}
      <select
        className="border border-[#ffffff40] bg-mainDark p-1 rounded-[5px] outline-none w-full"
        name={label.toLowerCase()}
      >
        {options.map((option) => {
          return (
            <option key={option} value={option.toLowerCase()}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropdownList;
