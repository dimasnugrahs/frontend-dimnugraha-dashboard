export const customerFields = [
  { name: "name", label: "Nama Customer", type: "text", required: true },
  {
    name: "contactPerson",
    label: "Contact Person",
    type: "text",
    required: true,
  },
  { name: "phone", label: "Nomor Telepon", type: "number" },
  { name: "address", label: "Alamat Lengkap", type: "textarea" },
];

export const categoryFields = [
  {
    name: "categoryName",
    label: "Nama Kategori",
    type: "text",
    required: true,
  },
  { name: "description", label: "Deskripsi Kategori", type: "textarea" },
];
