import { Link } from "react-router-dom";

const ProfileIcon = () => {
  return (
    <Link to="/login" className="icon">
      <i className="fa-solid fa-user"></i>
    </Link>
  );
};

export default ProfileIcon;
