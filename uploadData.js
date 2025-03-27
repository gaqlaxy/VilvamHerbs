import { db } from "./src/firebase.js";
import { collection, addDoc } from "firebase/firestore";

// ✅ Add 'assert { type: "json" }' when importing JSON files
import { readFileSync } from "fs";

const categoriesData = JSON.parse(
    readFileSync("./src/data/categories.json", "utf8")
);

console.log("categoriesData:", categoriesData);



// Upload categories
const uploadCategories = async () => {
    const categoriesRef = collection(db, "categories");
    for (const category of categoriesData) {
        await addDoc(categoriesRef, category);
    }
    console.log("Categories uploaded!");
};

// Upload products
const uploadProducts = async () => {
    const productsRef = collection(db, "products");
    for (const product of productsData) {
        await addDoc(productsRef, product);
    }
    console.log("Products uploaded!");
};

// Run uploads
uploadCategories();
uploadProducts();
