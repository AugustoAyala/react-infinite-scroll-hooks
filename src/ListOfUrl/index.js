import React, { useState, useEffect } from "react";
import axios from "axios";

export const ListOfUrl = () => {
  const [urlPhotos, setUrlPhotos] = useState([]);
  const [isLoading, setIsFetching] = useState(false);
  const [numberPage, setNumberPage] = useState(1);

  useEffect(() => {
    getPhotos(numberPage);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    setNumberPage((prevState) => prevState + 1);
    getPhotos(numberPage);
  }, [isLoading, numberPage]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    )
      return;
    setIsFetching(true);
  }

  function getPhotos(page) {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
      )
      .then((res) => {
        setUrlPhotos((prevState) => [...prevState, ...res.data]);
      });
    setIsFetching(false);
  }

  return (
    <>
      <ul>
        {urlPhotos.map((urlPhoto) => (
          <li className="list-group-item"> {urlPhoto.url} </li>
        ))}
        {urlPhotos.map((urlPhoto) => (
          <li className="list-group-item"> {urlPhoto.url} </li>
        ))}
        {urlPhotos.map((urlPhoto) => (
          <li className="list-group-item"> {urlPhoto.url} </li>
        ))}
        {urlPhotos.map((urlPhoto) => (
          <li className="list-group-item"> {urlPhoto.url} </li>
        ))}
        {urlPhotos.map((urlPhoto) => (
          <li className="list-group-item"> {urlPhoto.url} </li>
        ))}
      </ul>
    </>
  );
};
