import React, { useState, useEffect } from "react";
import Header from "../components/organisems/Header";

const AdminPage = () => {
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
  const [cards, setCards] = useState(() => {
    const stored = localStorage.getItem("cardData");
    return stored ? JSON.parse(stored) : [];
  });

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("cardData", JSON.stringify(cards));
  }, [cards]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...cards];
      updated[editIndex] = formData;
      setCards(updated);
      setEditIndex(null);
    } else {
      setCards([...cards, formData]);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData(defaultForm);
  };

  const handleEdit = (index) => {
    setFormData(cards[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = cards.filter((_, i) => i !== index);
    setCards(filtered);
    if (editIndex === index) resetForm();
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

  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="md:text-3xl text-xl font-poppins font-bold mb-4">Dashboard Admin</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                required
              />
            </div>
          ))}
          <button type="submit" className="p-2 bg-blue-600 text-white rounded col-span-1 md:col-span-2">
            {editIndex !== null ? "Update" : "Add"} Card
          </button>

          {editIndex !== null && (
            <button
              type="button"
              onClick={() => {
                setEditIndex(null);
                resetForm();
              }}
              className="p-2 bg-gray-500 text-white rounded col-span-1 md:col-span-2"
            >
              Cancel Edit
            </button>
          )}
        </form>

        <div className="mt-10">
          <h2 className="md:text-2xl text-lg font-poppins font-semibold mb-3">Card List</h2>
          <table className="w-full table-auto border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">No</th>
                <th className="border p-2">Title</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Nama Asmen</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cards.map((card, index) => (
                <tr key={index} className="text-center">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{card.title}</td>
                  <td className="border p-2">{card.description}</td>
                  <td className="border p-2">{card.asmenName}</td>
                  <td className="border p-2">{card.price}</td>
                  <td className="border p-2 space-x-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="px-3 py-1 bg-yellow-400 text-white rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="px-3 py-1 bg-red-500 text-white rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminPage;