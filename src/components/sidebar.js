import { h } from "preact";
import { Link } from "preact-router/match";
import usersJson from "../assets/data/users.json";

const Sidebar = () => {
  const username = "hacker_420";
  const currentUser = usersJson.find((p) => p.username === username);

  const friendsList = currentUser.friends
    .map((friend) => (
        <li><a>{friend}</a></li>
  ));

  return (
    <div class="sticky-top p-3">
      <a href="/" class="d-inline-flex text-decoration-none">
        <div>
          <img
            src={currentUser.profilepic}
            alt="Profile Picture"
            class="float-left"
            style="width:100px;aspect-ratio:1/1;object-fit:cover;"
          />
        </div>
        <div class="px-3">
          <h3>
            {currentUser.firstname} {currentUser.lastname}
          </h3>
          <p class="text-muted">@{currentUser.username}</p>
        </div>
      </a>
      <div class="py-3">
        <h3>Friends</h3>
        <ul>
          {friendsList}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
