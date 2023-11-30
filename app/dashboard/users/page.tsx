import ContentBox from "@/app/components/ContentBox";
import Pagination from "@/app/components/Pagination";
import Search from "@/app/components/Search";
import Image from "next/image";
import Link from "next/link";

interface User {
  avatar: string;
  name: string;
  email: string;
  createdAt: string;
  role: "client" | "admin";
  status: "passive" | "active";
}

const Users = () => {
  const usersList: User[] = [
    {
      avatar: "https://i.pravatar.cc/300",
      name: "John Doe",
      email: "user@MdEmail.com",
      createdAt: "02.12.2023",
      role: "client",
      status: "passive",
    },
    {
      avatar: "https://i.pravatar.cc/300",
      name: "John Amo",
      email: "user@MdEmail.com",
      createdAt: "02.12.2023",
      role: "client",
      status: "active",
    },
    {
      avatar: "https://i.pravatar.cc/300",
      name: "John Ame",
      email: "user@MdEmail.com",
      createdAt: "02.12.2023",
      role: "client",
      status: "passive",
    },
    {
      avatar: "https://i.pravatar.cc/300",
      name: "John Xale",
      email: "user@MdEmail.com",
      createdAt: "02.12.2023",
      role: "admin",
      status: "active",
    },
  ];
  return (
    <ContentBox>
      <div>
        <div className="flex justify-between mb-5">
          <Search />
          <Link href="/dashboard/users/newuser">
            <button className="btn btn-primary">Add New</button>
          </Link>
        </div>

        <div className="w-3/4">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Created at</th>
                <th>role</th>
                <th>Status</th>
                <th>Action</th>
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
                  <td>{user.createdAt}</td>
                  <td>{user.role}</td>
                  <td>{user.status}</td>
                  <td>
                    <Link href="/dashboard/users/test">
                      <button className="btn btn-primary">View</button>
                    </Link>
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
