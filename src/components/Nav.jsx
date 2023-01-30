import {Link} from "react-router-dom"

export const Nav = () => (
  <ul> 
    <li>
        <Link to="/posts">Posts</Link>
    </li>
    <li>
        <Link to="/comments">Comments</Link>
    </li>
    <li>
        <Link to="/galery">Galery</Link>
    </li>
</ul> 
);