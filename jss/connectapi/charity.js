import { apiFetch, resolveJson } from "./api.js";

/* ---------------- GET /api/charities/{id} ---------------- */
export function getCharityById(id) {
  return apiFetch(`/charities/${id}`);
}

/* ---------------- GET /api/charities/user/{userId} ---------------- */
export function getCharityByUserId(userId) {
  return apiFetch(`/charities/user/${userId}`);
}

/* ---------------- GET /api/charities ---------------- */
export function getAllCharities() {
  return apiFetch(`/charities`);
}

/* ---------------- PUT /api/charities/{id} ---------------- */
export function updateCharity(id, charityRequest) {
  return apiFetch(`/charities/${id}`, {
    method: "PUT",
    body: JSON.stringify(charityRequest)
  });
}

/* ---------------- DELETE /api/charities/{id} ---------------- */
export function deleteCharity(id) {
  return apiFetch(`/charities/${id}`, {
    method: "DELETE"
  });
}

/* ---------------- GET /api/charities/search?name=&address= ---------------- */
export function searchCharities({ name = "", address = "" } = {}) {
  const params = new URLSearchParams();
  if (name) params.append("name", name);
  if (address) params.append("address", address);

  return apiFetch(`/charities/search?${params.toString()}`);
}
