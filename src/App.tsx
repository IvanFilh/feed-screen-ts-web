import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import style from "./App.module.css";
import "./global.css";
import { IPost } from "./shared/types";

const posts: IPost[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/82606888?v=4",
      name: "Ivan Ramos",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "🇧🇷Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu GitHub. É um projeto em ReactJs⚛️ com Vite⚡, dá um confere por lá XD",
      },
      { type: "link", content: "https://github.com/IvanFilh?tab=repositories" },
    ],
    publishedAt: new Date("2022-11-21 13:54:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/102564420?v=4",
      name: "Fabiano Oliveira",
      role: "UX/UI",
    },
    content: [
      { type: "paragraph", content: "Mais um projeto finalizado" },
      {
        type: "paragraph",
        content: "Tela em Figma criado... enviando agora para a produção",
      },
      { type: "link", content: "https://github.com/literallyfabin" },
    ],
    publishedAt: new Date("2022-11-10 22:21:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                id={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
