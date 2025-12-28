import { apiFetch, resolveJson } from "./api.js";

/* ---------------- POST /api/orders/reserve ---------------- */
export function reserveFood(reserveRequest) {
  return apiFetch(`/orders/reserve`, {
    method: "POST",
    body: JSON.stringify(reserveRequest)
  });
}

/* ---------------- GET /api/orders/{id} ---------------- */
export function getOrderById(id) {
  return apiFetch(`/orders/${id}`);
}

/* ---------------- GET /api/orders/charity/{charityId} ---------------- */
export function getOrdersByCharity(charityId) {
  return apiFetch(`/orders/charity/${charityId}`);
}

/* ---------------- GET /api/orders/charity/{charityId}/status/{status} ---------------- */
export function getOrdersByCharityAndStatus(charityId, status) {
  return apiFetch(`/orders/charity/${charityId}/status/${status}`);
}

/* ---------------- GET /api/orders/charity/{charityId}/upcoming ---------------- */
export function getUpcomingPickupsByCharity(charityId) {
  return apiFetch(`/orders/charity/${charityId}/upcoming`);
}

/* ---------------- GET /api/orders/hotel/{hotelId} ---------------- */
export function getOrdersByHotel(hotelId) {
  return apiFetch(`/orders/hotel/${hotelId}`);
}

/* ---------------- GET /api/orders/hotel/{hotelId}/status/{status} ---------------- */
export function getOrdersByHotelAndStatus(hotelId, status) {
  return apiFetch(`/orders/hotel/${hotelId}/status/${status}`);
}

/* ---------------- GET /api/orders/hotel/{hotelId}/upcoming ---------------- */
export function getUpcomingPickupsByHotel(hotelId) {
  return apiFetch(`/orders/hotel/${hotelId}/upcoming`);
}

/* ---------------- PUT /api/orders/{id} ---------------- */
export function updateOrder(id, updateRequest) {
  return apiFetch(`/orders/${id}`, {
    method: "PUT",
    body: JSON.stringify(updateRequest)
  });
}

/* ---------------- PATCH /api/orders/{id}/pickup ---------------- */
export function markOrderAsPickedUp(id) {
  return apiFetch(`/orders/${id}/pickup`, {
    method: "PATCH"
  });
}

/* ---------------- DELETE /api/orders/{id} ---------------- */
export function cancelOrder(id) {
  return apiFetch(`/orders/${id}`, {
    method: "DELETE"
  });
}

/* ---------------- PATCH /api/orders/{id}/status?status= ---------------- */
export function updateOrderStatus(id, status) {
  return apiFetch(`/orders/${id}/status?status=${status}`, {
    method: "PATCH"
  });
}
