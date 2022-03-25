import {
  Logo,
  Navbar,
  ProfilePic,
  UserInfo,
} from "../../components/NavigationComponents";

export default function Nav() {
  return (
    <Navbar>
      <Logo>
        <p>linkr</p>
      </Logo>

      <UserInfo>
        <ion-icon name="chevron-down-outline" className="dropdown"></ion-icon>

        <ProfilePic className="img">
          <img src="#" alt="profile" />
        </ProfilePic>
      </UserInfo>
    </Navbar>
  );
}
