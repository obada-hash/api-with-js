const BASE_URL = "http://localhost:8085/api";

/* ---------------- REGISTER ---------------- */
export async function register(registerData) {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(registerData)
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Register failed");
  }

  return data;
}

/* ---------------- LOGIN ---------------- */
export async function login(loginData) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginData)
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Login failed");
  }

  // خزّن التوكن
  localStorage.setItem("token", data.token);

  // (اختياري) خزّن بيانات المستخدم
  localStorage.setItem("user", JSON.stringify({
    id: data.id,
    email: data.email,
    roles: data.roles
  }));

  return data;
}

/* ---------------- LOGOUT ---------------- */
export async function logout() {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/auth/logout`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  // حذف التوكن محليًا
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || "Logout failed");
  }

  return true;
}
