import { useUser } from "@/lib/connect/users";
import { menus } from "@/lib/_variable";
import { HiUser } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const User: React.FC = () => {
  const { user, isError, isLoading } = useUser(1);
  if (isError) return <div>Error...</div>;
  if (isLoading) return <div>Loading...</div>;
  return user?.username ? (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="hidden sm:block">
        <div className="btn btn-link btn-xs normal-case text-base-content">
          Hi!&nbsp;<b>{user.username}</b>
        </div>
      </label>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar sm:hidden">
        <div className="w-6 rounded-full">
          {user?.avatar ? (
            <Image src={user.avatar} width={24} height={24} alt="User avatar" />
          ) : (
            <HiUser className="h-6 w-6" aria-hidden="true" />
          )}
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content shadow bg-base-300 rounded-box w-52 mt-3 p-2 sm:mt-4 sm:p-0"
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

export default User;
