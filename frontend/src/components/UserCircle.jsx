import React, { useState } from "react";

function UserCircle() {
  const [showInfo, setShowInfo] = useState(false);

  // 
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return null; // 

  
  const initials = user.name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Circle with initials */}
      <div
        onClick={() => setShowInfo(!showInfo)}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          width: 40,
          height: 40,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          cursor: "pointer",
          userSelect: "none",
          fontSize: 16,
        }}
        title="Click to show/hide info"
      >
        {initials}
      </div>

      {/* */}
      {showInfo && (
        <div
          style={{
            position: "absolute",
            top: 50,
            right: 0,
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: 5,
            padding: "10px",
            width: 200,
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            zIndex: 1000,
          }}
        >
          <p style={{ margin: 0, fontWeight: "bold" }}>{user.name}</p>
          <p style={{ margin: 0 }}>{user.email}</p>
          <p style={{ margin: 0 }}>{user.college}</p>
        </div>
      )}
    </div>
  );
}

export default UserCircle;
