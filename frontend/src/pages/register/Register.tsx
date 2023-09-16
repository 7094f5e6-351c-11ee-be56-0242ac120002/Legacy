import { MantineProvider } from "@mantine/core";
import RegisterCard from "../../components/register-card/RegisterCard";
import logo from "../../assets/logo.svg";
import "./Register.scoped.css";

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
            width: "50%",
            padding: "3%",
            margin: "8%",
          }}
        >
          <div
            style={{
              fontSize: "80px",
              fontWeight: "700",
              lineHeight: "90px",
              letterSpacing: "-7px",
              color: "hite",
            }}
          >
            Can't wait for <span style={{ color: "#59C3C3" }}>you</span> to join
            us!
          </div>
        </div>
        <div
          style={{
            position: "relative",
            height: "100%",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "row",
              zIndex: "5",
              height: "42px",
              width: "24%",
              top: "-5%",
              paddingRight: "19%",
              marginTop: "5%",
              marginLeft: "auto",
              alignItems: "center",
              marginBottom: "auto",
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
          <div
            style={{
              width: "80%",
              margin: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              verticalAlign: "center",
              zIndex: "0",
              marginBottom: "auto",
            }}
          >
            <RegisterCard />
          </div>
          {/* Ellipse 1 */}
          <div
            style={{
              width: "380px",
              height: "380px",
              backgroundColor: "#52489C",
              borderRadius: "50%",
              position: "absolute",
              overflow: "hidden",
              transition: "all 1.4s ease-in-out",
              top: "320px",
              left: "550px",
              zIndex: "-2",
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
              zIndex: "-1",
              overflow: "hidden",
              transition: "all 1.4s ease-in-out",
              top: "550px",
              left: "380px",
            }}
          ></div>
        </div>
      </div>
    </MantineProvider>
  );
};

export default Login;
