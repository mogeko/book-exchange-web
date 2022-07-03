import { HiMenu, HiSearch } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const menus = [
  { name: "My library", href: "#" },
  { name: "Ranking", href: "#" },
  { name: "Quote", href: "#" },
  { name: "I'm Feeling Lucky", href: "#" },
];

const Logo: React.FC<LogoProps> = ({ href, src, children }) => {
  return (
    <div className="flex justify-start">
      <Link href={href ?? "/"}>
        <a className="btn btn-ghost normal-case">
          <span className="sr-only">{children ?? "Logo"}</span>
          {src ? (
            <Image className="h-8 w-auto sm:h-10" src={src} alt="logo" />
          ) : (
            <h1 className="text-xl font-bold text-primary-content">
              {children}
            </h1>
          )}
        </a>
      </Link>
    </div>
  );
};

const TopNav: React.FC<TopNavProps> = ({ data }) => {
  return (
    <nav className="hidden flex-1 h-7 bg-base-300 sm:navbar sm:min-h-0">
      {data.map((menu, index) => (
        <Link href={menu.href} key={index}>
          <a className="btn btn-link px-3 text-gray-400 hover:text-primary focus:text-primary-focus">
            {menu.name}
          </a>
        </Link>
      ))}
    </nav>
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
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        {data.map((menu, index) => (
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

const Search: React.FC = () => {
  return (
    <>
      <div className="hidden md:form-control">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered input-primary input-sm w-96"
        />
      </div>
      <Link href="#">
        <a className="btn btn-ghost btn-circle md:hidden">
          <HiSearch className="h-6 w-6" aria-hidden="true" />
        </a>
      </Link>
    </>
  );
};

const Header: React.FC = () => {
  return (
    <div className="min-w-full">
      <TopNav data={menus} />
      <div className="bg-base-200">
        <header className="navbar max-w-5xl m-auto">
          <div className="navbar-start sm:hidden">
            <MobileMenu data={menus} />
          </div>
          <div className="navbar-center sm:navbar-start">
            <Logo href="/">Bookworm</Logo>
          </div>
          <div className="navbar-end">
            <Search />
          </div>
        </header>
      </div>
    </div>
  );
};

type LogoProps = {
  href?: string;
  children?: React.ReactNode;
} & Partial<Pick<Parameters<typeof Image>[0], "src">>;

type TopNavProps = {
  data: MenuProps[];
};

type MobileMenuProps = TopNavProps;

interface MenuProps {
  name: string;
  href: string;
}

export default Header;
