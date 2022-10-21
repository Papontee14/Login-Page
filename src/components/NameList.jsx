import { useState } from "react";
import mockData from "../data/data.json";
import { Link } from "react-router-dom";
import FormComponent from "./Form";

const NameList = () => {
  const [info, setInfo] = useState(mockData);

  const allData = () =>
    info.map((item) => (
      <tr class="border-b">
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {item.first_name} {item.last_name}
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {item.email}
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          0903207610
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          <Link to="/form_coponent" className="text-blue-800 font-semibold">
            Edit
          </Link>
        </td>
      </tr>
    ));

  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-14">
      <div className="bg-white w-full h-screen p-10 flex flex-col ">
        <h1 className="text-3xl text-bolder">Name List</h1>
        <div className="flex justify-between">
          <p className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            repellat laboriosam dolor harum debitis. Porro iste molestiae minus
            necessitatibus sapiente!
          </p>
          <button className="bg-blue-500 p-4 text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            Add Data
          </button>
        </div>
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full">
                  <thead class="border-b">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Tel.
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>{allData()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameList;
