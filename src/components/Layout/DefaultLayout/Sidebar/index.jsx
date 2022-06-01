import React from 'react';
import { MdSpaceDashboard } from 'react-icons/md';
import { GiMoneyStack } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function Sidebar() {
  const menus = [
    {
      path: '/',
      title: 'Dashboard',
      icon: MdSpaceDashboard,
    },
    {
      path: '/monthly-salary',
      title: 'Monthly Salary',
      icon: GiMoneyStack,
    },
  ];

  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="h-full overflow-y-auto rounded bg-gray-50 py-4 px-3 dark:bg-gray-800">
        <ul className="space-y-2">
          {menus.map((menu, index) => {
            const Icon = menu.icon;
            return (
              <li key={index}>
                <Link
                  to={menu.path}
                  className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-200 ease-in-out hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <Icon className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                  <span className="ml-3">{menu.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
