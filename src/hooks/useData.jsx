import { useSelector } from "react-redux";

const useData = () => {
  const getData = (state) => state;

  const data = useSelector((state) => getData(state)?.users);
  return { ...data };
};

export default useData;
