import "./Gender.css";

const Gender = ({ setGender, gender }) => {
  return (
    <>
      <select
        className="gender-text"
        onChange={(e) => setGender(e.target.value)}
        value={gender}
      >
        <option value="">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </>
  );
};

export default Gender;
