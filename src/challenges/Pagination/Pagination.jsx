import { useState } from "react";
import style from "./Pagination.module.css";
import { FOODS } from "./data";

const Pagination = () => {
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const slicedData = FOODS.slice(startIndex, endIndex);
  const totalPage = Math.ceil(FOODS.length / ITEMS_PER_PAGE);

  const handleClick = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={style.container}>
      <div className={style.buttonSection}>
        <button
          disabled={currentPage === 1}
          onClick={() => handleClick(currentPage - 1)}
        >
          Previous
        </button>
        <p>
          Page {currentPage} of {totalPage}
        </p>
        <button
          disabled={currentPage === totalPage}
          onClick={() => handleClick(currentPage + 1)}
        >
          Next
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>FOOD</td>
            <td>PRICE</td>
          </tr>
        </thead>
        <tbody>
          {slicedData.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Pagination;
