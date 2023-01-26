import { useState, Fragment } from "react";
import ReactLoading from "react-loading";
import { fetchAntData } from "./api";

interface IAntData {
  ants: [{ name: string; length: number; color: string; weight: number }];
}

function App() {
  const [ants, updateAntsData] = useState<IAntData | any>([]);
  const [isLoading, updateLoading] = useState(false);

  const handleClick = async () => {
    updateLoading(true);
    try {
      const data = await fetchAntData();
      updateAntsData(data);
      updateLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5">
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-5"
      >
        Get Ant Data
      </button>
      {isLoading ? (
        <ReactLoading type={"spin"} color={"teal"} height={"5%"} width={"5%"} />
      ) : null}
    </div>
  );
}

export default App;
