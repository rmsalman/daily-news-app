import React from 'react';
import Article from './Article';

const ArticleList = ({ articles }) => {
    return (
        <div className="articles-list">
            <h2>News/Articles</h2>  
            {articles.map((article, i) => (
                <Article key={i} article={article} />
            ))}
        </div>
    );
};

export default ArticleList;
