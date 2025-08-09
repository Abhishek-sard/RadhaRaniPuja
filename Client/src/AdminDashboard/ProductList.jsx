export default function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {products.map((p, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4">
          <img
            src={p.image ? URL.createObjectURL(p.image) : ""}
            alt={p.name}
            className="w-full h-40 object-cover rounded"
          />
          <h4 className="text-lg font-semibold mt-2">{p.name}</h4>
          <p className="text-gray-700">${p.price}</p>
        </div>
      ))}
    </div>
  );
}
