import antData from "./antData";
const fetchAntData = () => {
  const delay = Math.random() * 4000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(antData.ants);
    }, delay);
  });
};

export default fetchAntData;
