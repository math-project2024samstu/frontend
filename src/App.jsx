import { Header } from "./components/";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h2 className={styles.mainContent}>
          Добро пожаловать информационный ресурс: Мероприятия по математике!
        </h2>
      </main>
      <Routes>
        <Route path="/" />
        <Route path="/olympiads" element="" />
        <Route path="/conferences" element="" />
        <Route path="/seminars" element="" />
      </Routes>
    </>
  );
}

export default App;
