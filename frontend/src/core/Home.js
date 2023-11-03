import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import axios from "axios";
import "./Home.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    axios
      .get("http://localhost:8000/api/products")
      .then((response) => {
        if (response.data.error) {
          setError(response.data.error);
        } else {
          setProducts(response.data);
        }
      })
      .catch((error) => {
        console.log("Error fetching products:", error);
        setError("An error occurred while fetching products");
      });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  const limitDescription = (description) => {
    const maxLength = 82;
    if(description.length > maxLength) {
      return description.slice(0,maxLength)+"...";
    }
    return description;
  }



  return (
    <Base title="BookKart" description="Affordable Books for Bright Futures">
      <div className="row text-center">
        <h1 className="text-white">E-Books</h1>
        <div
          className="row"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="BookContainer">
            {error ? (
              <p>Error:{error}</p>
            ) : (
              products.map((product, index) => (
                <div className="bookCards">
                  <div className="BookImg">
                    <img src={`data:${product.photo.contentType};base64,${btoa(
                        new Uint8Array(product.photo.data.data).reduce(
                          (data, byte) => data + String.fromCharCode(byte),
                          ""
                        )
                      )}`} alt="" 
                      style={{width:"60%",margin:"auto"}}/>
                  </div>
                  <div className="bookInfo" style={{marginTop:"auto"}}>
                    <h1>{product.name}</h1>
                    <p>{limitDescription(product.description)}</p>
                    <p style={{ fontWeight: "700" }}>{product.category.name}</p>
                    <span>₹{product.price}</span>
                    <button>Add to Cart</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </Base>
  );
}
