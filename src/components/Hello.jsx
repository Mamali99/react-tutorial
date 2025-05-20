function Hello({ person }) {
  return (
    <div>
      <h1>
        {person.message} {person.name} {person.seatNumber}
        <h2>from Hello</h2>
      </h1>
    </div>
  );
}
export default Hello;
