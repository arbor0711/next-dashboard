import ContentBox from "@/app/components/ContentBox";
import Pagination from "@/app/components/Pagination";
import Image from "next/image";
import React from "react";
import { MdSearch } from "react-icons/md";

interface User {
  avatar: string;
  name: string;
  email: string;
  role: "client" | "admin";
  action: "passive" | "active";
}

const Users = () => {
  const usersList: User[] = [
    {
      avatar: "https://i.pravatar.cc/300",
      name: "John Doe",
      email: "user@MdEmail.com",
      role: "client",
      action: "passive",
    },
    {
      avatar: "https://i.pravatar.cc/300",
      name: "John Amo",
      email: "user@MdEmail.com",
      role: "client",
      action: "active",
    },
    {
      avatar: "https://i.pravatar.cc/300",
      name: "John Ame",
      email: "user@MdEmail.com",
      role: "client",
      action: "passive",
    },
    {
      avatar: "https://i.pravatar.cc/300",
      name: "John Xale",
      email: "user@MdEmail.com",
      role: "admin",
      action: "active",
    },
  ];
  return (
    <ContentBox>
      <div>
        <div className="flex justify-between mb-5">
          <div className="flex justify-center align-middle gap-2 input input-bordered">
            <div className="my-auto">
              <MdSearch />
            </div>
            <div className="form-control flex my-auto">
              <input
                type="text"
                placeholder="Search"
                className="bg-inherit w-24 md:w-auto"
              />
            </div>
          </div>
          <button className="btn btn-primary">Add New</button>
        </div>

        <div className="w-3/4">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Created at</th>
                <th>role</th>
                <th>Action</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {usersList.map((user, index) => (
                <tr key={index}>
                  <td>
                    <div className="flex align-middle justify-start gap-2">
                      <div>
                        <Image
                          className="rounded-full"
                          src={user.avatar}
                          alt="User avatar"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div>{user.name}</div>
                    </div>
                  </td>
                  <td>
                    <div>{user.email}</div>
                  </td>
                  <td>{user.role}</td>
                  <td>${user.action}</td>
                  <td>
                    <button className="btn btn-primary">View</button>
                  </td>
                  <td>
                    <button className="btn btn-error">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination />
      </div>
    </ContentBox>
  );
};

export default Users;
