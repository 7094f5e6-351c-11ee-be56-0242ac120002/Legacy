import { MantineProvider } from "@mantine/core";
import LoginCard from "../../components/login-card/LoginCard";
import logo from "../../assets/logo.svg";
import "./Login.scoped.css";
import { useState, useEffect } from "react";

type EllipsePosition = {
  top: string;
  left: string;
};

const Login = () => {
  const [ellipse1Position, setEllipse1Position] = useState<EllipsePosition>({
    top: "-109px",
    left: "47%",
  });
  const [ellipse2Position, setEllipse2Position] = useState<EllipsePosition>({
    top: "85px",
    left: "75%",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setEllipse1Position({
        top: "190px",
        left: "-24%",
      });
      setEllipse2Position({
        top: "100px",
        left: "15%",
      });
    }, 1000);

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
          height: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            backgroundColor: "var(--colors-background)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            width: "100%",
          }}
        >
          <LoginCard />
        </div>
        <div
          style={{
            position: "relative",
            height: "auto",
            zIndex: 1,
            display: "flex",
            justifyContent: "right",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              zIndex: "5",
              height: "42px",
              width: "24%",
              top: "-5%",
              marginRight: "19%",
              marginTop: "5%",
            }}
          >
            <img alt="logo" src={logo} style={{ height: "30px" }} />
            <div
              style={{
                fontSize: "30px",
                fontWeight: "500",
                fontFamily: "Lexend Giga",
                letterSpacing: "-2px",
              }}
            >
              Task<span style={{ color: "#59C3C3" }}>ify</span>
            </div>
          </div>
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
        </div>
      </div>
    </MantineProvider>
  );
};

export default Login;
