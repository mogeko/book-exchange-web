import { HiMenu } from "react-icons/hi";
import Link from "next/link";

const Drawer: React.FC<DrawerProps> = ({ data, children, toggleId }) => {
  return (
    <div className="drawer">
      <input id={toggleId} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label htmlFor={toggleId} className="drawer-overlay" />
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
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
    </div>
  );
};

const Button: React.FC<ButtonProps> = ({ toggleId }) => {
  return (
    <label htmlFor={toggleId} className="btn btn-ghost btn-circle">
      <HiMenu className="h-6 w-6" aria-hidden="true" />
    </label>
  );
};

const MobileMenuDrawer = Object.assign(Drawer, { Button });

interface DrawerProps {
  data: {
    name: string;
    href: string;
    badge?: number;
  }[];
  children: React.ReactNode;
  toggleId: string;
}

type ButtonProps = Pick<DrawerProps, "toggleId">;

export default MobileMenuDrawer;
