import { h } from "preact";
import { Link } from "preact-router/match";
import usersJson from "../assets/data/users.json";
import postsJson from "../assets/data/posts.json";
import Post from "../components/post";

// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ user }) => {
  const username = "hacker_420";
  const currentUser = usersJson.find((p) => p.username === username);

  const profileUser = usersJson.find((p) => p.username === user);

  const friendsList = profileUser.friends.map((friend) => {
    const friendData = usersJson.find((user) => user.username === friend);
    return (
      <div class="col-sm-2">
        <div class="card">
          <Link
            class="text-decoration-none"
            activeClassName="active"
            href={`/profile/${friend}`}
          >
            <img
              class="card-img-top"
              src={friendData.profilepic}
              style="aspect-ratio:1/1;object-fit:cover;margin-right:1rem;"
              alt={friend}
            />
            <div class="card-body">
              <h5 class="card-title">
                {friendData.firstname} {friendData.lastname}
              </h5>
                <h6 class="text-muted">@{friendData.username}</h6>
            </div>
          </Link>
        </div>
      </div>
    );
  });

  const posts = postsJson
    .filter((post) => post.username === profileUser.username).reverse()
    .map((post) => <Post post={post} />);

  return (
    <div>
      <img
        src="https://img.freepik.com/free-vector/blank-blue-halftone-background_53876-114466.jpg"
        class="img-fluid"
        style="width:100%;height:250px;"
        alt="..."
      ></img>
      <div class="px-5">
        <img
          src={profileUser.profilepic}
          style="width:200px;aspect-ratio:1/1;object-fit:cover;margin-top:-10rem;"
          alt={user}
        />
        <h1>
          {profileUser.firstname} {profileUser.lastname}
          
          {!(currentUser.username === profileUser.username) &&
            profileUser.username ===
              currentUser.friends.find((p) => p === profileUser.username) && (
              <button type="button" class="float-end btn btn-primary">
                Friends
              </button>
            )}
          {!(currentUser.username === profileUser.username) &&
            !(
              profileUser.username ===
              currentUser.friends.find((p) => p === profileUser.username)
            ) && (
              <button type="button" class="float-end btn btn-outline-primary">
                Add Friend
              </button>
            )}
        </h1>
        <h5 class="text-muted">@{user}</h5>
      </div>
      <hr />
      <h3>{profileUser.firstname}'s Friends</h3>
      <div class="row g-4">{friendsList}</div>
      <hr />
      <h3>Posts by {profileUser.firstname}</h3>
      {posts}
    </div>
  );
};

export default Profile;
