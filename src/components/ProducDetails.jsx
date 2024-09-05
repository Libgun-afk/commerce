/** @format */

"use client";
import React from "react";

export const ProducDetails = ({ products }) => {
  const { id, image, title, description } = products;
  return <div>{title}</div>;
};
