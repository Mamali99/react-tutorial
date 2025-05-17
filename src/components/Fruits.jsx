export default function Fruits() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      {numbers.map((number, key) => (
        <h1 key={key}>
          {number} {key}
        </h1>
      ))}
    </div>
  );
}
