import { Card, Button, Text, Input, CardSection } from "@mantine/core";
import { IconMail } from "@tabler/icons-react";
import { IconKey } from "@tabler/icons-react";
import { IconUserCircle } from "@tabler/icons-react";
import { useState } from "react";
import colors from "../../style/colors";
import inputStyles from "../../style/inputStyles";
import { useForm } from "@mantine/form";
import { authApi } from "../../apis/auth";

interface RegisterCardProps {
  handleNextStep: (workspaceName: string | null) => void;
}

function RegisterCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleRegister = async () => {
    setEmail("");
    setPassword("");
    setName("");
    setIsDialogOpen(true);
    try {
      await authApi.register({
        firstName: name,
        lastName: surname,
        email: email,
        password: password,
      });
      console.log("Register successful");
    } catch (error) {
      console.log(error);
    }
  };

  const form = useForm({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
    validate: {
      name: (value) =>
        value.trim() !== "" ? undefined : "First name is required",
      surname: (value) =>
        value.trim() !== "" ? undefined : "Last name is required",
      email: (value) => (/^\S+@\S+$/.test(value) ? undefined : "Invalid email"),
      password: (value) =>
        value.length >= 6
          ? undefined
          : "Password must be at least 6 characters",
    },
  });

  return (
    <div style={{ position: "relative" }}>
      <Card
        bg={"none"}
        shadow="sm"
        padding="md"
        radius="md"
        style={{
          width: "75%",
          gap: "60px",
          justifyContent: "center",
          display: isDialogOpen ? "none" : "block",
        }}
      >
        <CardSection>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              icon={<IconUserCircle style={{ paddingLeft: "10px" }} />}
              placeholder="Enter your first name"
              variant="unstyled"
              style={inputStyles.defaultInput}
              h={"35px"}
              p={"4px"}
              styles={{
                input: {
                  color: colors.white,
                },
              }}
            />
            <Input
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              icon={<IconUserCircle style={{ paddingLeft: "10px" }} />}
              placeholder="Enter your last name"
              variant="unstyled"
              style={inputStyles.defaultInput}
              h={"35px"}
              p={"4px"}
              styles={{
                input: {
                  color: colors.white,
                },
              }}
            />
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<IconMail style={{ paddingLeft: "10px" }} />}
              placeholder="Enter your email"
              variant="unstyled"
              style={inputStyles.defaultInput}
              h={"35px"}
              p={"4px"}
              styles={{
                input: {
                  color: colors.white,
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
              style={inputStyles.defaultInput}
              h={"35px"}
              p={"4px"}
              styles={{
                input: {
                  color: colors.white,
                },
              }}
            />
          </form>
        </CardSection>
        <CardSection>
          <Button
            bg={"#59C3C3"}
            color="cyan"
            radius="xl"
            size="lg"
            w={"100%"}
            mt={"10%"}
            z-Index={"2"}
            onClick={handleRegister}
          >
            <Text style={{ textAlign: "center" }}>Continue</Text>
          </Button>
        </CardSection>
      </Card>
    </div>
  );
}
export default RegisterCard;
