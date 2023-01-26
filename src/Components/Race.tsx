import AntDisplay from "./AntDisplay";

const Race = ({ ants }: any) => {
  return (
    <div className="flex justify-evenly">
      {ants.map((ant: any) => {
        return (
          <>
            <div key={ant.name}>
              <AntDisplay data={ant} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Race;
