// JSX = JavaScript + XML
import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Luiz Fernando"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non rem voluptate culpa tempore cumque rerum at. Rerum velit architecto labore aspernatur deleniti quam eos odit voluptatibus magni. Suscipit beatae cumque natus ratione, modi facilis, aliquam qui, odio impedit amet laborum dolor nemo temporibus perferendis? Reiciendis quia totam quidem tempora dolorem."
      />

      <Post
        author="João Martinz"
        content="Lorem ipsum dolor sit, amet consectetur, aliquam qui, odio impedit amet laborum dolor nemo temporibus perferendis? Reiciendis quia totam quidem tempora dolorem."
      />
    </div>
  );
}