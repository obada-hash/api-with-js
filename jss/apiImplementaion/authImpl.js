

import { register, login, logout } from "../connectapi/auth.js"

const registerData = {
    email: "user@example.com",
    password: "password123",
    role: "HOTEL", // تأكد أنها تطابق الـ Enum تماماً
    hotelName: "My Hotel",
    address: "Some Address",
    contactPhone: "12345678"
};

const loginData = {
     email: "user@example.com",
     password: "password123"
};
const insertfood = {
  email: "test@test.com",
  password: "123456"
};

// register(registerData)
login(loginData)
.then(res => {
  console.log(res);
  alert("Login successful");
})
.catch(err => {
  alert(err.message);
});

register(registerData)
    .then(res => {
      // res = ApiResponse
      console.log("Register success:", res);
      alert(res.message);
    })
    .catch(err => {
      alert(err.message);
});

// logout()
//     .then(() => {
//       alert("Logged out");
//       window.location.href = "/login.html"; // put you on login page
//     })
//     .catch(err => {
//       alert(err.message);
// });

console.log('hello')