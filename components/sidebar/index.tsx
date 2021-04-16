import React, { FunctionComponent } from 'react';

type Menu = 'Probe' | 'Notification';

interface SidebarProps {
  activeMenu: Menu;
  onMenuChange: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    menu: Menu
  ) => void;
}

const Sidebar: FunctionComponent<SidebarProps> = ({
  activeMenu,
  onMenuChange,
}) => {
  return (
    <ul>
      {(['Probe', 'Notification'] as Menu[]).map((menu) => (
        <li
          key={menu}
          className={`border border-solid p-4 first:rounded-t-md last:rounded-b-md border-l-8 ${
            activeMenu === menu && 'border-gray-600'
          }`}>
          <a href="#" onClick={(event) => onMenuChange(event, menu)}>
            {menu}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
