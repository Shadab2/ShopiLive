import React, { useState } from "react";
import { cardData } from "../../Data/cardData";
import ImgCard from "../ImgCard/ImgCard";

function RelatedProducts() {
  const [data, setData] = useState(() => cardData.slice(0, 6));
  return (
    <div className="w-full px-5">
      <h1 className="text-4xl font-semibold px-6 my-2">Related Products</h1>
      <hr />
      <div className="flex justify-between p-5 gap-6">
        {data.map((item, id) => (
          <ImgCard data={item} key={id} />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
