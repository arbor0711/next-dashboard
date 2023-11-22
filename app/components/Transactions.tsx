import Image from "next/image";
import React from "react";
interface Transaction {
  avatar: string;
  name: string;
  status: "Pending" | "Done" | "Canceled";
  date: string;
  amount: number;
}
const Transactions = () => {
  const transactions: Transaction[] = [
    {
      avatar: "https://i.pravatar.cc/300",
      name: "John Doe",
      status: "Pending",
      date: "21.12.2023",
      amount: 1504,
    },
    {
      avatar: "https://i.pravatar.cc/300",
      name: "John Doe",
      status: "Done",
      date: "21.12.2023",
      amount: 234,
    },
    {
      avatar: "https://i.pravatar.cc/300",
      name: "John Doe",
      status: "Done",
      date: "21.12.2023",
      amount: 9846,
    },
    {
      avatar: "https://i.pravatar.cc/300",
      name: "John Doe",
      status: "Pending",
      date: "21.12.2023",
      amount: 1025,
    },
    {
      avatar: "https://i.pravatar.cc/300",
      name: "John Doe",
      status: "Canceled",
      date: "21.12.2023",
      amount: 547,
    },
    {
      avatar: "https://i.pravatar.cc/300",
      name: "John Doe",
      status: "Pending",
      date: "21.12.2023",
      amount: 620,
    },
  ];

  return (
    <div className="overflow-x-auto -bg--bgSoft p-5 rounded-xl h-80">
      <h2 className="-text--textSoft font-light mb-2">Latest Transactions</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>
                <div className="flex align-middle justify-start gap-2">
                  <div>
                    <Image
                      className="rounded-full"
                      src={transaction.avatar}
                      alt="User avatar"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>{transaction.name}</div>
                </div>
              </td>
              <td>
                <div
                  className={`badge ${
                    transaction.status == "Canceled"
                      ? "badge-error"
                      : transaction.status == "Done"
                      ? "badge-success"
                      : "badge-warning"
                  }`}
                >
                  {transaction.status}
                </div>
              </td>
              <td>{transaction.date}</td>
              <td>${transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
