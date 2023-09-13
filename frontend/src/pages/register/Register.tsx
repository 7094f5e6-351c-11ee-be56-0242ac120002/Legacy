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
            padding: "5%",
            margin: "5%",
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
            height: "auto",
            zIndex: 1,
            display: "flex",
            justifyContent: "right",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <RegisterCard />
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
            }}
          ></div>
        </div>
      </div>
    </MantineProvider>
  );
};

export default Login;
