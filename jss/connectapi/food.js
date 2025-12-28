const BASE_URL = "http://localhost:8085/api/foods";

/* ---------------- HELPER ---------------- */
function authHeaders() {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
}

/* ---------------- CREATE FOOD ---------------- */
export function createFood(foodData, hotelId) {
  return fetch(`${BASE_URL}?hotelId=${hotelId}`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(foodData)
  }).then(res => res.json());
}

/* ---------------- GET FOOD BY ID ---------------- */
export function getFoodById(id) {
  return fetch(`${BASE_URL}/${id}`, {
    headers: authHeaders()
  }).then(res => res.json());
}

/* ---------------- GET ALL AVAILABLE FOOD ---------------- */
export function getAvailableFood() {
  return fetch(`${BASE_URL}/available`, {
    headers: authHeaders()
  }).then(res => res.json());
}

/* ---------------- GET RECENT FOOD ---------------- */
export function getRecentFood() {
  return fetch(`${BASE_URL}/recent`, {
    headers: authHeaders()
  }).then(res => res.json());
}

/* ---------------- GET FOOD BY HOTEL ---------------- */
export function getFoodByHotelId(hotelId) {
  return fetch(`${BASE_URL}/hotel/${hotelId}`, {
    headers: authHeaders()
  }).then(res => res.json());
}

/* ---------------- GET FOOD BY HOTEL + STATUS ---------------- */
export function getFoodByHotelIdAndStatus(hotelId, status) {
  return fetch(`${BASE_URL}/hotel/${hotelId}/status/${status}`, {
    headers: authHeaders()
  }).then(res => res.json());
}

/* ---------------- SEARCH FOOD ---------------- */
export function searchFood(keyword) {
  return fetch(`${BASE_URL}/search?keyword=${encodeURIComponent(keyword)}`, {
    headers: authHeaders()
  }).then(res => res.json());
}

/* ---------------- UPDATE FOOD ---------------- */
export function updateFood(id, foodData) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify(foodData)
  }).then(res => res.json());
}

/* ---------------- DELETE FOOD ---------------- */
export function deleteFood(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: authHeaders()
  }).then(res => res.json());
}

/* ---------------- UPDATE FOOD STATUS ---------------- */
export function updateFoodStatus(id, status) {
  return fetch(`${BASE_URL}/${id}/status?status=${status}`, {
    method: "PATCH",
    headers: authHeaders()
  }).then(res => res.json());
}
