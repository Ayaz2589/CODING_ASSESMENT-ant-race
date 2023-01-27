import AntDisplay from "./AntDisplay";
import { generateAntWinLikelihoodCalculator } from "../util";
import { useState } from "react";

interface IRaceResult {
  name: string;
  result: number;
}

const Race = ({ ants }: any) => {
  const [raceStated, updateRaceStart] = useState(false);
  const [raceResults, updateResults] = useState<Object[]>([]);

  const handleRaceResults = (result: IRaceResult) => {
    if (!raceResults.length) {
      updateResults([result]);
      return;
    }

    const newArray: Object[] = [...raceResults, result];
    newArray.sort((a: any, b: any) => b.result - a.result);
    updateResults(newArray);
  };

  return (
    <div>
      <button
        onClick={() => updateRaceStart(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-5"
      >
        Start Race
      </button>
      <div className="flex justify-evenly">
        <div>
          {ants.map((ant: any) => {
            const calclation = generateAntWinLikelihoodCalculator();
            return (
              <>
                <div key={ant.name}>
                  <AntDisplay
                    data={ant}
                    calclation={calclation}
                    raceStated={raceStated}
                    handleRaceResults={handleRaceResults}
                  />
                </div>
              </>
            );
          })}
        </div>
        <div className="max-w-sm w-full">
          {raceResults.map((result: any) => {
            return (
              <div className="mb-5">
                <p className="font-bold">{result.name}</p>
                <p>{result.result}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Race;
