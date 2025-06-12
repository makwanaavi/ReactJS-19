import { useEffect, useState } from "react";

function TodoData() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formatedDate = now.toLocaleDateString();
      const formatedTime = now.toLocaleTimeString();
      setDateTime(`${formatedDate} - ${formatedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="date-time">
      <h2>{dateTime}</h2>
    </section>
  );
}

export default TodoData;
