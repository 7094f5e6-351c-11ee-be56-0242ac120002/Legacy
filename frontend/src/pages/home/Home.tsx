import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is a basic example of a React home page component.</p>
      <Button onClick={() => navigate("/login")}>
        {" "}
        Click here for a login page
      </Button>
    </div>
  );
}

export default Home;
