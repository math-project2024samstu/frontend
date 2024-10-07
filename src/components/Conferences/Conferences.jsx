import { useEffect, useState } from "react";

export const Conferences = () => {
  const [conferences, setConferences] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/conferences")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Сеть ответа не была успешной.");
        }
        return response.json();
      })
      .then((data) => setConferences(data))
      .catch((error) => console.error("Ошибка:", error));
  }, []);

  return (
    <section>
      <h3>Предстоящие конференции</h3>
      <ul>
        {conferences.map((conference) => (
          <li key={conference.id}>
            <h4>{conference.title}</h4>
            <p>Дата: {conference.date}</p>
            <p>Место: {conference.location}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
