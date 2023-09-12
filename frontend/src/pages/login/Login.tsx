import { MantineProvider } from "@mantine/core";
import LoginCard from "../../components/login-card/LoginCard";
import logo from "../../assets/logo.svg";
import "./Login.scoped.css";
import { useState, useEffect } from "react";

const Login = () => {
  const [ellipse1Position, setEllipse1Position] = useState({
    top: "-120px",
    left: "145%",
  });
  const [ellipse2Position, setEllipse2Position] = useState({
    top: "90px",
    left: "175%",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setEllipse1Position({
        top: "190px",
        left: "90%",
      });
      setEllipse2Position({
        top: "130px",
        left: "130%",
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MantineProvider
      theme={{
        fontFamily: "Montserrat",
        colors: {
          background: ["#141126"],
        },
      }}
    >
      <div
        style={{
          backgroundColor: "var(--colors-background)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Ellipse 1 */}
        <div
          style={{
            top: ellipse1Position.top,
            left: ellipse1Position.left,
            width: "380px",
            height: "380px",
            backgroundColor: "#52489C",
            borderRadius: "50%",
            position: "absolute",
            overflow: "hidden",
            transition: "all 1.4s ease-in-out",
          }}
        ></div>

        {/* Ellipse 2 */}
        <div
          style={{
            width: "254px",
            height: "254px",
            backgroundColor: "#4062BB",
            borderRadius: "50%",
            position: "absolute",
            zIndex: 2,
            overflow: "hidden",
            transition: "all 1.4s ease-in-out",
            top: ellipse2Position.top,
            left: ellipse2Position.left,
          }}
        ></div>
        <LoginCard />
        <div>
          <div
            style={{
              position: "absolute",
              top: "45px",
              right: "-450px",
              width: "35px",
              height: "auto",
              zIndex: 1,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img alt="logo" src={logo} />
            <div
              style={{
                fontSize: "35px",
                fontWeight: "500",
                fontFamily: "Lexend Giga",
                marginLeft: "5px",
                letterSpacing: "-2px",
              }}
            >
              Task<span style={{ color: "#59C3C3" }}>ify</span>
            </div>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
};

export default Login;
