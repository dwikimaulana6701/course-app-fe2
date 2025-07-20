import React, { useEffect, useState } from "react";
import useUserStore from "../../stores/useUserStore";
import { toast } from "react-toastify";

const Users = () => {
  const defaultForm = {
    name: "",
    email: "",
    gender: "",
    phone: "",
    password: "",
  };

  const [formData, setFormData] = useState(defaultForm);
  const [editId, setEditId] = useState(null);

  const {
    users,
    fetchUsers,
    addUser,
    updateUserById,
    deleteUserById,
    loading,
  } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await updateUserById(editId, formData);
        toast.success("User berhasil diperbarui");
      } else {
        await addUser(formData);
        toast.success("User berhasil ditambahkan");
      }
      resetForm();
    } catch (err) {
      toast.error(`Gagal menyimpan user: ${err.message}`);
    }
  };

  const resetForm = () => {
    setFormData(defaultForm);
    setEditId(null);
  };

  const handleEdit = (user) => {
    setFormData(user);
    setEditId(user.id);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Yakin ingin menghapus user ini?");
    if (!confirm) return;
    try {
      await deleteUserById(id);
      toast.success("User berhasil dihapus");
      if (editId === id) resetForm();
    } catch (err) {
      toast.error(`Gagal menghapus user: ${err.message}`);
    }
  };

  const formFields = [
    { name: "name", label: "Nama" },
    { name: "email", label: "Email" },
    { name: "gender", label: "Jenis Kelamin" },
    { name: "phone", label: "Phone" },
    { name: "password", label: "Password" },
  ];

  return (
    <div className="p-6">
      <h1 className="md:text-3xl text-xl font-poppins font-bold mb-4">
        Admin - User Management
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
          {editId ? "Update" : "Add"} User
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
          User List
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">No</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Phone</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id} className="text-center">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{user.name}</td>
                  <td className="border p-2">{user.email}</td>
                  <td className="border p-2">{user.phone}</td>
                  <td className="border p-2 space-x-2">
                    <button
                      onClick={() => handleEdit(user)}
                      className="px-3 py-1 bg-yellow-400 text-white rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
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
    </div>
  );
};

export default Users;
