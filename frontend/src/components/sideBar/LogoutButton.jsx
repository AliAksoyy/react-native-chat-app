import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut
          onClick={logout}
          className="w-6 h-6 text-white cursor-pointer active:opacity-50"
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
