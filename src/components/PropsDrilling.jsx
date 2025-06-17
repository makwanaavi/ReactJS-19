export const PropsDrilling = () => {
  const userName = "Avi Makwana";
  return (
    <>
      <h2>PropsDrilling</h2>
      <Parent userName={userName} />
    </>
  );
};
const Parent = ({userName}) => {
  return (
    <>
      <h2>Parent</h2>
      <Child userName={userName} />
    </>
  );
};
const Child = ({userName}) => {
  return (
    <>
      <h2>Child {userName}</h2>
    </>
  );
};
