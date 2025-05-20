import Fruit from "./Fruit";

export default function Fruits() {
  const nameOfFruit = "Orange";

  const fruits = [
    { name: "Apple", price: 10, emoji: "apple", soldout: false },
    { name: "Orange", price: 12, emoji: "orange", soldout: true },
    { name: "Mango", price: 14, emoji: "mango", soldout: true },
    { name: "Pineapple", price: 11, emoji: "pineapple", soldout: false },
  ];

  return (
    <div>
      <h1>
        <ol>
          {fruits.map((fruit) => (
            <Fruit
              key={fruit.name}
              name={fruit.name}
              price={fruit.price}
              emoji={fruit.emoji}
              soldout={fruit.soldout}
            />
          ))}
        </ol>
      </h1>
    </div>
  );
}
