import { ArrowDownWideNarrow } from "lucide-react";
import React from "react";

const Filter = () => {
  return (
    <div>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        type="button"
        className="bg-zinc-600 p-2 rounded-md flex gap-x-2">
        Filter By Region
        <ArrowDownWideNarrow />
      </button>
      <div
        id="dropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton">
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
