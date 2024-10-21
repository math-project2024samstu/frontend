import { useEffect, useState } from "react";

export const Conferences = () => {
  const [conferences, setConferences] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/conferences")
      .then((response) => response.json())
      .then((data) => setConferences(data))
      .catch((error) => console.error("Ошибка:", error));
  }, []);

  return (
    <section>
      <h3>Предстоящие конференции</h3>
      <ul>
        {conferences.map((conference, index) => (
          <li key={index}>
            <h4>{conference.title}</h4>
            <p>Дата: {conference.date}</p>
            <p>Организаторы: {conference.sponsor}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
