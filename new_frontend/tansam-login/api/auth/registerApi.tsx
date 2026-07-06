const BASE_URL = "http://localhost:5000/api";

export const registerUser = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await fetch(
    `${BASE_URL}/users/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );

  const data = await response.json();

  return {
    ok: response.ok,
    data,
  };
};