import { Card, Button, Text } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import { IconUsersGroup } from "@tabler/icons-react";
import { useHover } from "@mantine/hooks";
import { useState } from "react";
import colors from "../../style/colors";
import textStyles from "../../style/textStyles";

enum BoardSelection {
  Personal,
  Team,
  NoneSelected,
}

function BoardSelectionDialog() {
  const [selectedOption, setSelectedOption] = useState<BoardSelection>(
    BoardSelection.NoneSelected
  );

  const handleButtonClick = (option: BoardSelection) => {
    setSelectedOption(option);
  };

  const { hovered, ref } = useHover();

  return (
    <div style={{ marginBottom: "20%" }}>
      <Card
        ref={ref}
        shadow="sm"
        padding="lg"
        radius="md"
        c={colors.white}
        mb={"auto"}
        display={"flex"}
        bg={"none"}
        w={"482px"}
        h={"220px"}
        style={{ flexDirection: "row", gap: "66px" }}
      >
        <Button
          onClick={() => handleButtonClick(BoardSelection.Personal)}
          p={"0"}
          w={"180px"}
          h={"198px"}
          bg={
            selectedOption === BoardSelection.Personal
              ? colors.primaryGradient
              : "none"
          }
          style={{
            border: hovered ? "0px" : "0px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <div style={{ height: "80%" }}>
              <IconUser
                width={"130px"}
                height={"145px"}
                stroke-width="1.4"
                color={
                  selectedOption === BoardSelection.Personal
                    ? colors.white
                    : colors.cyan
                }
              />
            </div>
            <Text mt={"6px"} styles={textStyles.defaultButtonText}>
              Just me
            </Text>
          </div>
        </Button>
        <Button
          onClick={() => handleButtonClick(BoardSelection.Team)}
          p={"0"}
          w={"180px"}
          h={"198px"}
          bg={
            selectedOption === BoardSelection.Team
              ? colors.primaryGradient
              : "none"
          }
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <div style={{ height: "80%" }}>
              <IconUsersGroup
                width={"130px"}
                height={"145px"}
                stroke-width="1.4"
                color={
                  selectedOption === BoardSelection.Team
                    ? colors.white
                    : colors.cyan
                }
              />
            </div>
            <Text mt={"6px"} styles={textStyles.defaultButtonText}>
              Me & my team
            </Text>
          </div>
        </Button>
      </Card>
    </div>
  );
}

export default BoardSelectionDialog;
