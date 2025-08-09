import { useState } from "react";

export default function ProductForm({ onAddProduct }) {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProduct({
      ...product,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price || !product.image) {
      alert("Please fill all fields");
      return;
    }
    onAddProduct(product);
    setProduct({ name: "", price: "", image: null });
  };

  return (
    <form
      className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto"
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl font-semibold mb-4">Add Product</h3>

      <input
        type="text"
        name="name"
        value={product.name}
        placeholder="Product Name"
        onChange={handleChange}
        className="border w-full p-2 mb-3 rounded"
      />

      <input
        type="number"
        name="price"
        value={product.price}
        placeholder="Price"
        onChange={handleChange}
        className="border w-full p-2 mb-3 rounded"
      />

      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
        className="border w-full p-2 mb-3 rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Add Product
      </button>
    </form>
  );
}
