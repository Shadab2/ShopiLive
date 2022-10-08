import React from "react";
const Error = () => {
  return (
    <div style={{ backgroundColor: "white", height: "100vh" }}>
      <div
        style={{
          margin: "0 auto",
          width: "90%",
        }}
      >
        <div style={{ padding: "2rem 0", marginBottom: "5rem" }}>
          <h3
            style={{
              fontFamily: "sans-serif",
              fontSize: "1.25rem",
              letterSpacing: "-0.08rem",
            }}
          >
            404 Not Found
          </h3>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div style={{ width: "50%" }}>
            <img
              src="/images/scarecrow.png"
              alt="not found"
              style={{ height: "100%" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <h1
              style={{
                fontWeight: "bolder",
                letterSpacing: "0.035em",

                fontSize: "3.5rem",
                fontFamily: "monospace",
              }}
            >
              404
            </h1>
            <h1
              style={{
                fontWeight: "bolder",
                letterSpacing: "0.035em",
                fontFamily: "monospace",
                fontSize: "3.5rem",
              }}
            >
              Page Not Found!
            </h1>

            <h6
              style={{
                display: "block",
                fontFamily: "sans-serif",
                width: "50%",
                fontStyle: "normal",
                fontWeight: "300",
                lineHeight: "2.4rem",
                fontSize: "1rem",
                color: "#333",
              }}
            >
              The page you are looking for might be removed or is temporary
              unavailable
            </h6>
            <div>
              <button
                style={{
                  color: "white",
                  textTransform: "capitalize",
                  backgroundColor: "black",
                  fontFamily: "sans-serif",
                  borderRadius: "3rem",
                  fontSize: "1rem",
                  padding: "1rem 1.2rem",
                }}
              >
                back to homepage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
