import { MantineProvider } from "@mantine/core";
import LoginCard from "../../components/login-card/LoginCard";
import logo from "../../assets/logo.svg";
import "./Login.scoped.css";

const Login = () => {
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
          minHeight: "100vh", //
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
            width: "380px",
            height: "380px",
            top: "-120px",
            left: "145%",
            backgroundColor: "#52489C",
            borderRadius: "50%",
            position: "absolute",
            overflow: "hidden",
          }}
        ></div>

        {/* Ellipse 2 */}
        <div
          style={{
            width: "254px",
            height: "254px",
            top: "90px",
            left: "175%",
            backgroundColor: "#4062BB",
            borderRadius: "50%",
            position: "absolute",
            zIndex: 2, // Set z-index to 2 to place it in front of Ellipse 1
            overflow: "hidden",
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
