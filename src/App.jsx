import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";

import DashboardCustomers from "./components/dashboard/dashboardcustomers/DashboardCustomers";
import CreateCustomers from "./components/dashboard/dashboardcustomers/create/CreateCustomers";
import UpdateCustomers from "./components/dashboard/dashboardcustomers/update/UpdateCustomers";

import DashboardCategories from "./components/dashboard/dashboardcategories/DashboardCategories";
import CreateCategories from "./components/dashboard/dashboardcategories/create/CreateCategories";
import UpdateCategories from "./components/dashboard/dashboardcategories/update/UpdateCategories";

import DashboardSubscriptions from "./components/dashboard/dashboardsubscriptions/DashboardSubscriptions";
import CreateSubscriptions from "./components/dashboard/dashboardsubscriptions/create/CreateSubscriptions";
import UpdateSubscriptions from "./components/dashboard/dashboardsubscriptions/update/UpdateSubscriptions";

import DashboardTransactions from "./components/dashboard/dashboardtransactions/DashboardTransactions";
import CreateTransactions from "./components/dashboard/dashboardtransactions/create/CreateTransactions";
import UpdateTransactions from "./components/dashboard/dashboardtransactions/update/UpdateTransactions";

import DashboardUsers from "./components/dashboard/dashboardusers/DashboardUsers";
import CreateUsers from "./components/dashboard/dashboardusers/create/CreateUsers";
import UpdateUsers from "./components/dashboard/dashboardusers/update/UpdateUsers";

import LayoutDashboard from "./components/layout/LayoutDashboard";

function App() {
  return (
    <Router>
      <Routes element={<LayoutDashboard />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Path to Customers */}
        <Route path="/customers" element={<DashboardCustomers />}>
          <Route path="create" element={<CreateCustomers />} />
          <Route path="update" element={<UpdateCustomers />} />
        </Route>

        {/* Path to Categories */}
        <Route path="/categories" element={<DashboardCategories />}>
          <Route path="create" element={<CreateCategories />} />
          <Route path="update" element={<UpdateCategories />} />
        </Route>

        {/* Path to Categories */}
        <Route path="/subscriptions" element={<DashboardSubscriptions />}>
          <Route path="create" element={<CreateSubscriptions />} />
          <Route path="update" element={<UpdateSubscriptions />} />
        </Route>

        {/* Path to Transactions */}
        <Route path="/transactions" element={<DashboardTransactions />}>
          <Route path="create" element={<CreateTransactions />} />
          <Route path="update" element={<UpdateTransactions />} />
        </Route>

        {/* Path to Users */}
        <Route path="/users" element={<DashboardUsers />}>
          <Route path="create" element={<CreateUsers />} />
          <Route path="update" element={<UpdateUsers />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
