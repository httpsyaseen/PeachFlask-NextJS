import { getAllProdcuts } from "@/actions/productActions";
import ProductCard from "@/components/product-card";

async function getProducts() {
  try {
    const response = await fetch("http://localhost:3000/api/products", {
      next: {
        // revalidate: 24 * 60 * 60,
        revalidate: 1,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const { products } = await response.json();

    return products;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

export default async function Page() {
  const data = await getProducts();
  // const { data, error = null } = await getAllProdcuts();

  return (
    <main className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 my-32 justify-center px-4">
        {data.map((product, i) => {
          return (
            <>
              <ProductCard key={i} product={product} />
            </>
          );
        })}
      </div>
    </main>
  );
}
