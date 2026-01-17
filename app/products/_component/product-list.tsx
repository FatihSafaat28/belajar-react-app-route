"use client";

import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

interface ProductListProps {
  refreshTrigger: number;
}

export default function ProductList({ refreshTrigger }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [refreshTrigger]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch("/api/products");

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError("Gagal memuat produk");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="text-gray-500">Memuat produk...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
        {error}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">
          Belum ada produk. Tambahkan produk baru untuk memulai!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <h2 className="text-2xl font-bold p-6 text-gray-800 border-b border-gray-200">
        Daftar Produk ({products.length})
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition"
          >
            <div className="mb-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {product.description}
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">
                  Rp {product.price.toLocaleString("id-ID")}
                </span>
              </div>

              <div className="text-xs text-gray-400 mt-2">
                <p>ID: {product.id}</p>
                <p>
                  Dibuat:{" "}
                  {new Date(product.createdAt).toLocaleDateString("id-ID")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
