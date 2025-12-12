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
    { img: Kenya, name: "Coffee", price: "₹750.00"  },
    { img: California, name: "Coffee Brunch", price: "₹1500.00",badge: "Best Seller" },
    { img: Guatemala, name: "Cookie Love", price: "₹1000.00" },
    { img: Indonesia, name: "Korean Specials", price: "₹1225.00", oldPrice: "₹1500.00", badge: "On Sale" },
    { img: Blend01, name: "Monalisa's Cup", price: "₹1500.00" },
    { img: Blend02, name: "Aromatic", price: "₹1800.00", badge: "Best Seller" },
    { img: Blend03, name: "Fresh Roasted", price: "₹1999.00" },
    { img: Blend04, name: "Milk n Coffee", price: "₹1000.25", oldPrice: "₹1335.00", badge: "On Sale" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-20">
      {products.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
  );
}
