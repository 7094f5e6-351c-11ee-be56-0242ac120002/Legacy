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
        }}
      >
        <LoginCard />
        <div>
          <div
            style={{
              position: "absolute",
              top: "60px",
              right: "160px",
              width: "50px",
              height: "auto",
              zIndex: 1,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img alt="logo" src={logo} />
            <div
              style={{
                fontSize: "25px",
                fontWeight: "500",
                fontFamily: "Lexend Giga",
              }}
            >
              Taskify
            </div>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
};

export default Login;
