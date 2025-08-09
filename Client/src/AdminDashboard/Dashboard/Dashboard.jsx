import { useState } from "react";
import DashboardLayout from "../../AdminDashboard/DashboardLayout";
import ProductForm from "../../AdminDashboard/ProductForm";
import ProductList from "../../AdminDashboard/ProductList";

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <DashboardLayout>
      <ProductForm onAddProduct={addProduct} />
      <ProductList products={products} />
    </DashboardLayout>
  );
}

