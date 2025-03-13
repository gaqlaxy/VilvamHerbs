import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="mx-5 my-5 justify-around flex items-center">
        <div className="flex justify-center flex-col">
          <img src="vilvam.jpg" className="w-20 mx-5" alt="" />
          <p>
            Copyright &copy; 2025 Vilvam Herbs. <br /> All rights reserved
          </p>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            <li>Products</li>
            <li>Benefits</li>
            <li>About</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            <li>Best Sellers</li>
            <li>Vivlam Soap</li>
            <li>Facewash</li>
            <li>Chemical</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            <li>Support</li>
            <li>FAQs</li>
            <li>Get in Touch</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Contact Us</li>
            <li>+91 1234567890</li>
            <li>Q3YkD@example.com</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Address</li>
            <li>123, 1st Floor, ABC Street</li>
            <li>XYZ City, State, Country</li>
            <li>Pincode: 123456</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
