import ContentBox from "@/app/components/ContentBox";
import Pagination from "@/app/components/Pagination";
import Search from "@/app/components/Search";
import Image from "next/image";
import Link from "next/link";

interface Product {
  avatar: string;
  title: string;
  description: string;
  price: number;
  createdAt: number;
  stock: number;
}

const Products = () => {
  const productsList: Product[] = [
    {
      avatar: "/noProduct.png",
      title: "IPhone",
      description: "description",
      price: 420,
      createdAt: 2020,
      stock: 9,
    },
    {
      avatar: "/noProduct.png",
      title: "IPhone",
      description: "description",
      price: 420,
      createdAt: 2020,
      stock: 9,
    },
    {
      avatar: "/noProduct.png",
      title: "IPhone",
      description: "description",
      price: 420,
      createdAt: 2020,
      stock: 9,
    },
    {
      avatar: "/noProduct.png",
      title: "IPhone",
      description: "description",
      price: 420,
      createdAt: 2020,
      stock: 9,
    },
  ];
  return (
    <ContentBox>
      <div>
        <div className="flex justify-between mb-5">
          <Search />
          <button className="btn btn-primary">Add New</button>
        </div>

        <div className="w-3/4">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Created at</th>
                <th>stock</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {productsList.map((product, index) => (
                <tr key={index}>
                  <td>
                    <div className="flex align-middle justify-start gap-2">
                      <div>
                        <Image
                          className="rounded-full"
                          src={product.avatar}
                          alt="product avatar"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div>{product.title}</div>
                    </div>
                  </td>
                  <td>
                    <div>{product.description}</div>
                  </td>
                  <td>${product.price}</td>
                  <td>{product.createdAt}</td>
                  <td>{product.stock}</td>
                  <td>
                    <Link href="/">
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

export default Products;
