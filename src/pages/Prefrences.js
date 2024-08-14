import React, { useState, useEffect } from "react";
import SearchBar from '../components/SearchBar';
import { getArticles } from '../services/api';
import ArticleList from "../components/ArticleList";

const SaveFiltersPage = () => {
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    q: "",
    source: "",
    date: "",
  });
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const savedFilters = JSON.parse(localStorage.getItem("savedFilters"));
    console.log('savedFilters: ', savedFilters);

    if (savedFilters) {
      handleSearch(savedFilters);
      setFilters(savedFilters);
    }
  }, []);
 
  const handleSearch  = async (params) => {
    setLoading(true);
    try {
        const fetchedArticles = await getArticles(params);
        localStorage.setItem("savedFilters", JSON.stringify(params));
        setArticles(fetchedArticles);
    } catch (error) {
        console.error('Error fetching articles:', error);
    } finally {
        setLoading(false);
    }
  };


  return (
    <div className="container">
      <h1>News & Articles from Preferences</h1>
      <SearchBar keywordProp={filters.q} sourceProp={filters.source} dateProp={filters.date}  onSearch={handleSearch}  />
      <div className="articles-container">
        {loading ? (
            <p>Loading...</p>
        ) : (
            articles.length ? (<ArticleList articles={articles} />) : 'Wanna see the news? Hit the search button to save the Preferences!' 
        )}
      </div>
    </div>
  );
};

export default SaveFiltersPage;