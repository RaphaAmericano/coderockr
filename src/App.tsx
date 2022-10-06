import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./assets/styles/global.scss";
import { ContactFormContainer } from "./components/ContactFormContainer";
import Header from "./components/Header";
import ModalContainer from "./components/ModalContainer";
import { useStores } from "./stores";

// Pages
const Home = lazy(async () => import("./pages/Home"));
const Post = lazy(async () => import("./pages/Post"));

function App() {

  const { modalStore } = useStores();
  const { openModal, setChildren } = modalStore;
  function openContactModal(){
    console.log("Open contact modal")
    openModal();
    setChildren(<ContactFormContainer />);
  }
  const menu = [{ to: "/", text: "Posts", isLink: true }, { text: "Contact", clickFn: openContactModal }]
  return (
    <>
      <Header title={"Rockr Blog"} menu={menu}/>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={ <Navigate to="/login" /> } />
        </Routes>
      </Suspense>
      <ModalContainer />
    </>
  )
}

export default App
