export const menus: MenusType = {
  root: [
    { name: "My library", href: "#" },
    { name: "Ranking", href: "#" },
    { name: "Quote", href: "#" },
    { name: "I'm Feeling Lucky", href: "#" },
  ],
  user: [
    { name: "Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Logout", href: "#" },
  ],
};

interface MenusType {
  root: MenuItemType[];
  user: MenuItemType[];
}

interface MenuItemType {
  name: string;
  href: string;
  badge?: string | number;
}
