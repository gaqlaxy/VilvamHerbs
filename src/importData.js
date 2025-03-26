const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
const categoriesData = require("./data/categories.json"); // adjust the path as needed
const productsData = require("./data/products.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function importData() {
  try {
    // Validate categories data
    if (!categoriesData.categories || !Array.isArray(categoriesData.categories)) {
      throw new Error("Invalid categories data format.");
    }

    // Validate products data
    if (!productsData.latprod || !Array.isArray(productsData.latprod)) {
      throw new Error("Invalid products data format.");
    }

    // Import categories
    const categoryBatch = db.batch();
    for (const category of categoriesData.categories) {
      if (!category.id || !category.name) {
        console.warn(`Skipping invalid category: ${JSON.stringify(category)}`);
        continue;
      }
      const categoryRef = db.collection("categories").doc(String(category.id));
      categoryBatch.set(categoryRef, category);
    }
    await categoryBatch.commit();
    console.log("Categories imported successfully!");

    // Import products
    const productBatch = db.batch();
    for (const product of productsData.latprod) {
      if (!product.id || !product.name) {
        console.warn(`Skipping invalid product: ${JSON.stringify(product)}`);
        continue;
      }
      const productRef = db.collection("products").doc(String(product.id));
      productBatch.set(productRef, product);
    }
    await productBatch.commit();
    console.log("Products imported successfully!");
  } catch (error) {
    console.error("Error importing data: ", error);
  } finally {
    process.exit(0); // Ensure the script exits after completion
  }
}

importData();