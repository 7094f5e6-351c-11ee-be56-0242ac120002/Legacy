import RegisterCard from "../../components/register-card/RegisterCard";
import { Card, Text } from "@mantine/core";

const Register = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Card.Section>
        <Text
          style={{
            fontSize: "80px",
            fontWeight: "700",
            lineHeight: "90px",
            letterSpacing: "-7px",
          }}
          c={"white"}
          w={"40%"}
          ml={"17%"}
        >
          Can't wait for <span style={{ color: "#59C3C3" }}>you</span> to join
          us!
        </Text>
      </Card.Section>
      <RegisterCard />
    </div>
  );
};

export default Register;
