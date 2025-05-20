export default function Fruit({ name, price, emoji, soldout }) {
  return (
    <li>
      {name} {price} {emoji} is {soldout ? "'not'" : ""} available
    </li>
  );
}
