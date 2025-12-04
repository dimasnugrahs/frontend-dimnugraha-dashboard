import React from "react";

export default function FormLayout({ children }) {
  // Tambahkan Link/Button Kembali di sini jika diperlukan

  return (
    <div className="mt-6 rounded">
      {/* BODY LAYOUT FORM */}
      <div className="px-6 py-4 rounded bg-gray-300">{children}</div>
    </div>
  );
}
