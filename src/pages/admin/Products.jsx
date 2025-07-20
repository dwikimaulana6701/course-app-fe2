import React, { useEffect, useState } from "react";
import useProductStore from "../../stores/useProductStore";
import { toast } from "react-toastify";

const Products = () => {
  const defaultForm = {
    imageCourse: "",
    title: "",
    description: "",
    asmenImg: "",
    asmenName: "",
    asmenTitle: "",
    price: "",
  };

  const [formData, setFormData] = useState(defaultForm);
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    cards,
    fetchCards,
    addCard,
    updateCardById,
    deleteCardById,
    loading,
  } = useProductStore();

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await updateCardById(editId, formData);
        toast.success("Item berhasil diperbarui");
      } else {
        await addCard(formData);
        toast.success("Item berhasil ditambahkan");
      }
      resetForm();
    } catch (err) {
      toast.error(`Gagal menyimpan item: ${err.message}`);
    }
  };

  const resetForm = () => {
    setFormData(defaultForm);
    setEditId(null);
  };

  const handleEdit = (card) => {
    setFormData(card);
    setEditId(card.id);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Yakin ingin menghapus item ini?");
    if (!confirm) return;
    try {
      await deleteCardById(id);
      toast.success("Item berhasil dihapus");
      if (editId === id) resetForm();
    } catch (err) {
      toast.error(`Gagal menghapus item: ${err.message}`);
    }
  };

  const formFields = [
    { name: "imageCourse", label: "Image Course" },
    { name: "title", label: "Title" },
    { name: "description", label: "Description" },
    { name: "asmenImg", label: "Asmen Image" },
    { name: "asmenName", label: "Nama Asmen" },
    { name: "asmenTitle", label: "Role Asmen" },
    { name: "price", label: "Price" },
  ];

  const filteredCards = cards.filter((card) =>
    `${card.title} ${card.description} ${card.asmenName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="md:text-3xl text-xl font-poppins font-bold mb-4">
        Admin - Product Management
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {formFields.map(({ name, label }) => (
          <div key={name} className="flex flex-col">
            <label htmlFor={name} className="mb-1 font-medium">
              {label}
            </label>
            <input
              id={name}
              type="text"
              className="p-2 border border-gray-300 rounded"
              value={formData[name]}
              onChange={(e) =>
                setFormData({ ...formData, [name]: e.target.value })
              }
              required
            />
          </div>
        ))}
        <button
          type="submit"
          disabled={loading}
          className={`p-2 text-white rounded col-span-1 md:col-span-2 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600'}`}
        >
          {editId ? "Update" : "Add"} Card
        </button>
        {editId && (
          <button
            type="button"
            onClick={resetForm}
            className="p-2 bg-gray-500 text-white rounded col-span-1 md:col-span-2"
          >
            Cancel Edit
          </button>
        )}
      </form>

      <div className="mt-10">
        <h2 className="md:text-2xl text-lg font-poppins font-semibold mb-3">
          Card List
        </h2>

        <input
          type="text"
          placeholder="Cari item course..."
          className="mb-4 p-2 border border-gray-300 rounded w-full md:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="ooverflow-x-auto">
          <table className="w-full table-auto border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">No</th>
                <th className="border p-2">Image</th>
                <th className="border p-2">Title</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Nama Asmen</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCards.map((card, index) => (
                <tr key={card.id} className="text-center">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">
                    <img
                      src={card.imageCourse}
                      alt="course"
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="border p-2">{card.title}</td>
                  <td className="border p-2">{card.description}</td>
                  <td className="border p-2">{card.asmenName}</td>
                  <td className="border p-2">{card.price}</td>
                  <td className="border p-2 space-x-2">
                    <button
                      onClick={() => handleEdit(card)}
                      className="px-3 py-1 bg-yellow-400 text-white rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(card.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {filteredCards.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center p-4 text-gray-500">
                    Tidak ada produk yang ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
