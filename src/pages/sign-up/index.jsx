import { Link } from "react-router-dom";
import { Form } from "../../components/FormComponents";

export default function SignUp() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <main>
        <h1>linkr</h1>
        <h2>save, share and discover the best links on the web</h2>
      </main>

      <aside>
        <Form onSubmit={handleSubmit}>
          <input name="email" placeholder="email" type="email" />
          <input name="password" placeholder="password" type="password" />
          <input name="username" placeholder="username" type="text" />
          <input name="pictureUrl" placeholder="picture url" type="url" />

          <button>Sign Up</button>
          <Link to="/">
            <p>Switch back to log in</p>
          </Link>
        </Form>
      </aside>
    </>
  );
}
