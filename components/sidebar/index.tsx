import React, { FunctionComponent, useState } from 'react';

type Menu = 'Probe' | 'Notification';

interface SidebarChildrenProps {
  activeMenu: Menu;
  setActiveMenu: (menu: Menu) => void;
}

interface SidebarComponent {
  children: (props: SidebarChildrenProps) => React.ReactNode;
}

const Sidebar: FunctionComponent<SidebarComponent> = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState<Menu>('Probe');

  const handleSetActiveMenu = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    menu: Menu
  ) => {
    event.preventDefault();

    setActiveMenu(menu);
  };

  return (
    <div className="flex flex-col md:flex-row space-x-0 space-y-8 md:space-y-0 md:space-x-8">
      <div className="w-full md:w-3/12">
        <ul>
          {(['Probe', 'Notification'] as Menu[]).map((menu) => (
            <li
              key={menu}
              className={`border border-solid p-4 first:rounded-t-md last:rounded-b-md border-l-8 ${
                activeMenu === menu && 'border-gray-600'
              }`}>
              <a href="#" onClick={(event) => handleSetActiveMenu(event, menu)}>
                {menu}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-9/12">
        {children && children({ activeMenu, setActiveMenu })}
      </div>
    </div>
  );
};

export default Sidebar;
