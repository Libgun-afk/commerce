/** @format */

import { ProducDetails } from "@/components/ProducDetails";
import { Related } from "@/components/Related";
import { Single } from "@/components/single/Single";

export default async function SignUpPage({ params }) {
  const { id } = params;
  const result = await fetch(`https://fakestoreapi.com/products/${id}`);
  const oneCard = await result.json();
  const result1 = await fetch("https://fakestoreapi.com/products/");
  const oneCard1 = await result1.json();

  return (
    <div>
      {/* <Single />
       */}
      <ProducDetails products={oneCard} />
      <Related products1={oneCard1} />
    </div>
  );
}
