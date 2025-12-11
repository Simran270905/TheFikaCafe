import SubscriptionCard from "./SubscriptionCard";

// Import all product images
import Kenya from "../../assets/products/Kenya.jpg";
import California from "../../assets/products/California.jpg";
import Guatemala from "../../assets/products/Guatemala.jpg";

export default function SubscriptionGrid() {
  const products = [
    { img: Kenya, name: "Coffee of the Month", price: "$15.00", badge: "Best Seller" },
    { img: California, name: "Coffee Club's Roaster's Pick", price: "$15.00" },
    { img: Guatemala, name: "Coffee Club's Strater Kit", price: "$15.00" },
    
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-20">
      {products.map((p, i) => (
        <SubscriptionCard key={i} {...p} />
      ))}
    </div>
  );
}
