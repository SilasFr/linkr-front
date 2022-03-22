import { useState } from "react";
import {
  Button,
  Container,
  Form,
  Input,
  StyledLink,
} from "../../components/FormComponents";

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    pictureUrl: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <Container>
      <main className="right">
        <div className="banner">
          <h1>linkr</h1>
          <h2>save, share and discover the best links on the web</h2>
        </div>
      </main>

      <aside className="left">
        <Form onSubmit={handleSubmit}>
          <Input
            name="email"
            placeholder="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <Input
            name="password"
            placeholder="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />

          <Input
            name="username"
            placeholder="username"
            type="text"
            value={formData.username}
            onChange={handleInputChange}
            required
          />

          <Input
            name="pictureUrl"
            placeholder="picture url"
            type="url"
            value={formData.pictureUrl}
            onChange={handleInputChange}
            required
          />

          <Button>Sign Up</Button>
          <StyledLink to="/">
            <p>Switch back to log in</p>
          </StyledLink>
        </Form>
      </aside>
    </Container>
  );
}
