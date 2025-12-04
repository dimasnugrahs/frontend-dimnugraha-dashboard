import { Link } from "react-router-dom";
import LayoutDashboard from "../../../layout/LayoutDashboard";
import FormLayout from "../../../layout/FormLayout";

export default function UpdateCategories() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika pengiriman form Customer
    console.log("Submit form Customer");
  };

  return (
    <>
      <LayoutDashboard>
        <div className="px-4 py-5 rounded bg-company-50 shadow mb-30">
          <div className="flex justify-between items-center">
            <div>Update Category</div>
            <Link
              to="/categories"
              className="text-company-600 hover:text-company-800 font-medium"
            >
              &larr; Back to Categories
            </Link>
          </div>
          <FormLayout>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block">
                  Name Category
                </label>
                <input
                  type="text"
                  id="name"
                  className="py-2 px-3 block w-full rounded-md border-gray-200 bg-white shadow"
                  value="E-Commerce"
                  required
                />
              </div>

              <div className="mt-4">
                <label htmlFor="description" className="block">
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  className="py-2 px-3 block w-full rounded-md border-gray-300 bg-white shadow"
                  value="Lorem Ipsum"
                  required
                />
              </div>

              <div className="mt-4">
                <label htmlFor="icon" className="block">
                  Icon
                </label>
                <input
                  type="text"
                  id="icon"
                  className="py-2 px-3 block w-full rounded-md border-gray-300 bg-white shadow"
                  value="Lorem Ipsum"
                  required
                />
              </div>

              <div className="flex justify-end pt-4 mt-6">
                <button
                  type="submit"
                  className="px-8 py-2 rounded text-white bg-company-600 hover:bg-company-700 transition"
                >
                  Update Category
                </button>
              </div>
            </form>
          </FormLayout>
        </div>
      </LayoutDashboard>
    </>
  );
}
