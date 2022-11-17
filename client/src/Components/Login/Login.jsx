import React from "react";
import { Link } from "react-router-dom";
import { lightTheme } from "../../Theme/LightTheme";
import "./login.css";

const Login = () => {
  return (
    <div>
      <div
        className="top "
        style={{
          display: "flex",
          backgroundColor: lightTheme.light,
          justifyContent: "space-between",
          alignItems: "center",
          height: "5rem",
        }}
      >
        <h3 style={{ fontWeight: "bold", margin: "4rem" }}>LOGIN</h3>

        <h3 style={{ fontWeight: "bold", marginRight: "4rem" }}>
          <Link to="/"> HOME /</Link>
          LOGIN
        </h3>
      </div>

      <div
        className="container"
        style={{
          display: "flex",
          boxSizing: "border-box",
          padding: "4rem",
          justifyContent: "space-around",
        }}
      >
        <div style={{ boxSizing: "border-box", width: "100vw" }}>
          <div>
            <h3
              style={{
                padding: "1rem",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              LOGIN
            </h3>

            <div
              className="theme-card "
              style={{
                borderWidth: "0.0125rem",
                borderStyle: "solid",
                margin: "1rem",
                padding: "3rem",
              }}
            >
              <div className="form-group mb-3">
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    fontFamily: "monospace",
                    color: lightTheme.dark,
                  }}
                >
                  Email
                  <div
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="email"
                    style={{
                      padding: "0.5rem",
                      borderWidth: "0.0125rem",
                      fontWeight: "normal",
                    }}
                  >
                    <input type="email" placeholder="Email" />
                  </div>
                </label>
              </div>

              <div className="form-group " style={{ fontWeight: "normal" }}>
                <label htmlFor="password" className="form-label">
                  <h3
                    style={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                      fontFamily: "monospace",
                      padding: "0.5rem",
                      color: lightTheme.dark,
                    }}
                  >
                    Password
                  </h3>

                  <div
                    style={{
                      borderWidth: "0.0125rem",

                      padding: "0.5rem",
                    }}
                  >
                    <input placeholder="Enter your password" type="password" />
                  </div>
                </label>
              </div>

              <Link
                to="/"
                className="btn btn-solid"
                style={{
                  backgroundColor: lightTheme.main,
                  color: "white",
                  display: "inline-block",
                  padding: "0.5rem",
                  width: "8rem",
                  fontWeight: "bold",
                }}
              >
                LOGIN
              </Link>
            </div>
          </div>
        </div>
        <div
          style={{
            boxSizing: "border-box",
            width: "100vw",
            border: "2rem",
          }}
        >
          <h2
            style={{
              padding: "1.5rem",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            NEW CUSTOMER
          </h2>

          <div
            style={{
              borderWidth: "0.03rem",
              borderStyle: "solid",
              padding: "2rem",
            }}
          >
            <h2
              style={{
                margin: " 2rem 1rem",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              CREATE AN ACCOUNT
            </h2>
            <p
              style={{
                fontWeight: "lighter",
                fontFamily: "sans-serif",
                color: lightTheme.secondary,

                margin: "1rem",
              }}
            >
              Sign up for a free account at our store. Registration is quick and
              easy. It allows you to be able to order from our shop. To start
              shopping click register.
            </p>

            <div style={{ padding: "2rem" }}>
              <Link
                to="/"
                className="btn btn-solid "
                style={{
                  backgroundColor: lightTheme.main,
                  padding: "1rem",
                  margin: "-1rem",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                CREATE AN ACCOUNT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
