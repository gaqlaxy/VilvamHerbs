import React, { useState } from "react";
import LatestProds from "../data/latestprods.json";
console.log(LatestProds);

export default function LatestProducts() {
  return (
    <>
      <div className="w-full h-full">
        <div className="flex justify-between items-center mx-12 my-5">
          <h1 className="text-4xl text-black font-bold">Our Best Products</h1>
          <p className="text-sm">
            We have solutions to help you achieve smoother, <br />
            cleaner and more youthful looking skin.
          </p>
        </div>
        {/* <div>
          <div className="grid grid-cols-4 gap-4 mx-12 my-12 relative">
            <div className="card relative">
              <img
                src="https://images.unsplash.com/photo-1609175214983-594001465d18?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className=" h-[18.75rem] w-[18.75rem] rounded-2xl"
              />

              <span class="material-symbols-outlined">arrow_outward</span>
            </div>
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1609175214983-594001465d18?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className=" h-[18.75rem] w-[18.75rem] rounded-2xl"
              />
            </div>
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1609175214983-594001465d18?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className=" h-[18.75rem] w-[18.75rem] rounded-2xl"
              />
            </div>
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1609175214983-594001465d18?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className=" h-[18.75rem] w-[18.75rem] rounded-2xl"
              />
            </div>
          </div>
        </div> */}

        <div className="bestprod">
          <section>
            <div className="product-container">
              <div className="card">
                <div className="card-inner">
                  <div className="box">
                    <div className="imgBox">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1678529870357-8d055638e9d2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Trust & Co."
                      />
                    </div>
                    <div class="icon">
                      <a href="#" class="iconBox">
                        <span class="material-symbols-outlined arrow">
                          arrow_outward
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h3>trust &amp; co.</h3>
                </div>
              </div>
              <div class="card">
            <div class="card-inner">
              <div class="box">
                <div class="imgBox">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1684471006752-51c016b7b51c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Tonic"
                  />
                </div>
                <div class="icon">
                  <a href="#" class="iconBox">
                    <span class="material-symbols-outlined arrow">
                      arrow_outward
                    </span></a
                  >
                </div>
              </div>
            </div>
            <div class="content">
              <h3>tonic</h3>
            </div>
          </div>
          <div class="card">
            <div class="card-inner">
              <div class="box">
                <div class="imgBox">
                  <img
                    src="https://images.unsplash.com/photo-1607006482735-31c122e8cd3d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Shower Gel"
                  />
                </div>
                <div class="icon">
                  <a href="#" class="iconBox">
                    <span class="material-symbols-outlined arrow">
                      arrow_outward
                    </span></a
                  >
                </div>
              </div>
            </div>
            <div class="content">
              <h3>shower gel</h3>
            </div>
          </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

{
  /* <div className='grid grid-cols-3 gap-4'>
    {LatestProds.latprod.map((prod) => {
        return (
            <div>
                <img src={prod.image} alt={prod.name} />
                <h2>{prod.name}</h2>
                <p>{prod.description}</p>
                <button>View Product</button>
            </div>
        )
    })}
</div> */
}
