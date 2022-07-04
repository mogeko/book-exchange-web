import Link from "next/link";
import { HiUser } from "react-icons/hi";

const UserRoot: React.FC<UserProps> = ({ menus }) => {
  return <a className="btn btn-link btn-xs normal-case">Sign in / Sign up</a>;
};

const Mobile: React.FC<MobileUserProps> = ({ menus, avatar }) => {
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
        {menus.map((menu, index) => (
          <li key={index}>
            <Link href={menu.href}>
              <a className="justify-between">
                {menu.name}
                {menu.badge ? <span className="badge">New</span> : null}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const User = Object.assign(UserRoot, { Mobile });

type UserProps = {
  menus: UserMenusProps[];
};

type MobileUserProps = {
  avatar?: string;
} & UserProps;

interface UserMenusProps {
  name: string;
  href: string;
  badge?: string | number;
}

export default User;
