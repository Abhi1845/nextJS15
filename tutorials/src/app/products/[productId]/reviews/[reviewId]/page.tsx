import React from "react";

async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  return (
    <div>
      This is review no {reviewId} for the product no {productId}
    </div>
  );
}

export default ProductReview;
