import { useUser } from "@/lib/connect/users";
import { menus } from "@/lib/_variable";
import { HiUser } from "react-icons/hi";
import { VscError, VscLoading } from "react-icons/vsc";
import Skeleton from "@/components/skeleton";
import Image from "next/image";
import Link from "next/link";

const User: React.FC = () => {
  const { user, isError, isLoading } = useUser(1);
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="hidden sm:block normal-case">
        {isError ? (
          <div className="text-error">Login Error</div>
        ) : isLoading ? (
          <Skeleton.Line className="animate-pulse w-20 mr-4" />
        ) : user ? (
          <div className="btn btn-link btn-xs text-base-content">
            Hi!&nbsp;<b>{user.username}</b>
          </div>
        ) : (
          <Link href="#">
            <a className="btn btn-link btn-xs">Sign in / Sign up</a>
          </Link>
        )}
      </label>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar sm:hidden">
        <div className="w-6 rounded-full">
          {isError ? (
            <VscError className="w-6 h-6 text-error" />
          ) : isLoading ? (
            <VscLoading className="animate-spin w-6 h-6" />
          ) : user?.avatar ? (
            <Image src={user.avatar} width={24} height={24} alt="User avatar" />
          ) : (
            <HiUser className="h-6 w-6" aria-hidden="true" />
          )}
        </div>
      </label>
      {user && (
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
      )}
    </div>
  );
};

export default User;
