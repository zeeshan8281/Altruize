import { type } from "os";
import React from "react";
import { AiFillDollarCircle, AiOutlinePlus } from "react-icons/ai";
import { IconType } from "react-icons/lib";

export interface DashBoardTypes {
  title: string;
  amt: number;
  Icon: IconType;
}

const NgoDashboard = () => {
  const dashboardDetails: DashBoardTypes[] = [
    {
      title: "Total Donations Received",
      amt: 55125,
      Icon: AiFillDollarCircle,
    },
    {
      title: "Total Donators",
      amt: 100,
      Icon: AiOutlinePlus,
    },
  ];
  return (
    <div className="mx-auto min-h-screen  bg-primary pt-[5%]">
      <div className="flex flex-col items-center justify-between border-b px-[2%] pb-[2%] md:flex-row">
        <h1 className="font-cutmark text-5xl font-bold uppercase text-white md:text-7xl">
          User Details
        </h1>
      </div>
      {/* dashboard section  */}
      <div className="mx-4 mb-4 mt-10 grid max-w-[1200px] rounded-3xl border-2 border-black bg-steelGray px-8 pb-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="xxl:col-span-9 col-span-12 grid grid-cols-12 gap-6">
            <div className="col-span-12 mt-8">
              <div className="mt-5 grid grid-cols-12 gap-6">
                {dashboardDetails.map((detail) => (
                  <a
                    className="intro-y  col-span-12 transform rounded-lg bg-blue-500 shadow-xl transition duration-300 hover:scale-105 sm:col-span-6 xl:col-span-3"
                    href="#"
                  >
                    <div className="p-5">
                      <div className="flex justify-between">
                        <detail.Icon className="h-5 w-5" />
                      </div>
                      <div className="ml-2 w-full flex-1">
                        <div>
                          <div className="mt-3 text-3xl font-bold leading-8">
                            {detail.amt}
                          </div>

                          <div className="mt-1 text-base text-gray-600">
                            {detail.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* table  */}

            <div className="relative">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Color
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">$2999</td>
                  </tr>
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">White</td>
                    <td className="px-6 py-4">Laptop PC</td>
                    <td className="px-6 py-4">$1999</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">Black</td>
                    <td className="px-6 py-4">Accessories</td>
                    <td className="px-6 py-4">$99</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* tills this div */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NgoDashboard;
