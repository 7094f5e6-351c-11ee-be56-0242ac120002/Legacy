import { Card, Text, Button, Input, CardSection } from "@mantine/core";
import { IconMail } from "@tabler/icons-react";
import { IconKey } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHover } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { authApi } from "../../apis/auth";
import TextHighlight from "../text-highlight/TextHighlight";
import colors from "../../style/colors";
import inputStyles from "../../style/inputStyles";

function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { hovered, ref } = useHover();
  const handleLogin = async () => {
    try {
      await authApi.login({ email: email, password: password });
      console.log("Login successful");
    } catch (error) {
      //
    }
  };

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? undefined : "Invalid email"),
      password: (value) =>
        value.length >= 6
          ? undefined
          : "Password must be at least 6 characters",
    },
  });

  return (
    <Card
      ref={ref}
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
          Nice to see <TextHighlight color={colors.cyan}>you</TextHighlight>{" "}
          again!
        </Text>
      </Card.Section>

      <CardSection style={{ marginTop: "40px" }}>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={<IconMail style={{ paddingLeft: "10px" }} />}
            placeholder="Enter your email"
            variant="unstyled"
            style={inputStyles.defaultInput}
            styles={{
              input: {
                color: "red",
              },
            }}
            h={"35px"}
            p={"4px"}
          />
          <Input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            icon={<IconKey style={{ paddingLeft: "10px" }} />}
            placeholder="Enter your password"
            variant="unstyled"
            style={inputStyles.defaultInput}
            h={"35px"}
            p={"4px"}
            styles={{
              input: {
                color: "white",
              },
            }}
          />
        </form>
      </CardSection>

      <CardSection>
        <Button
          type="button"
          bg={"#59C3C3"}
          color="cyan"
          radius="xl"
          size="lg"
          w={"100%"}
          mt={"10%"}
          onClick={handleLogin}
        >
          <Text style={{ textAlign: "center" }}>Sign in</Text>
        </Button>
        <Button
          onClick={() => navigate("/register")}
          variant="outline"
          color="cyan"
          radius="xl"
          size="lg"
          w={"100%"}
          mt={"5%"}
        >
          <Text style={{ textAlign: "center" }}>Sign up</Text>
        </Button>
        <Button
          variant="subtle"
          color="gray"
          radius="xl"
          size="md"
          mt={"4%"}
          p={"0"}
          style={{
            textDecoration: "underline",
            backgroundColor: hovered ? "#141126" : "#141126",
            borderColor: hovered ? "#141126" : "#141126",
          }}
        >
          Forgot your password?
        </Button>
      </CardSection>
    </Card>
  );
}
export default LoginCard;
