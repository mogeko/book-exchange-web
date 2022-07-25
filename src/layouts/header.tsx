import useBadge from "@/lib/hooks/useBadges";
import { DrawerButton } from "@/components/base/drawer";
import Search from "@/components/search";
import Logo from "@/components/base/logo";
import User from "@/components/user";
import logoImage from "@/public/images/logo.svg";
import { menus } from "@/lib/_variable";
import Link from "next/link";

const TopNavbar: React.FC = () => {
  const { menus: badges } = useBadge("1");
  return (
    <div
      className="hidden h-7 bg-black justify-between sm:flex"
      data-theme="dracula"
    >
      <nav className="navbar min-h-0 flex-1">
        {menus.root.map((menu, index) => (
          <Link href={menu.href} key={index}>
            <a className="btn btn-link btn-xs gap-1 text-gray-400 hover:text-primary focus:text-primary-focus">
              {menu.name}
              {badges[index] && (
                <span className="badge badge-xs badge-primary">
                  {badges[index]}
                </span>
              )}
            </a>
          </Link>
        ))}
      </nav>
      <div className="justify-end">
        <User />
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <div className="min-w-full">
      <TopNavbar />
      <div className="bg-inherit p-2 md:p-0 md:bg-base-300">
        <header className="navbar p-0 m-auto rounded-md max-w-screen-lg bg-base-300 md:rounded-none">
          <div className="navbar-start sm:hidden">
            <DrawerButton toggleId="mobile-menu" />
          </div>
          <div className="navbar-center sm:navbar-start">
            <Logo src={logoImage}>Bookworm</Logo>
          </div>
          <div className="navbar-end">
            <Search />
            <div className="sm:hidden">
              <User />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
