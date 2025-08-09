import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

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

