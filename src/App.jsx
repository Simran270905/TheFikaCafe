import { Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage.jsx";
import ShopPage from "../src/pages/ShopPage.jsx";
import SubscriptionPage from "../src/pages/SubscriptionPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/subscription" element={<SubscriptionPage />} />
    </Routes>
  );
}
