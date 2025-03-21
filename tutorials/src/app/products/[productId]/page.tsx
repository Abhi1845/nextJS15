import React from "react";

async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  return (
    <div>
      <h4>Product Details of product {productId}</h4>
    </div>
  );
}

export default ProductDetails;
