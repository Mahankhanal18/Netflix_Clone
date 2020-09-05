import React, { useEffect, useState } from "react";
import axios from "axios";

const Instance = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios
        .get(`https://www.breakingbadapi.com/api/characters`)
        .catch((e) => {
          console.log(e);
        });
      for (let i = 0; i <= 20; i = i + 1) {
        setName(response.data[i].name);
        console.log(response.data[i].name);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <p>Hello {name}</p>
    </div>
  );
};

export default Instance;
