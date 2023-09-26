import { Button, Input, MantineProvider } from "@mantine/core";
import RegisterCard from "../../components/register-card/RegisterCard";
import logo from "../../assets/logo.svg";
import "./Register.scoped.css";
import { useState } from "react";

const Register = () => {
  enum RegisterStep {
    BasicInfo,
    Usage,
    BoardName,
  }
  const [workspaceName, setWorkspaceName] = useState<string>("");
  const [step, setStep] = useState<RegisterStep>(RegisterStep.BasicInfo);

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
          {isButtonClicked && isButton2Clicked ? (
            <div
              style={{
                fontSize: "80px",
                fontWeight: "700",
                lineHeight: "90px",
                letterSpacing: "-7px",
                color: "white",
                zIndex: "2",
              }}
            >
              Now let's name your first{" "}
              <span style={{ color: "#59C3C3" }}>Workspace</span>
            </div>
          ) : isButtonClicked ? (
            <div
              style={{
                fontSize: "80px",
                fontWeight: "700",
                lineHeight: "90px",
                letterSpacing: "-7px",
                color: "white",
              }}
            >
              Who is going to use this{" "}
              <span style={{ color: "#59C3C3" }}>account</span>?
            </div>
          ) : (
            <div
              style={{
                fontSize: "80px",
                fontWeight: "700",
                lineHeight: "90px",
                letterSpacing: "-7px",
                color: "white",
              }}
            >
              Can't wait for <span style={{ color: "#59C3C3" }}>you</span> to
              join us!
            </div>
          )}
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
            {isButton2Clicked ? (
              <Input
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
                placeholder="First workspace"
                variant="unstyled"
                style={{
                  backgroundColor: "rgba(0,0,0,76)",
                  alignItems: "center",
                  borderRadius: "10px",
                  color: "#9A9A9A",
                  borderColor: "#9A9A9A",
                  border: "1.7px solid",
                  marginBottom: "10px",
                  paddingLeft: "30px",
                  width: "75%",
                }}
                h={"35px"}
                p={"4px"}
                styles={{
                  input: {
                    color: "white",
                  },
                }}
              />
            ) : (
              <RegisterCard onContinueClick={handleContinueClick} />
            )}
          </div>
          {isButtonClicked && isButton2Clicked ? (
            <div style={{ marginBottom: "8%", marginLeft: "70%" }}>
              <Button
                onClick={handleWrapClick}
                bg={"#59C3C3"}
                c={"white"}
                size="lg"
              >
                Finish
              </Button>
            </div>
          ) : isButtonClicked ? (
            <div>
              {" "}
              <div style={{ marginBottom: "8%", marginLeft: "70%" }}>
                <Button
                  onClick={handleWrapClick}
                  bg={"#59C3C3"}
                  c={"white"}
                  size="lg"
                  z-Index="2"
                >
                  Wrap it up
                </Button>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {isButtonClicked && isButton2Clicked ? (
            <div>
              {" "}
              <div
                style={{
                  width: "380px",
                  height: "380px",
                  backgroundColor: "#52489C",
                  borderRadius: "50%",
                  position: "absolute",
                  overflow: "hidden",
                  transition: "all 1.4s ease-in-out",
                  top: "550px",
                  left: "-850px",
                  zIndex: "-5",
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
                  top: "420px",
                  left: "-930px",
                }}
              ></div>
            </div>
          ) : isButtonClicked ? (
            <div>
              {" "}
              <div
                style={{
                  width: "380px",
                  height: "380px",
                  backgroundColor: "#52489C",
                  borderRadius: "50%",
                  position: "absolute",
                  overflow: "hidden",
                  transition: "all 1.4s ease-in-out",
                  top: "550px",
                  left: "-400px",
                  zIndex: "-5",
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
                  top: "420px",
                  left: "-845px",
                }}
              ></div>
            </div>
          ) : (
            <div>
              {" "}
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
          )}
        </div>
      </div>
    </MantineProvider>
  );
};

export default Register;
