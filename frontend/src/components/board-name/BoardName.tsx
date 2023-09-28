import { MantineProvider, Button, Input } from "@mantine/core";
import logo from "../../assets/logo.svg";
import TextHighlight from "../text-highlight/TextHighlight";
import colors from "../../style/colors";
import { ReducerAction } from "../../pages/register/Register";
import { useState } from "react";

type BoardNameProps =
  React.Dispatch{
    type: ReducerAction;
    data: {
        workspaceName: string | null;
    };



  function BoardName({ handleNextStep }:{handleNextStep: BoardNameProps}) {

  const [workspaceName, setWorkspaceName] = useState("");

  return (
    <MantineProvider
      theme={{
        fontFamily: "Montserrat",
        colors: {
          background: ["#141126"],
        },
      }}
    >
      {" "}
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
              color: "white",
              zIndex: "2",
            }}
          >
            Now let's name your first{" "}
            <TextHighlight color={colors.cyan}>Workspace</TextHighlight>
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
            <div>
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
            </div>
            <div>
              {" "}
              <div
                style={{
                  marginBottom: "8%",
                  marginLeft: "70%",
                  marginTop: "300%",
                }}
              >
                <Button
                  bg={colors.cyan}
                  c={colors.white}
                  size="lg"
                  z-Index="2"
                  onClick={() => handleNextStep({type:ReducerAction.Next, data: {workspaceName} })}
                >
                  Finish
                </Button>
              </div>
            </div>
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}
