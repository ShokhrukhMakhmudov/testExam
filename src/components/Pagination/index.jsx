import useData from "../../hooks/useData";
import { useActions } from "../../hooks/useActions";
import "./style.css";

const Pagination = () => {
  const { goToPage, nextPrevPage } = useActions();

  const state = useData();

  return (
    <div className="pagination">
      <button
        className="pag-btn"
        onClick={() => {
          nextPrevPage(-1);
        }}
        disabled={state?.page == 1}
      >
        Назад
      </button>
      <ul className="pag-list">
        {state?.TotalPages &&
          Array.from({ length: Number(state.TotalPages) }).map((_, ind) => {
            const index = ind + 1;
            return (
              <li
                key={ind}
                className={`pag-item ${
                  state.page == index ? "active-page" : ""
                }`}
                onClick={() => {
                  goToPage(index);
                }}
              >
                {index}
              </li>
            );
          })}
      </ul>
      <button
        className="pag-btn"
        onClick={() => {
          nextPrevPage(1);
        }}
        disabled={state?.page == state?.TotalPages}
      >
        Далее
      </button>
    </div>
  );
};

export default Pagination;
