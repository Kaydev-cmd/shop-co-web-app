import React from "react";
import Button from "@/components/common/Button";
import Subscribe from "@/components/common/Subscribe";
import Category from "@/components/common/Category";

const CategoryPage = () => {
  return (
    <div className="container">
      <Category categoryName="Casual" />

      <div className="flex justify-center">
        <Button title="View All" />
      </div>

      <section>
        <Subscribe />
      </section>
    </div>
  );
};

export default CategoryPage;
