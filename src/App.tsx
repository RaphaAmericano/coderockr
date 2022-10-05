import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/styles/global.scss";
import Header from "./components/Header";

// Pages
const Home = lazy(async () => import("./pages/Home"));
const Post = lazy(async () => import("./pages/Post"));

function App() {
  function openContactModal(){
    console.log("Open contact modal")
  }
  const menu = [{ to: "/", text: "Posts", isLink: true }, { text: "Contact", clickFn: openContactModal }]
  return (
    <>
      <Header title={"Rockr Blog"} menu={menu}/>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
