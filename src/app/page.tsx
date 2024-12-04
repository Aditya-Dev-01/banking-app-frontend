"use client";
import HeroSection from "@/components/services/HeroSection";
import { apiClient } from "@/service/apiClient";
import { useEffect, useState } from "react";

interface Transaction {
  date: string;
  amount: number;
  balance: number;
}

const Home: React.FC = () => {
  const [data, setData] = useState<Transaction[]>([]);
  const path:string[] = ['DE89370400440532013000',"DE89370400440532013001"]
  console.log(path)
  const fetchData = async () => {
    try {
      const response = await apiClient('get','/statements/'+path[0])
      console.log(response);
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  },[]);
  return (
    <div className="overflow-x-auto p-2">
      <HeroSection />

      <h3 className="text-center my-2 font-bold">User : {path[0]}</h3>

      <table className="min-w-full table-auto border-collapse shadow-lg">
        <thead>
          <tr className="bg-[gray]  text-[#fff] flex justify-between">
            <th className="px-4 py-2 text-left font-semibold text-[#fff]">
              Date
            </th>

            <th className="px-4 py-2 text-left font-semibold text-[#fff]">
              Amount
            </th>
            <th className="px-4 py-2 text-left font-semibold text-[#fff]">
              Balance
            </th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((row, index) => (
              <tr key={index} className="border-t flex justify-between">
                <td className="px-4 py-2">{row.date.split("T")[0]}</td>

                <td
                  className={`py-2 px-4 ${
                    row.amount < 0 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {row.amount < 0
                    ? `-${Math.abs(row.amount)}`
                    : `+${row.amount}`}
                </td>
                <td className="px-4 py-2">{row.balance}</td>
              </tr>
            ))
          ) : (
            <tr className="">
              <td className="text-bold text-[20px] text-center pt-6">No Data Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
