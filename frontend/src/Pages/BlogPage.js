import React from 'react';
import '../Style/Pages/BlogPage.css';
import { Helmet } from 'react-helmet';

const BlogPage = () => {
  return (
    <div className="blog-container">
      <Helmet>
        <title>Arvind's Blog | Thoughts, Stories, and Truth</title>
        <meta
          name="description"
          content="This is where Arvind shares thoughts, views, opinions, news, and high-quality truth-based stories."
        />
      </Helmet>

      <h1>📝 Arvind's Blog</h1>
      <p className="blog-intro">
        This is where I express my thoughts, my views, my opinion, my story, and news.  
        <br />
        <strong>High-Quality and Truth-Based Facts</strong> I share here — with full honesty and clarity.
      </p>

      <div className="blog-placeholder">
        <h2>Coming Soon...</h2>
        <p>You can expect deep and real content here soon. Stay tuned!</p>
      </div>
    </div>
  );
};

export default BlogPage;
