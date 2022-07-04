import { DrawerButton } from "@/components/drawer";
import Search from "@/components/search";
import Logo from "@/components/logo";
import User from "@/components/user";
import logoImage from "@/public/logo.svg";
import Link from "next/link";

// TODO: Rewrite with swr
const navMenus = [
  { name: "My library", href: "#", badge: 1 },
  { name: "Ranking", href: "#" },
  { name: "Quote", href: "#", badge: 2 },
  { name: "I'm Feeling Lucky", href: "#" },
];

// TODO: Rewrite with swr
const userMenus = [
  { name: "Profile", href: "#", badge: "New" },
  { name: "Settings", href: "#" },
  { name: "Logout", href: "#" },
];

const TopNav: React.FC<TopNavProps> = ({ data }) => {
  return (
    <div
      className="hidden h-7 bg-black justify-between sm:flex"
      data-theme="dracula"
    >
      <nav className="navbar min-h-0 flex-1">
        {data.map((menu, index) => (
          <Link href={menu.href} key={index}>
            <a className="btn btn-link btn-xs text-gray-400 hover:text-primary focus:text-primary-focus">
              {menu.name}
              {menu.badge ? (
                <span className="badge badge-secondary ml-1 badge-xs">
                  {menu.badge}
                </span>
              ) : null}
            </a>
          </Link>
        ))}
      </nav>
      <div className="justify-end">
        <User menus={userMenus} />
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <div className="min-w-full">
      <TopNav data={navMenus} />
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
            <User.Mobile menus={userMenus} />
          </div>
        </header>
      </div>
    </div>
  );
};

type TopNavProps = {
  data: typeof navMenus;
};

export default Header;
