import "./Icons.css";
const Icons = ({ setCurrentIcon }) => {
  return (
    <>
      <div className="icons-butn">
        <button onClick={() => setCurrentIcon("avatar")}>
          <img src="Icons/avatar.svg" alt="avatar" />
        </button>
        <button onClick={() => setCurrentIcon("email")}>
          <img src="Icons/email.svg" alt="email" />
        </button>
        <button onClick={() => setCurrentIcon("dob")}>
          <img src="Icons/calendar.svg" alt="calendar" />
        </button>
        <button onClick={() => setCurrentIcon("map")}>
          <img src="Icons/map.svg" alt="map" />
        </button>
        <button onClick={() => setCurrentIcon("phn")}>
          <img src="Icons/phone.svg" alt="phone" />
        </button>
        <button onClick={() => setCurrentIcon("loc")}>
          <img src="Icons/lock.svg" alt="lock" />
        </button>
      </div>
    </>
  );
};

export default Icons;

