import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import { menus } from "@/lib/_variable";
import useBadge from "@/lib/hooks/useBadges";

const DrawerMenu: React.FC<DrawerMenuProps> = ({ toggleId }) => {
  const { menus: badges } = useBadge("1");
  return (
    <div className="drawer-side">
      <label htmlFor={toggleId} className="drawer-overlay" />
      <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
        {menus.root.map((menu, index) => (
          <li key={index}>
            <Link href={menu.href}>
              <a className="justify-between">
                {menu.name}
                {badges[index] && (
                  <span className="badge">{badges[index]}</span>
                )}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const withDrawer = (
  WrappedComponent: React.FC<Pick<DrawerProps, "children">>
) => {
  const DrawerWrapper: React.FC<DrawerProps> = (props) => {
    return (
      <div className="drawer">
        <input id={props.toggleId} type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <WrappedComponent>{props.children}</WrappedComponent>
        </div>
        <DrawerMenu toggleId={props.toggleId} />
      </div>
    );
  };
  return DrawerWrapper;
};

export const DrawerButton: React.FC<DrawerButtonProps> = ({ toggleId }) => {
  return (
    <label htmlFor={toggleId} className="btn btn-ghost btn-circle">
      <HiMenu className="h-6 w-6" aria-hidden="true" />
    </label>
  );
};

interface DrawerMenuProps {
  toggleId: string;
}

type DrawerProps = {
  children: React.ReactNode;
} & DrawerMenuProps;

type DrawerButtonProps = Pick<DrawerProps, "toggleId">;
