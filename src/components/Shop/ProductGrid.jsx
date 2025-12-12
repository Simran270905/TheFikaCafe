import ProductCard from "./ProductCard";

// Import all product images
import Kenya from "../../assets/products/Kenya.jpg";
import California from "../../assets/products/California.jpg";
import Guatemala from "../../assets/products/Guatemala.jpg";
import Indonesia from "../../assets/products/Indonesia.jpg";
import Blend01 from "../../assets/products/Blend01.jpg";
import Blend02 from "../../assets/products/Blend02.jpeg";
import Blend03 from "../../assets/products/Blend03.jpeg";
import Blend04 from "../../assets/products/Blend04.jpg";

export default function ProductGrid() {
  const products = [
    { img: Kenya, name: "I'm a product", price: "₹15.00", badge: "Best Seller" },
    { img: California, name: "I'm a product", price: "₹15.00" },
    { img: Guatemala, name: "I'm a product", price: "₹15.00" },
    { img: Indonesia, name: "I'm a product", price: "₹14.25", oldPrice: "₹15.00", badge: "On Sale" },
    { img: Blend01, name: "I'm a product", price: "₹15.00" },
    { img: Blend02, name: "I'm a product", price: "₹15.00", badge: "Best Seller" },
    { img: Blend03, name: "I'm a product", price: "₹15.00" },
    { img: Blend04, name: "I'm a product", price: "₹14.25", oldPrice: "₹15.00", badge: "On Sale" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-20">
      {products.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
  );
}
