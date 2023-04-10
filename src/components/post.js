import usersJson from "../assets/data/users.json";

const Post = ({ post }) => {
  const poster = usersJson.find((p) => p.username === post.username);
  return (
    <div>
      <div class="card">
        <div class="card-body row">
          <div class="col-2">
            <img
              src={poster.profilepic}
              style="width:100%;aspect-ratio:1/1;object-fit:cover;"
              alt={post.username}
            />
          </div>
          <div class="col-10">
            <h5 class="card-title">
              {poster.firstname} {poster.lastname}{" "}
              <span class="text-muted">@{post.username}</span>
            </h5>
            <h6 class="text-muted">{post.date}</h6>
            <p class="card-text">{post.content}</p>

            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <a href="#" class="float-end mx-1 btn">
                  ❤️
                </a>
                <a href="#" class="float-end mx-1 btn">
                  🔁
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Post;
