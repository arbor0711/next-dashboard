import ContentBox from "@/app/components/ContentBox";
import Pagination from "@/app/components/Pagination";
import Search from "@/app/components/Search";
import { fetchUsers } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";

const UserPage = async () => {
  const users = await fetchUsers();
  console.log(users);

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
              {users.map((user, index) => (
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

export default UserPage;
