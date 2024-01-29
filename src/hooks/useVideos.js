import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    Search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const Search = async (term) => {
    console.log(term);
    const { data } = await youtube.get(`/search`, {
      params: {
        q: term,
      },
    });

    setVideos(data.items);
  };

  return [videos, Search];
};

export default useVideos;
