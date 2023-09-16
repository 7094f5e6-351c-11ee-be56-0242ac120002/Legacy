import { Card, Button, Text } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import { IconUsersGroup } from "@tabler/icons-react";
import { useHover } from "@mantine/hooks";
import { useState } from "react";

function MantineDialog() {
  const [button1Clicked, setButton1Clicked] = useState(false);
  const [button2Clicked, setButton2Clicked] = useState(false);

  const handleButton1Click = () => {
    setButton1Clicked(!button1Clicked);
    setButton2Clicked(false);
  };

  const handleButton2Click = () => {
    setButton2Clicked(!button2Clicked);
    setButton1Clicked(false);
  };

  const { hovered, ref } = useHover();
  return (
    <div style={{ marginBottom: "20%" }}>
      <Card
        ref={ref}
        shadow="sm"
        padding="lg"
        radius="md"
        c={"white"}
        mb={"auto"}
        display={"flex"}
        bg={"none"}
        w={"482px"}
        h={"220px"}
        style={{ flexDirection: "row", gap: "66px" }}
      >
        <Button
          onClick={() => handleButton1Click()}
          p={"0"}
          w={"180px"}
          h={"198px"}
          bg={
            button1Clicked
              ? "linear-gradient(106.66deg, #59C3C3 4.7%, #4062BB 149.64%)"
              : "none"
          }
          style={{
            border: hovered ? "0px" : "0px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ height: "80%" }}>
              <IconUser
                width={"130px"}
                height={"145px"}
                stroke-width="1.4"
                color={button1Clicked ? "white" : "#59C3C3"}
              />
            </div>
            <Text
              mt={"6px"}
              style={{
                textAlign: "center",
                fontFamily: "Montserrat",
                fontSize: "20px",
                letterSpacing: "-7%",
                fontWeight: "700",
                lineHeight: "30px",
              }}
            >
              Just me
            </Text>
          </div>
        </Button>
        <Button
          onClick={() => handleButton2Click()}
          p={"0"}
          w={"180px"}
          h={"198px"}
          bg={
            button2Clicked
              ? "linear-gradient(106.66deg, #59C3C3 4.7%, #4062BB 149.64%)"
              : "none"
          }
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ height: "80%" }}>
              <IconUsersGroup
                width={"130px"}
                height={"145px"}
                stroke-width="1.4"
                color={button2Clicked ? "white" : "#59C3C3"}
              />
            </div>
            <Text
              mt={"6px"}
              style={{
                textAlign: "center",
                fontFamily: "Montserrat",
                fontSize: "20px",
                letterSpacing: "-7%",
                fontWeight: "700",
                lineHeight: "30px",
              }}
            >
              Me & my team
            </Text>
          </div>
        </Button>
      </Card>
    </div>
  );
}

export default MantineDialog;
