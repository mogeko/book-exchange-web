import useMenus from "@/lib/connect/menus";
import { menus } from "@/lib/_variable";
import Link from "next/link";
import { HiUser } from "react-icons/hi";

const UserRoot: React.FC<UserProps> = ({ username }) => {
  return username ? (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="btn btn-link btn-xs normal-case text-base-content"
      >
        Hi!&nbsp;<b>{username}</b>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content shadow bg-base-300 rounded-box w-52 mt-4"
      >
        {menus.user.map((menu, index) => (
          <li key={index}>
            <Link href={menu.href}>
              <a>{menu.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <a className="btn btn-link btn-xs normal-case">Sign in / Sign up</a>
  );
};

const Mobile: React.FC<UserProps> = ({ avatar }) => {
  return (
    <div className="dropdown dropdown-end sm:hidden">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-6 rounded-full">
          {avatar ?? <HiUser className="h-6 w-6" aria-hidden="true" />}
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
      >
        {menus.user.map((menu, index) => (
          <li key={index}>
            <Link href={menu.href}>
              <a>{menu.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const User = Object.assign(UserRoot, { Mobile });

type UserProps = {
  username?: string;
  avatar?: string;
};

export default User;
