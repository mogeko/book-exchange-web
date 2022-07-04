import Search from "@/components/search";
import Logo from "@/components/logo";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import User from "@/components/user";

const NavMenus = [
  { name: "My library", href: "#", badge: 1 },
  { name: "Ranking", href: "#" },
  { name: "Quote", href: "#", badge: 2 },
  { name: "I'm Feeling Lucky", href: "#" },
];

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

const MobileMenu: React.FC<MobileMenuProps> = ({ data }) => {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <HiMenu className="h-6 w-6" aria-hidden="true" />
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
      >
        {data.map((menu, index) => (
          <li key={index}>
            <Link href={menu.href}>
              <a className="justify-between">
                {menu.name}
                {menu.badge ? (
                  <span className="badge">{menu.badge}</span>
                ) : null}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <div className="min-w-full">
      <TopNav data={NavMenus} />
      <div className="bg-base-300">
        <header className="navbar max-w-screen-lg m-auto">
          <div className="navbar-start sm:hidden">
            <MobileMenu data={NavMenus} />
          </div>
          <div className="navbar-center sm:navbar-start">
            <Logo href="/">Bookworm</Logo>
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
  data: typeof NavMenus;
};

type MobileMenuProps = TopNavProps;

export default Header;
