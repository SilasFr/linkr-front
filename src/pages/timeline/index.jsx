import {
  Container,
  Feed,
  Form,
  ProfilePic,
} from "../../components/TimelineComponents";
import Nav from "./navbar";

export default function Timeline() {
  return (
    <>
      <Nav />

      <Container>
        <Feed>
          <header>
            <p>timeline</p>
          </header>

          <main>
            <div className="new-post">
              <div className="profile-pic">
                <ProfilePic className="img">
                  <img src="#" alt="profile" />
                </ProfilePic>
              </div>
              <div className="post-info">
                <p className="post-info-title">
                  What are you going to share today?
                </p>
                <Form action="">
                  <input type="url" placeholder="http://..." />
                  <input
                    className="description"
                    type="text"
                    placeholder="Awesome article about #javascript"
                  />
                  <button>Publish</button>
                </Form>
              </div>
            </div>
          </main>
        </Feed>
      </Container>
    </>
  );
}
