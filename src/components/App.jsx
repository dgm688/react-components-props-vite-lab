import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  const posts = [
    {
      id: 1,
      title: "My First Post",
      date: "May 5, 2026",
      preview: "This is my first blog post."
    },
    {
      id: 2,
      title: "Learning React",
      date: "May 6, 2026",
      preview: "React components are fun."
    }
  ];

  return (
    <div className="App">
      <Header name="My Blog" />

      <About
        image="https://via.placeholder.com/150"
        about="I love writing about React."
      />

      <ArticleList posts={posts} />
    </div>
  );
}

export default App;