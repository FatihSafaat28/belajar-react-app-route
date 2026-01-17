"use client";

import { useState } from "react";
import AddProductForm from "./_component/add-product-form";
import ProductList from "./_component/product-list";

export default function ProductsPage() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleProductAdded = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Manajemen Produk
          </h1>
          <p className="text-gray-600">Kelola produk Anda dengan mudah</p>
        </div>

        <AddProductForm onProductAdded={handleProductAdded} />
        <ProductList refreshTrigger={refreshTrigger} />
      </div>
    </div>
  );
}
