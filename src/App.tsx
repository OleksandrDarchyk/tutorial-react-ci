import "./App.css";
import { Api } from "./api";
import { Layout, WelcomeHero } from "./components/layout";
{/* <PostList posts={posts}></PostList> */}


function App() {
    const posts = new Api().postList();
    return (
    <Layout>
      <WelcomeHero></WelcomeHero>
      <div className="divider"></div>
      <PostList posts={posts}></PostList>
    </Layout>
  );
}

export default App;
