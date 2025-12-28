import { apiFetch, resolveJson } from "./api.js";

/* ---------------- GET /api/hotels/{id} ---------------- */
export function getHotelById(id) {
  return apiFetch(`/hotels/${id}`);
}

/* ---------------- GET /api/hotels/user/{userId} ---------------- */
export function getHotelByUserId(userId) {
  return apiFetch(`/hotels/user/${userId}`);
}

/* ---------------- GET /api/hotels ---------------- */
export function getAllHotels() {
  return apiFetch(`/hotels`);
}

/* ---------------- PUT /api/hotels/{id} ---------------- */
export function updateHotel(id, hotelRequest) {
  return apiFetch(`/hotels/${id}`, {
    method: "PUT",
    body: JSON.stringify(hotelRequest)
  });
}

/* ---------------- DELETE /api/hotels/{id} ---------------- */
export function deleteHotel(id) {
  return apiFetch(`/hotels/${id}`, {
    method: "DELETE"
  });
}

/* ---------------- GET /api/hotels/search?name=&address= ---------------- */
export function searchHotels({ name = "", address = "" } = {}) {
  const params = new URLSearchParams();
  if (name) params.append("name", name);
  if (address) params.append("address", address);

  return apiFetch(`/hotels/search?${params.toString()}`);
}
