const BASE_URL = "http://localhost:5000/api";
  import { toast } from "react-toastify"; 
export const loginUser = async (userData: {
  email: string;
  password: string;
}) => {
  const response = await fetch(
    `${BASE_URL}/users/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );


if (response.status === 429) {
  toast.warning("Too many login attempts. Please try again after 15 minutes.");
  throw new Error("Too Many Requests");
}

  const data = await response.json();

  return {
    ok: response.ok,
    data,
  };
};