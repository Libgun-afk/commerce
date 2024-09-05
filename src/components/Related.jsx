/** @format */

"use client";

import { Card } from "./today/Card";

export const Related = ({ products1 }) => {
  return (
    <>
      <div>
        {products1.map(
          ({ id, rating, image, title, description, price }, index) => (
            <div key={index} className="flex gap-10 h-[350px]  ">
              <Card
                key={index}
                id={id}
                image={image}
                title={title}
                price={price}
                description={description}
                rating={rating.rate}
              />
            </div>
          )
        )}
      </div>
    </>
  );
};
