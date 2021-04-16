import React, { FunctionComponent } from 'react';

interface SidebarProps {
  menu: string[];
  activeMenu: string;
  onMenuChange: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    selectedMenu: string
  ) => void;
}

const Sidebar: FunctionComponent<SidebarProps> = ({
  menu,
  activeMenu,
  onMenuChange,
}) => {
  return (
    <ul>
      {menu.map((item) => (
        <li
          key={item}
          className={`border border-solid p-4 first:rounded-t-md last:rounded-b-md border-l-8 ${
            activeMenu === item && 'border-gray-600'
          }`}>
          <a href="#" onClick={(event) => onMenuChange(event, item)}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
