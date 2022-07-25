import { VscError, VscLoading } from "react-icons/vsc";
import useBadge from "@/lib/hooks/useBadges";
import { useUser } from "@/lib/hooks/useUsers";
import { menus } from "@/lib/_variable";
import { HiUser } from "react-icons/hi";
import Skeleton from "@/components/base/skeleton";
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
  const { data, isError, isLoading } = useUser("1");
  if (isError) return <div className="text-error">Login Error</div>;
  if (isLoading) return <Skeleton.Line className="animate-pulse w-20 mr-4" />;
  if (!data)
    return (
      <Link href="#">
        <a className="btn btn-link btn-xs">Sign in / Sign up</a>
      </Link>
    );
  return (
    <div className="btn btn-link btn-xs text-base-content">
      Hi!&nbsp;<b>{data.username}</b>
    </div>
  );
};

const UserAvatar: React.FC = () => {
  const { data, isError, isLoading } = useUser("1");
  if (isError) return <VscError className="w-6 h-6 text-error" />;
  if (isLoading) return <VscLoading className="animate-spin w-6 h-6" />;
  if (!data) return <HiUser className="h-6 w-6" aria-hidden="true" />;
  return <Image src={data.avatar!} width={24} height={24} alt="User avatar" />;
};

const UserMenu: React.FC = () => {
  const { isLoading, isError } = useUser("1");
  const { user: badges } = useBadge("1");

  if (isLoading || isError) return <></>;
  return (
    <ul
      tabIndex={0}
      className="menu menu-compact dropdown-content shadow bg-base-300 rounded-box w-52 mt-3 p-2 sm:mt-4 sm:p-0"
    >
      {menus.user.map((menu, index) => (
        <li key={index}>
          <Link href={menu.href}>
            <a className="justify-between">
              {menu.name}
              {badges[index] && <span className="badge">{badges[index]}</span>}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default User;
