import { Card, Text, Button, Input, CardSection } from "@mantine/core";
import { IconMail } from "@tabler/icons-react";
import { IconKey } from "@tabler/icons-react";

function LoginCard() {
  return (
    <Card
      bg={"none"}
      shadow="sm"
      padding="md"
      radius="md"
      style={{
        width: "57%",
        gap: "60px",
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
        >
          Nice to see <span style={{ color: "#59C3C3" }}>you</span> again!
        </Text>
      </Card.Section>

      <CardSection style={{ marginTop: "40px" }}>
        <Input
          icon={<IconMail style={{ paddingLeft: "10px" }} />}
          placeholder="Enter your email"
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
          }}
          h={"35px"}
          p={"4px"}
        />
        <Input
          icon={<IconKey style={{ paddingLeft: "10px" }} />}
          placeholder="Enter your password"
          variant="unstyled"
          style={{
            backgroundColor: "rgba(0,0,0,76)",
            alignItems: "center",
            borderRadius: "10px",
            color: "#9A9A9A",
            borderColor: "#9A9A9A",
            border: "1.7px solid",
            paddingLeft: "30px",
          }}
          h={"35px"}
          p={"4px"}
        />
      </CardSection>

      <CardSection>
        <Button
          bg={"#59C3C3"}
          color="cyan"
          radius="xl"
          size="lg"
          w={"100%"}
          mt={"10%"}
        >
          Sign in
        </Button>
        <Button
          variant="outline"
          color="cyan"
          radius="xl"
          size="lg"
          w={"100%"}
          mt={"5%"}
        >
          Sign up
        </Button>
        <Button
          variant="subtle"
          color="gray"
          radius="xl"
          size="md"
          mt={"4%"}
          p={"0"}
          style={{ textDecoration: "underline" }}
        >
          Forgot your password?
        </Button>
      </CardSection>
    </Card>
  );
}
export default LoginCard;
