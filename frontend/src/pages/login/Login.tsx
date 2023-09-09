import { MantineProvider } from "@mantine/core";
import LoginCard from "../../components/login-card/LoginCard";
import logo from "../../assets/logo.svg";

const Login = () => {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Montserrat",
        colors: {
          background: ["#141126"], // Define your custom background color here
        },
      }}
    >
      <div
        style={{
          backgroundColor: "var(--colors-background)", // Use the custom background color from the theme
          minHeight: "100vh", // Set a minimum height for the page
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoginCard />
        <div className="">
          <div className="">
            <img alt="logo" src={logo} className="" />
            <div className="">Taskify</div>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
};

export default Login;
