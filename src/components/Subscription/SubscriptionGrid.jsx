import SubscriptionCard from "./SubscriptionCard";

// Import all product images
import subscription1 from "../../assets/products/subscription1.jpg";
import subscription2 from "../../assets/products/subscription2.jpg";
import subscription3 from "../../assets/products/subscription3.jfif";

export default function SubscriptionGrid() {
  const products = [
    { img:subscription1, name: "Coffee of the Month", price: "₹1500.00", badge: "Best Seller" },
    { img: subscription2, name: "Coffee Club's Roaster's Pick", price: "₹1500.00" },
    { img: subscription3, name: "Coffee Club's Strater Kit", price: "₹1500.00" },
    
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-20">
      {products.map((p, i) => (
        <SubscriptionCard key={i} {...p} />
      ))}
    </div>
  );
}
