import React, { useState } from "react";
import { bestprods } from "../../data/bestprods.json";


export default function LatestProducts() {
  return (
    <>
      <div className="w-full h-full" name="products">
        <div className="flex justify-between items-center mx-12 my-5">
          <h1 className="text-4xl text-black font-bold">Our Best Products</h1>
          <p className="text-sm">
            We have solutions to help you achieve smoother, <br />
            cleaner and more youthful looking skin.
          </p>
        </div>

        <div className="bestprod">
          <section>
            <div className="product-container">
              {bestprods.map((prod) => {
                return (
                  <div className="card">
                    <div className="card-inner">
                      <div className="box">
                        <div className="imgBox">
                          <img src={prod.image} alt={prod.name} />
                        </div>
                        <div class="icon">
                          <a href="#" class="iconBox">
                            <span class="material-symbols-outlined arrow ">
                              arrow_outward
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <h3>{prod.name}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
