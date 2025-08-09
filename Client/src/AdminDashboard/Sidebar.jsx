export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-800 text-white p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-4">
        <li><a href="#" className="hover:text-blue-300">Products</a></li>
        <li><a href="./NewArrival.jsx" className="hover:text-blue-300">New Arrivals</a></li>
        <li><a href="#" className="hover:text-blue-300">BodyImage</a></li>
      </ul>
    </div>
  );
}
