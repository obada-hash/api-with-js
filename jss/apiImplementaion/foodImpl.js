import {
  createFood,
  getFoodById,
  getAvailableFood,
  getRecentFood,
  getFoodByHotelId,
  getFoodByHotelIdAndStatus,
  searchFood,
  updateFood,
  deleteFood,
  updateFoodStatus
} from "../connectapi/food.js";

/* ---------------- CREATE FOOD ---------------- */
createFood(
  {
    name: "Rice Meal",
    quantity: 20,
    description: "Fresh cooked rice",
    pickupTime: "2025-01-01T18:00"
  },
  1 // hotelId
).then(res => {
  console.log("Create food:", res);
});

// /* ---------------- GET FOOD BY ID ---------------- */
// getFoodById(5).then(res => {
//   console.log("Food by id:", res.data);
// });

// /* ---------------- GET AVAILABLE FOOD ---------------- */
// getAvailableFood().then(res => {
//   console.log("Available food list:", res.data);
// });

// /* ---------------- GET RECENT FOOD ---------------- */
// getRecentFood().then(res => {
//   console.log("Recent food:", res.data);
// });

// /* ---------------- GET HOTEL FOOD ---------------- */
// getFoodByHotelId(1).then(res => {
//   console.log("Hotel food:", res.data);
// });

// /* ---------------- GET HOTEL FOOD BY STATUS ---------------- */
// getFoodByHotelIdAndStatus(1, "AVAILABLE").then(res => {
//   console.log("Hotel food AVAILABLE:", res.data);
// });

// /* ---------------- SEARCH FOOD ---------------- */
// searchFood("rice").then(res => {
//   console.log("Search result:", res.data);
// });

// /* ---------------- UPDATE FOOD ---------------- */
// updateFood(5, {
//   name: "Updated Meal",
//   quantity: 15,
//   description: "Updated description",
//   pickupTime: "2025-01-02T19:00"
// }).then(res => {
//   console.log("Updated food:", res.data);
// });

// /* ---------------- UPDATE FOOD STATUS ---------------- */
// updateFoodStatus(5, "RESERVED").then(res => {
//   console.log("Status updated:", res.data);
// });

// /* ---------------- DELETE FOOD ---------------- */
// deleteFood(5).then(res => {
//   console.log("Food deleted:", res.message);
// });
