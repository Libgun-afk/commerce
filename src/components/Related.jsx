/** @format */

"use client";

import { Card } from "./today/Card";

export const Related = ({ products1 }) => {
  return (
    <>
      <div>
        {products1.map(({ id, rating, image, title, description }, index) => (
          <div className="h-[350px] w-full ">
            <Card
              key={index}
              id={id}
              image={image}
              title={title}
              price={description}
              rating={rating.rate}
            />
          </div>
        ))}
      </div>
    </>
  );
};
