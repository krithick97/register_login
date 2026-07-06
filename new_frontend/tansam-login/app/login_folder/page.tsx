"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./login.css";
import { loginUser } from "../../api/auth/loginapi";
import { toast } from "react-toastify";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const result = await loginUser(formData);

      if (result.ok) {

        localStorage.setItem(
          "token",
          result.data.token
        );

        localStorage.setItem(
          "role",
          result.data.role
        );

        toast.success("Login Successful");

        console.log(
          "Login Response:",
          result.data
        );

        setTimeout(() => {

          if (
            result.data.role ===
            "SUPER_ADMIN"
          ) {

            router.push(
              "/dashboard"
            );

          } else {

            router.push(
              "/userdashboard"
            );

          }

        }, 1000);

      }

    } catch (error) {
      console.error(error);
     toast.error("Server Error");
    }


    
  };

  return (
    <div className="login-container">
      <form
        className="login-form"
        onSubmit={handleSubmit}
      >
        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Login
        </button>

        {message && (
          <p className="message">
            {message}
          </p>
        )}

        <p className="register-link">
          Don't have an account?{" "}
          <span
            onClick={() =>
              router.push("/register_folder")
            }
          >
            Register
          </span>
        </p>

      </form>
    </div>
  );
}