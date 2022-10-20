import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "../Loader/Loader";

const HomePage = lazy(() => import("../../pages/HomePage"));
const BookPage = lazy(() => import("../../pages/BookPage"));
const MenuPage = lazy(() => import("../../pages/MenuPage"));
const DeliveryPage = lazy(() => import("../../pages/DeliveryPage"));
const GiftVouchersPage = lazy(() => import("../../pages/GiftVouchersPage"));
const WhatsOnPage = lazy(() => import("../../pages/WhatsOnPage"));
const FoundersPage = lazy(() => import("../../pages/FoundersPage"));
const PrivacyPolicyPage = lazy(() => import("../../pages/PrivacyPolicyPage"));
const PublicOfferPage = lazy(() => import("../../pages/PublicOfferPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));
const GroundPage = lazy(() => import("../../pages/GroundPage"));
const AbovePage = lazy(() => import("../../pages/AbovePage"));
const RedRoomPage = lazy(() => import("../../pages/RedRoomPage"));
const EventPage = lazy(() => import("../../pages/EventPage"));
const BasketPage = lazy(() => import("../../pages/BasketPage"));
const CheckoutPage = lazy(() => import("../../pages/CheckoutPage"));

export default function UserRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/gift-vouchers" element={<GiftVouchersPage />} />
        <Route path="/whats-on" element={<WhatsOnPage />}>
          <Route path="event" element={<EventPage />} />
        </Route>
        <Route path="/founders" element={<FoundersPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/public-offer" element={<PublicOfferPage />} />
        <Route path="/ground" element={<GroundPage />} />
        <Route path="/above" element={<AbovePage />} />
        <Route path="/redroom" element={<RedRoomPage />} />
        <Route path="/basket" element={<BasketPage />}>
          <Route path="delivery" element={<DeliveryPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
