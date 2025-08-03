import { PRODUCT_INFO } from "@/constants";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const product = PRODUCT_INFO.find((product) => product.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.status(200).json(product);
}
