import { useLocation } from "react-router-dom";
import UserProfile from "../../assets/images/user-profile.jpg";

export default function DashboardHeader() {
  const location = useLocation();

  const getDynamicTitle = () => {
    // 1. Ambil pathname (contoh: '/dashboard/categories')
    const path = location.pathname;

    // 2. Jika path adalah root ('/'), kembalikan 'Dashboard'
    if (path === "/") {
      return "Dashboard";
    }

    // 3. Hapus slash di awal dan pecah string berdasarkan slash (/)
    const segments = path.split("/").filter((segment) => segment);

    // 4. Ambil segmen terakhir (paling relevan)
    let lastSegment = segments.pop();

    // 5. Ubah format: ganti hyphen (-) dengan spasi dan ubah huruf pertama menjadi kapital
    if (lastSegment) {
      lastSegment = lastSegment.replace(/-/g, " ");
      // Ubah huruf pertama setiap kata menjadi kapital (Title Case)
      return lastSegment
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }

    return "Halaman Tidak Dikenal";
  };

  const dynamicTitle = getDynamicTitle();
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-company-50 mt-6 mb-2 md:mb-6 rounded py-4 shadow">
        <div className="flex items-center text-xl font-bold px-4">
          Welcome to Dashboard - {dynamicTitle}
        </div>
        <div className="md:block hidden">
          <div className="flex lg:justify-end items-center space-x-4 px-4 lg:px-10">
            <div>Dimas Nugraha</div>
            <div className="">
              <img
                src={UserProfile}
                className="rounded-full w-12 shadow border"
              />
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
