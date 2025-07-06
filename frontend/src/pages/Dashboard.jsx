import React from "react";

function Dashboard() {
  
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <p>Please login to see your dashboard.</p>;
  }

  return (
    <div>
      <nav
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            color: "#007bff",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "14px",
            textAlign: "center",
            cursor: "default",
          }}
          title={`${user.name}\n${user.email}\n${user.college}`}
        >
          {user.name
            .split(" ")
            .map((n) => n[0].toUpperCase())
            .join("")}
        </div>
      </nav>

      <div style={{ padding: "20px" }}>
        <h3>Welcome, {user.name}!</h3>
        <p>Email: {user.email}</p>
        <p>College: {user.college}</p>
      </div>
    </div>
  );
}

export default Dashboard;
