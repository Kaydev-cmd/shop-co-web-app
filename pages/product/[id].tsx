import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ProductDetails from "@/components/products/ProductDetails";
import Subscribe from "@/components/common/Subscribe";
import YouMightLike from "@/components/common/YouMightLike";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <ProductDetails product={product} />

      <section id="alsoLike" className="container">
        <h3 className="font-extrabold text-4xl text-center uppercase">
          You Might Also Like
        </h3>
        <YouMightLike />
      </section>

      <section className="container">
        <Subscribe />
      </section>
    </>
  );
};

export default ProductPage;
