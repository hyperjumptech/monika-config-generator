import React, { FunctionComponent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

type MenuProps = {
  key: string;
  label: string;
  onClick?: (menuKey: string) => void;
  subMenu?: MenuProps[];
};

type MenuItemProps = {
  item: MenuProps;
  activeMenu?: string;
};

interface SidebarProps {
  menu: MenuProps[];
  activeMenu?: string;
}

const Sidebar: FunctionComponent<SidebarProps> = ({ menu, activeMenu }) => {
  return (
    <ul className="sticky top-4">
      {menu.map((item) => (
        <MenuItem key={item.key} item={item} activeMenu={activeMenu} />
      ))}
    </ul>
  );
};

function MenuItem({ item, activeMenu }: MenuItemProps) {
  const [isSubMenuShow, setSubMenuShow] = useState(true);
  const { key, label } = item;
  const isActive = activeMenu === key;
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (item?.onClick) {
      item.onClick(key);
    }
  };

  return (
    <li
      key={key}
      className={`border border-solid first:rounded-t-md last:rounded-b-md border-l-8 ${
        !isActive && 'border-gray-600'
      }`}
    >
      <button onClick={handleClick} className="p-4 w-full text-left">
        {label}
        {item?.subMenu && (
          <FontAwesomeIcon
            icon={isSubMenuShow ? faChevronDown : faChevronRight}
            className="float-right"
            onClick={() => setSubMenuShow((state) => !state)}
          />
        )}
      </button>
      {item?.subMenu && isSubMenuShow && <SubMenu menu={item?.subMenu} />}
    </li>
  );
}

function SubMenu({ menu, activeMenu }: SidebarProps) {
  return (
    <ul>
      {menu.map((item) => {
        const { key, label } = item;
        const isActive = activeMenu === key;
        const handleClick = (e: React.MouseEvent | React.KeyboardEvent) => {
          e.preventDefault();

          if (item?.onClick) {
            item.onClick(key);
          }
        };

        return (
          <li
            key={key}
            className={`p-4 cursor-pointer hover:bg-gray-800 bg-opacity-50 ${
              !isActive ? 'bg-red' : ''
            }`}
            onClick={handleClick}
            onKeyPress={handleClick}
            role="presentation"
          >
            <span className="pl-4">{label}</span>
            {item?.subMenu && <SubMenu menu={item?.subMenu} />}
          </li>
        );
      })}
    </ul>
  );
}

export default Sidebar;
