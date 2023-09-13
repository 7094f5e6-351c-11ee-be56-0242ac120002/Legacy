import { Card, Button, Text, Input, CardSection } from "@mantine/core";
import { IconMail } from "@tabler/icons-react";
import { IconKey } from "@tabler/icons-react";
import { IconUserCircle } from "@tabler/icons-react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setEmail("");
    setPassword("");
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("token", `Bearer ${token}`);

        navigate("/");
      }
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  return (
    <Card
      bg={"none"}
      shadow="sm"
      padding="md"
      radius="md"
      style={{
        width: "57%",
        gap: "60px",
        justifyContent: "center",
      }}
    >
      <CardSection style={{ marginTop: "40px" }}>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon={<IconUserCircle style={{ paddingLeft: "10px" }} />}
          placeholder="Enter your full name"
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
            width: "90%",
          }}
          h={"35px"}
          p={"4px"}
          styles={{
            input: {
              color: "white",
            },
          }}
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
            width: "90%",
          }}
          h={"35px"}
          p={"4px"}
          styles={{
            input: {
              color: "white",
            },
          }}
        />
        <Input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
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
            width: "90%",
          }}
          h={"35px"}
          p={"4px"}
          styles={{
            input: {
              color: "white",
            },
          }}
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
          onClick={handleLogin}
        >
          <Text style={{ textAlign: "center" }}>Continue</Text>
        </Button>
      </CardSection>
    </Card>
  );
}
export default LoginCard;
