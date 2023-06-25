import React from "react";

const Epx_comp = ({ id, company, college, Role, year }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between border-t-2 mb-4">
      <div className="flex flex-col m-2">
        <h2 className="font-poppins font-semibold m-1">{company}</h2>
        <h2 className="font-poppins font-semibold text-gray-400 m-1">
          {college}
        </h2>

        <p className="font-poppins m-1">-- {Role}</p>
      </div>
      <div className="m-2">
        <p className="font-poppins text-gray-500">{year}</p>
      </div>
    </div>
  );
};

export default Epx_comp;
