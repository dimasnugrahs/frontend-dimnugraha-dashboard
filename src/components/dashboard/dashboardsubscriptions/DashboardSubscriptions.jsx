import { Link, Outlet, useLocation } from "react-router-dom";
import LayoutDashboard from "../../layout/LayoutDashboard";

export default function DashboardSubscriptions() {
  const location = useLocation();
  const isIndexRoute = location.pathname === "/subscriptions";

  // Jika kita berada di Sub-URL (/subscriptions/create atau /subscriptions/update)
  if (!isIndexRoute) {
    // RENDER HANYA SUB-KOMPONEN (CreateSubscriptions atau UpdateSubscriptions)
    return <Outlet />;
  }
  return (
    <>
      <LayoutDashboard>
        <div className="px-4 py-5 rounded bg-company-50 shadow mb-30">
          <div className="md:flex justify-between items-center">
            <div>Dashboard Subscriptions</div>
            <div className="mt-2 md:mt-0">
              <Link
                to={"/subscriptions/create"}
                className="px-4 py-2  rounded text-company-50 bg-company-600 hover:bg-company-700 transition"
              >
                Create New Data Subscription
              </Link>
            </div>
          </div>
          <div className="overflow-x-auto rounded-lg mt-5 shadow">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr className="bg-company-600 text-white font-display">
                  <th
                    className="font-normal md:w-[5%]"
                    style={{ padding: "8px", border: "1px solid #ddd" }}
                  >
                    No
                  </th>
                  <th
                    className="font-normal md:w-[25%]"
                    style={{ padding: "8px", border: "1px solid #ddd" }}
                  >
                    Name
                  </th>
                  <th
                    className="font-normal md:w-[25%]"
                    style={{ padding: "8px", border: "1px solid #ddd" }}
                  >
                    Contact Person
                  </th>
                  <th
                    className="font-normal md:w-[25%]"
                    style={{ padding: "8px", border: "1px solid #ddd" }}
                  >
                    Status
                  </th>
                  <th
                    className="font-normal md:w-[20%]"
                    style={{ padding: "8px", border: "1px solid #ddd" }}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  style={{ borderBottom: "1px solid #ddd" }}
                  className="bg-company-50"
                >
                  <td
                    className="text-center"
                    style={{ padding: "8px", border: "1px solid #ddd" }}
                  >
                    1
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                    Lorem Ipsum
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                    Lorem Ipsum
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                    Lorem Ipsum
                  </td>
                  <td
                    style={{
                      padding: "8px",
                      border: "1px solid #ddd",
                    }}
                    className="text-center"
                  >
                    <button
                      style={{
                        padding: "5px 10px",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                      }}
                      className="bg-indigo-600 hover:bg-indigo-700 rounded mx-1"
                    >
                      Detail
                    </button>
                    <Link to={"/subscriptions/update"}>
                      <button
                        style={{
                          padding: "5px 10px",
                          color: "white",
                          border: "none",
                          cursor: "pointer",
                        }}
                        className="bg-company-600 hover:bg-company-700 rounded mx-1"
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      style={{
                        padding: "5px 10px",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                      }}
                      className="bg-red-600 hover:bg-red-700 rounded  mx-1"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr
                  style={{ borderBottom: "1px solid #ddd" }}
                  className="bg-company-50"
                >
                  <td
                    className="text-center"
                    style={{ padding: "8px", border: "1px solid #ddd" }}
                  >
                    2
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                    Lorem Ipsum
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                    Lorem Ipsum
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                    Lorem Ipsum
                  </td>
                  <td
                    style={{
                      padding: "8px",
                      border: "1px solid #ddd",
                    }}
                    className="text-center"
                  >
                    <button
                      style={{
                        padding: "5px 10px",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                      }}
                      className="bg-indigo-600 hover:bg-indigo-700 rounded mx-1"
                    >
                      Detail
                    </button>
                    <Link to={"/subscriptions/update"}>
                      <button
                        style={{
                          padding: "5px 10px",
                          color: "white",
                          border: "none",
                          cursor: "pointer",
                        }}
                        className="bg-company-600 hover:bg-company-700 rounded mx-1"
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      style={{
                        padding: "5px 10px",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                      }}
                      className="bg-red-600 hover:bg-red-700 rounded  mx-1"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr
                  style={{ borderBottom: "1px solid #ddd" }}
                  className="bg-company-50"
                >
                  <td
                    className="text-center"
                    style={{ padding: "8px", border: "1px solid #ddd" }}
                  >
                    3
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                    Lorem Ipsum
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                    Lorem Ipsum
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                    Lorem Ipsum
                  </td>
                  <td
                    style={{
                      padding: "8px",
                      border: "1px solid #ddd",
                    }}
                    className="text-center"
                  >
                    <button
                      style={{
                        padding: "5px 10px",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                      }}
                      className="bg-indigo-600 hover:bg-indigo-700 rounded mx-1"
                    >
                      Detail
                    </button>
                    <Link to={"/subscriptions/update"}>
                      <button
                        style={{
                          padding: "5px 10px",
                          color: "white",
                          border: "none",
                          cursor: "pointer",
                        }}
                        className="bg-company-600 hover:bg-company-700 rounded mx-1"
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      style={{
                        padding: "5px 10px",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                      }}
                      className="bg-red-600 hover:bg-red-700 rounded  mx-1"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr
                  style={{ borderBottom: "1px solid #ddd" }}
                  className="bg-company-50"
                >
                  <td
                    className="text-center"
                    style={{ padding: "8px", border: "1px solid #ddd" }}
                  >
                    4
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                    Lorem Ipsum
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                    Lorem Ipsum
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                    Lorem Ipsum
                  </td>
                  <td
                    style={{
                      padding: "8px",
                      border: "1px solid #ddd",
                    }}
                    className="text-center"
                  >
                    <button
                      style={{
                        padding: "5px 10px",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                      }}
                      className="bg-indigo-600 hover:bg-indigo-700 rounded mx-1"
                    >
                      Detail
                    </button>
                    <Link to={"/subscriptions/update"}>
                      <button
                        style={{
                          padding: "5px 10px",
                          color: "white",
                          border: "none",
                          cursor: "pointer",
                        }}
                        className="bg-company-600 hover:bg-company-700 rounded mx-1"
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      style={{
                        padding: "5px 10px",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                      }}
                      className="bg-red-600 hover:bg-red-700 rounded  mx-1"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </LayoutDashboard>
    </>
  );
}
