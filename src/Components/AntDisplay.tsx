const AntDisplay = ({ data }: any) => {
  return (
    <div className="max-w-sm w-full mb-2">
      <div className="border-r border-b border-l border-t border-gray-400 rounded-lg p-2">
        <div className="text-gray-800 font-bold text-xl">{data.name}</div>
        <div className="flex justify-left mb-5">
          <div className="mr-2 text-gray-500">{`color: ${data.color.toLowerCase()}`}</div>
          <div className="mr-2 text-gray-500">{`length: ${data.length}`}</div>
          <div className="mr-2 text-gray-500">{`weight: ${data.weight}`}</div>
        </div>
      </div>
    </div>
  );
};

export default AntDisplay;
