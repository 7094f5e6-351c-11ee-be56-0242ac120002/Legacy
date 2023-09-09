import { Card, Text, Button, Input, CardSection } from "@mantine/core";
import mail from "../../assets/mail.svg";

function LoginCard() {
  return (
    <Card
      bg={"none"}
      shadow="sm"
      padding="md"
      radius="md"
      style={{
        width: "50%",
      }}
    >
      <Card.Section>
        <Text
          style={{
            fontSize: "80px",
            fontWeight: "700",
            lineHeight: "80px",
            letterSpacing: "-7px",
            textAlign: "center",
          }}
          c={"white"}
        >
          Nice to see <span style={{ color: "#59C3C3" }}>you</span> again!
        </Text>
      </Card.Section>

      <CardSection>
        <Input icon={<img src={mail} />} placeholder="Enter your email" />
        <Input></Input>
      </CardSection>

      <Text size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
}
export default LoginCard;
