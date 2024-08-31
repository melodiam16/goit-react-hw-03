export default function SearchBox({ value, onFilter }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </>
  );
}
