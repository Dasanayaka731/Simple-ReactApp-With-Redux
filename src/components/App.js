import "./App.css";
import ButtonComponent from "./ButtonComponent";
import SelectedPost from "./SelectedPost";
import PostList from "./postList";

function App() {
  return (
    <div className=" d-flex justify-content-center align-items-center flex-column mt-4">
      <h2>Welcome</h2>
      <ButtonComponent />
      <PostList />
      <SelectedPost />
    </div>
  );
}

export default App;
