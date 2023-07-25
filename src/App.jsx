import "./App.css";
import { useEffect } from "react";
import Search from "./components/Search";
import DataTable from "./components/Table";
import Pagination from "./components/Pagination";
import { useActions } from "./hooks/useActions";

const App = () => {
  const { pushData } = useActions();
  useEffect(() => {
    async function fetchApi() {
      const req = await fetch("https://jsonplaceholder.typicode.com/posts");
      const res = await req.json();
      pushData(res);
    }
    fetchApi();
  }, []);
  return (
    <>
      <div className="wrapper">
        <Search />
        <DataTable />
        <Pagination />
      </div>
    </>
  );
};

export default App;
