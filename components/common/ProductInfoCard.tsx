import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import Button from "./Button";
import Reviews from "./Reviews";
import { ProductInfoCardProps } from "@/interfaces";
import Rating from "./Rating";
import PillGroup from "./PillGroup";
import { useCart } from "@/context/CartContext";
import { COLORS } from "@/constants";

const ProductInfoCard: React.FC<ProductInfoCardProps> = ({
  productName,
  productImage,
  productRating,
  productPrice,
  productDescription,
}) => {
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const selectedPrice = productPrice;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      setMessage("Please select size and color before adding to cart.");
      return;
    }

    addToCart({
      id: productName,
      productName,
      productImage,
      productSize: selectedSize,
      productColor: selectedColor,
      productPrice: selectedPrice,
      quantity: selectedQuantity,
    });
    setMessage("Item added to cart successfully!");
  };

  useEffect(() => {
    setMessage("");
  }, [selectedSize, selectedColor]);

  return (
    <>
      {/* Gallery */}
      <img src={productImage} alt={productName} />

      {/* ProductInfo */}
      <div className="flex flex-col gap-3">
        <h1 className="font-extrabold text-2xl uppercase">{productName}</h1>
        <div className="flex items-center gap-2">
          <Rating />
          <p className="font-bold text-md">
            {" "}
            <span>{productRating}</span>/5
          </p>
        </div>
        <p className="text-2xl font-bold">${productPrice}</p>
        <p className="text-[#666666] text-lg" style={{ marginBottom: "12px" }}>
          {productDescription}
        </p>

        <div className="container">
          <div className="border border-gray-300"></div>
        </div>

        {/* Select Colors */}
        <div style={{ padding: "6px 0", margin: "6px" }}>
          <h2
            className="text-sm text-[#666666]"
            style={{ marginBottom: "12px" }}
          >
            Select Colors
          </h2>
          <div className="flex gap-3">
            {COLORS.map((color) => (
              <div
                key={color.hex}
                className={`rounded-full cursor-pointer ${
                  selectedColor === color.name ? "ring-2 ring-black" : ""
                }`}
                onClick={() => setSelectedColor(color.name)}
                style={{
                  backgroundColor: color.hex,
                  padding: "16px",
                }}
                title={color.name}
              ></div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="border border-gray-300"></div>
        </div>

        {/* Select Size */}
        <div style={{ padding: "6px 0", margin: "6px" }}>
          <h2
            className="text-sm text-[#666666]"
            style={{ marginBottom: "12px" }}
          >
            Select Size
          </h2>
          <PillGroup selectedPill={selectedSize} onSelect={setSelectedSize} />
        </div>

        {/* Count and Add To Cart */}
        <div
          className="flex items-center justify-around"
          style={{ marginTop: "12px" }}
        >
          <Counter value={selectedQuantity} onChange={setSelectedQuantity} />
          <Button title="Add to Cart" onClick={handleAddToCart} />
        </div>

        {message && (
          <p
            className={`text-sm text-center ${
              message.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
            style={{ marginTop: "20px" }}
          >
            {message}
          </p>
        )}

        {/* Add Reviews */}
        <section>
          <Reviews />
          <div className="flex justify-center" style={{ marginTop: "26px" }}>
            <Button title="Load More Reviews" />
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductInfoCard;
