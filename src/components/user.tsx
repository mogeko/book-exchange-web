import { useUser } from "@/lib/hooks/useUsers";
import { menus } from "@/lib/_variable";
import { HiUser } from "react-icons/hi";
import { VscError, VscLoading } from "react-icons/vsc";
import Skeleton from "@/components/skeleton";
import Image from "next/image";
import Link from "next/link";

const User: React.FC = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="hidden sm:block normal-case">
        <UserBar />
      </label>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar sm:hidden">
        <div className="w-6 rounded-full">
          <UserAvatar />
        </div>
      </label>
      <UserMenu />
    </div>
  );
};

const UserBar: React.FC = () => {
  const { user, isError, isLoading } = useUser(1);
  if (isError) return <div className="text-error">Login Error</div>;
  if (isLoading) return <Skeleton.Line className="animate-pulse w-20 mr-4" />;
  if (!user)
    return (
      <Link href="#">
        <a className="btn btn-link btn-xs">Sign in / Sign up</a>
      </Link>
    );
  return (
    <div className="btn btn-link btn-xs text-base-content">
      Hi!&nbsp;<b>{user.username}</b>
    </div>
  );
};

const UserAvatar: React.FC = () => {
  const { user, isError, isLoading } = useUser(1);
  if (isError) return <VscError className="w-6 h-6 text-error" />;
  if (isLoading) return <VscLoading className="animate-spin w-6 h-6" />;
  if (!user) return <HiUser className="h-6 w-6" aria-hidden="true" />;
  return <Image src={user.avatar} width={24} height={24} alt="User avatar" />;
};

const UserMenu: React.FC = () => {
  const { user } = useUser(1);
  return user ? (
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
  ) : (
    <></>
  );
};

export default User;
