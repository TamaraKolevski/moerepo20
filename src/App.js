import { useState } from "react";
import { useEffect } from "react";
import { Nav, Comments, Gallery, Posts } from "./components";
import { Routes,Route } from "./react-router-dom";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const callPost = async () => { 
      const fetchData = await fetch(API_URL + "/posts");
      const data = await fetchData.json();
      setPosts(data);
  }

  callPost();
  }, []);

  return (
    <>
      <div>
        <Nav/>
        <Routes>
          <Route path="/posts" element={<Posts posts/>} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        </div> 
    </>
  );
};
export default App;
