import { Exclusive } from "../components/exclusive";
import { Today } from "../components/today";
import { Browse } from "../components/browse";
import { Selling } from "@/components/selling";
import { CatImage } from "@/components/catImage";
import { OurProducts } from "@/components/ourProducts";
import { Featured } from "@/components/featured";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";

export default async function Home() {
  const result = await fetch("https://fakestoreapi.com/products");
  const objResult = await result.json();

  return (
    <div className="flex flex-col items-center w-[1216px]">
      <Exclusive />
      <Today posts={objResult} />
      <Browse />
      <Selling posts={objResult} />
      <CatImage />
      <OurProducts posts={objResult} />
      <Featured />
    </div>
  );
}
