import "./style.css";
import useData from "../../hooks/useData";
import { useActions } from "../../hooks/useActions";

const TableTitle = (text) => {
  return (
    <>
      <p className="th-text">{text}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
      >
        <line
          x1="0.353553"
          y1="0.646447"
          x2="6.18011"
          y2="6.47301"
          stroke="#FCFCFC"
        />
        <line
          x1="5.64645"
          y1="6.30331"
          x2="11.3033"
          y2="0.646453"
          stroke="white"
        />
      </svg>
    </>
  );
};

const DataTable = () => {
  const { dataPerPage } = useData();
  const { filter } = useActions();

  return (
    <>
      <table cellSpacing={0}>
        <colgroup>
          <col span={1} style={{ width: "10%" }} />
          <col span={1} style={{ width: "45%" }} />
          <col span={1} style={{ width: "45%" }} />
        </colgroup>
        <thead>
          <tr>
            <th
              onClick={() => {
                filter("id");
              }}
            >
              {TableTitle("ID")}
            </th>
            <th
              onClick={() => {
                filter("title");
              }}
            >
              {TableTitle("Заголовок")}
            </th>
            <th
              onClick={() => {
                filter("body");
              }}
            >
              {TableTitle("Описание")}
            </th>
          </tr>
        </thead>
        <tbody>
          {dataPerPage &&
            dataPerPage.map(({ id, title, body }) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{body}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
export default DataTable;
