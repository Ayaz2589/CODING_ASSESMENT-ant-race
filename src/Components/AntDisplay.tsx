import { useEffect, useState } from "react";

enum Progress {
  NOT_RUN_YET = "Not Run Yet",
  IN_PROGRESS = "In Progress",
  CALCULATED = "Calculated",
}

const AntDisplay = ({
  data,
  calclation,
  raceStated,
  handleRaceResults,
}: any) => {
  const [likeyhood, updateLikelyhood] = useState(null);
  const [calcStatus, updateProgress] = useState<Progress>(Progress.NOT_RUN_YET);

  useEffect(() => {
    const calculate = async () => {
      updateProgress(Progress.IN_PROGRESS);
      await calclation(updateLikelyhood);
    };
    if (raceStated) {
      calculate();
    }
  }, [raceStated]);

  useEffect(() => {
    if (likeyhood) {
      updateProgress(Progress.CALCULATED);
      handleRaceResults({ name: data.name, result: likeyhood });
    }
  }, [likeyhood]);
  return (
    <div className="max-w-sm w-full mb-2">
      <div className="border-r border-b border-l border-t border-gray-400 rounded-lg p-2">
        <div className="text-gray-800 font-bold text-xl">{data.name}</div>
        <div className="flex justify-left mb-5">
          <div className="mr-2 text-gray-500">{`color: ${data.color.toLowerCase()}`}</div>
          <div className="mr-2 text-gray-500">{`length: ${data.length}`}</div>
          <div className="mr-2 text-gray-500">{`weight: ${data.weight}`}</div>
        </div>
        <div className="font-normal">
          {`Calculation: `}
          <span className="font-light ">{calcStatus}</span>
        </div>
      </div>
    </div>
  );
};

export default AntDisplay;
