import { h } from 'preact';
import Post from '../components/post';
import postsJson from '../assets/data/posts.json';
import usersJson from '../assets/data/users.json';

const Home = () => {

    const username = "hacker_420";
    const currentUser = usersJson.find((p) => p.username === username);

    const posts = postsJson.filter(
        (post) => post.username === 
        currentUser.username || currentUser.friends.includes(post.username))
        .map((post) => (
        <Post post={post} />
      ));

	return (
		<div>
            <h3 class="display-4">Preact</h3>
            <div>
			    <form>
                <div class="form-group">
                    <textarea
                    class="form-control"
                    rows="1"
                    placeholder="What's happening?"
                    ></textarea>
                </div>
                <button type="button" class="btn btn-primary">
                    Tweet
                </button>
                </form>
			    <hr />
			    <div class="center">
			    {posts}
			    </div>
		    </div>
		</div>
	  );
	};

export default Home;
