import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div>
          <Link
            to="/dashboard"
            className="bg-company-600 hover:bg-company-700 text-white rounded px-8 py-4"
          >
            Sign to Dashboard
          </Link>
        </div>
      </div>
    </>
  );
}
