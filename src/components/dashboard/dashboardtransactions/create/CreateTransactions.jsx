import { Link } from "react-router-dom";
import LayoutDashboard from "../../../layout/LayoutDashboard";
import FormLayout from "../../../layout/FormLayout";

export default function CreateTransactions() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika pengiriman form Transaction
    console.log("Submit form Transaction");
  };

  return (
    <>
      <LayoutDashboard>
        <div className="px-4 py-5 rounded bg-company-50 shadow mb-30">
          <div className="flex justify-between items-center">
            <div>Create Transaction</div>
            <Link
              to="/transactions"
              className="text-company-600 hover:text-company-800 font-medium"
            >
              &larr; Back to Transactions
            </Link>
          </div>
          <FormLayout>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block">
                  Name Transaction
                </label>
                <input
                  type="text"
                  id="name"
                  className="py-2 px-2 block w-full rounded-md border-gray-200 bg-white shadow"
                  required
                />
              </div>

              <div className="mt-4">
                <label htmlFor="contact" className="block">
                  Contact Person
                </label>
                <input
                  type="text"
                  id="contact"
                  className="py-2 px-2 block w-full rounded-md border-gray-300 bg-white shadow"
                  required
                />
              </div>

              <div className="mt-4">
                <label htmlFor="email" className="block">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="py-2 px-2 block w-full rounded-md border-gray-300 bg-white shadow"
                  required
                />
              </div>

              <div className="mt-4">
                <label htmlFor="phone_number" className="block">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone_number"
                  className="py-2 px-2 block w-full rounded-md border-gray-300 bg-white shadow"
                  required
                />
              </div>

              <div className="mt-4">
                <label htmlFor="address" className="block">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="py-2 px-2 block w-full rounded-md border-gray-300 bg-white shadow"
                  required
                />
              </div>

              <div className="flex justify-end pt-4 mt-6">
                <button
                  type="submit"
                  className="px-8 py-2 rounded text-white bg-company-600 hover:bg-company-700 transition"
                >
                  Simpan Data
                </button>
              </div>
            </form>
          </FormLayout>
        </div>
      </LayoutDashboard>
    </>
  );
}
