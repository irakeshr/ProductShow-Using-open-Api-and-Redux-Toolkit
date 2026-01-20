import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from "../assets/img1.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
 

const Products = () => {
  let [allProducts, setAllProducts] = useState([]);

  const baseUrl = "https://dummyjson.com/products";

  let fetchData = async () => {
    try {
      const res = await fetch(baseUrl);
      if (!res.ok) throw new Error("Problem to fetch data");
      let data = await res.json();
      setAllProducts(data.products);
    } catch (error) {
      console(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
 


  console.log(allProducts[0]);

  return (
    <>
      <h1 className="text-center">All Products</h1>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {allProducts.length > 0
          ? allProducts.map((val, index) => {
              return (
                <Card key={index} style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={val.images[0]}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{val.title}</Card.Title>
                    <Card.Title>price={val.price}</Card.Title>
                    <Card.Text>{val.description.slice(0, 50)}...</Card.Text>
                    <Button variant="primary">
                      <Link
                        to={`/viewProduct/${val.id}`}
                        className="text-dark text-bold text-decoration-none"
                      >
                        View
                      </Link>
                    </Button>
                   
                       
                   

                     
                  </Card.Body>
                </Card>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Products;
