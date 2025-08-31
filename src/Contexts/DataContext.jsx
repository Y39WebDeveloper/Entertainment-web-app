import { createContext, useEffect, useState } from "react";
import dataJSON from "../data.json";

const DataContext = createContext([]);

const DataProvider = ({ children }) => {
  const a = dataJSON.map((d, i) => {
    return { ...d, id: i };
  });
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("moviesData");
    return savedData ? JSON.parse(savedData) : a;
  });

  const [screen, setScreen] = useState("Home");
  const [search, setSearch] = useState("");

  function handleBookmark(id) {
    const updatedData = data.map((d) => {
      if (d.id == id) {
        return { ...d, isBookmarked: !d.isBookmarked };
      }
      return d;
    });
    setData(updatedData);
    localStorage.setItem("moviesData", JSON.stringify(updatedData));
  }

  useEffect(() => {
    localStorage.setItem("moviesData", JSON.stringify(data));
  }, [data]);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        screen,
        setScreen,
        search,
        setSearch,
        handleBookmark,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
