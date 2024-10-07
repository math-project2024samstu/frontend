import { Header, Conferences } from "./components/";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h2 className={styles.mainContent}>
          Добро пожаловать в информационный ресурс: Мероприятия по математике!
        </h2>
      </main>
      <Routes>
        <Route path="/" element={<h3>Главная страница</h3>} />
        <Route path="/olympiads" element={<h3>Олимпиады</h3>} />
        <Route path="/conferences" element={<Conferences />} />{" "}
        <Route path="/seminars" element={<h3>Семинары</h3>} />
      </Routes>
    </>
  );
}

export default App;
