import React from "react";

const NgoPage = () => {
  return (
    <div className="mx-auto  min-h-screen bg-primary pt-[5%]">
      <div className="flex flex-col items-center justify-between border-b px-[2%] pb-[2%] md:flex-row">
        <h1 className="font-cutmark text-5xl font-bold uppercase text-white md:text-7xl">
          NGO LeaderBoard
        </h1>
      </div>
      <section className="flex  flex-col justify-center  p-4 text-gray-600 antialiased">
        <div className="h-full">
          <div className="mx-auto w-full max-w-2xl rounded-sm border border-gray-200 bg-white shadow-lg">
            <header className="border-b border-gray-100 px-5 py-4">
              <h2 className="font-semibold text-gray-800">Customers</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
                    <tr>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">Name</div>
                      </th>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">Email</div>
                      </th>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">Spent</div>
                      </th>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-center font-semibold">Country</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    <tr>
                      <td className="whitespace-nowrap p-2">
                        <div className="flex items-center">
                          <div className="mr-2 h-10 w-10 flex-shrink-0 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                              width="40"
                              height="40"
                              alt="Alex Shatov"
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            Alex Shatov
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-2">
                        <div className="text-left">alexshatov@gmail.com</div>
                      </td>
                      <td className="whitespace-nowrap p-2">
                        <div className="text-left font-medium text-green-500">
                          $2,890.66
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-2">
                        <div className="text-center text-lg">🇺🇸</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap p-2">
                        <div className="flex items-center">
                          <div className="mr-2 h-10 w-10 flex-shrink-0 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                              width="40"
                              height="40"
                              alt="Philip Harbach"
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            Philip Harbach
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-2">
                        <div className="text-left">philip.h@gmail.com</div>
                      </td>
                      <td className="whitespace-nowrap p-2">
                        <div className="text-left font-medium text-green-500">
                          $2,767.04
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-2">
                        <div className="text-center text-lg">🇩🇪</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap p-2">
                        <div className="flex items-center">
                          <div className="mr-2 h-10 w-10 flex-shrink-0 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
                              width="40"
                              height="40"
                              alt="Mirko Fisuk"
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            Mirko Fisuk
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-2">
                        <div className="text-left">mirkofisuk@gmail.com</div>
                      </td>
                      <td className="whitespace-nowrap p-2">
                        <div className="text-left font-medium text-green-500">
                          $2,996.00
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-2">
                        <div className="text-center text-lg">🇫🇷</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap p-2">
                        <div className="flex items-center">
                          <div className="mr-2 h-10 w-10 flex-shrink-0 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg"
                              width="40"
                              height="40"
                              alt="Olga Semklo"
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            Olga Semklo
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-2">
                        <div className="text-left">olga.s@cool.design</div>
                      </td>
                      <td className="whitespace-nowrap p-2">
                        <div className="text-left font-medium text-green-500">
                          $1,220.66
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-2">
                        <div className="text-center text-lg">🇮🇹</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap p-2">
                        <div className="flex items-center">
                          <div className="mr-2 h-10 w-10 flex-shrink-0 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
                              width="40"
                              height="40"
                              alt="Burak Long"
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            Burak Long
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-2">
                        <div className="text-left">longburak@gmail.com</div>
                      </td>
                      <td className="whitespace-nowrap p-2">
                        <div className="text-left font-medium text-green-500">
                          $1,890.66
                        </div>
                      </td>
                      <td className="whitespace-nowrap p-2">
                        <div className="text-center text-lg">🇬🇧</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NgoPage;
