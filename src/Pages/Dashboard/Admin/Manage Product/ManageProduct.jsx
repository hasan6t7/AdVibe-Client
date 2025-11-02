import React, { useState } from "react";
import { Link } from "react-router";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../../../../Redux/features/Products/productsApi";

const ManageProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 10;

  const { data, isLoading, isError, error, refetch } = useGetAllProductsQuery({
    page: currentPage,
    limit: productPerPage,
  });

  const [deleteProduct] = useDeleteProductMutation();

  const products = data?.data?.products || [];
  const totalPages = data?.data?.totalPage || 0;
  console.log(products);

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id).unwrap();
      alert(" Product deleted successfully!");
      refetch();
    } catch (error) {
      console.log(" Failed to delete Product", error);
      alert("Failed to delete product");
    }
  };

  const handlePageChange = (pageNum) => {
    if (pageNum > 0 && pageNum <= totalPages) setCurrentPage(pageNum);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600 text-lg">
        Loading products...
      </div>
    );

  if (isError)
    return (
      <div className="text-center text-red-600 font-medium mt-10">
        {error?.data?.message || "Something went wrong"}
      </div>
    );

  return (
    <section className="py-6 min-h-screen">
      <div className="w-full max-w-6xl mx-auto px-2">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold">
              Manage <span className="text-[#ed3849]">Products</span>
            </h2>
            <p className="text-gray-500 mt-1">
              View, update, and manage all products in your store
            </p>
          </div>
          <Link
            to="/dashboard/add-product"
            className="bg-[#ed3849] hover:bg-[#d32d3d] text-white font-semibold px-4 py-2 rounded-md shadow-md transition-all duration-200"
          >
            + Add Product
          </Link>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl shadow-xl bg-white border border-gray-100">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {[
                  "No",
                  "Product Name",
                  "Category",
                  "Price",
                  "Date",
                  "Action",
                ].map((header, i) => (
                  <th
                    key={i}
                    className="px-3 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {products && products.length > 0 ? (
                products.map((product, index) => (
                  <tr
                    key={product._id}
                    className="hover:bg-indigo-50 transition-colors duration-200"
                  >
                    <td className="px-3 py-3 text-sm text-gray-700 font-medium">
                      {(currentPage - 1) * productPerPage + index + 1}
                    </td>

                    <td className="px-3 py-3 text-sm text-gray-700 font-semibold">
                      <Link
                        to={`/shop/${product._id}`}
                        className="hover:text-[#ed3849] transition"
                      >
                        {product.name}
                      </Link>
                    </td>

                    <td className="px-3 py-3 text-sm text-gray-700 capitalize">
                      {product.category || "N/A"}
                    </td>

                    <td className="px-3 py-3 text-sm text-gray-700">
                      ${product.price}
                    </td>

                    <td className="px-3 py-3 text-sm text-gray-700">
                      {formatDate(product.createdAt)}
                    </td>

                    <td className="px-3 py-3 text-sm text-gray-700 flex gap-2">
                      <Link
                        to={`/dashboard/update-product/${product._id}`}
                        className="bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white font-semibold px-3 py-1 rounded-md shadow-sm transition-all duration-200 cursor-pointer"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => handleDelete(product._id)}
                        className="bg-red-100 text-red-700 hover:bg-red-600 hover:text-white font-semibold px-3 py-1 rounded-md shadow-sm transition-all duration-200 cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center text-gray-500 py-6 text-sm italic"
                  >
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === index + 1
                    ? "bg-[#ed3849] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ManageProduct;
