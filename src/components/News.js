import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import LoadingCardAnimation from './LoadingCardAnimation';

const News = (props) => {

    // State to store fetched articles
    const [articles, setarticles] = useState([]);

    // State to track the current page number for pagination
    const [page_no, setpage_no] = useState(null);

    // State to indicate if data is currently being loaded
    const [isLoading, setisLoading] = useState(false);

    // State to determine if more articles are available to load
    const [hasMore, sethasMore] = useState(true);

    // Function to fetch news articles from the API
    const fetchnews = async (url) => {

        // Prevent multiple simultaneous fetch requests
        if (isLoading) return;

        setisLoading(true);

        // Update the progress bar to indicate loading
        props.progress(30);

        // Append category to the URL if provided
        url = (props.category === "") ? url : url + `&category=${props.category}`;

        try {
            // Fetch data from the API
            let data = await fetch(url);

            // Handle HTTP errors
            if (!data.ok) {
                throw new Error(`Http Error ${data.status}:${data.statusText}`)
            }

            // Parse the JSON response
            let parsed_data = await data.json();

            // Update progress bar to 100% after successful fetch
            props.progress(100);

            // Append new articles to the existing list
            setarticles(articles.concat(parsed_data.results));

            // Update the next page number for pagination
            setpage_no(parsed_data.nextPage);

            // Mark loading as complete
            setisLoading(false);

            // Check if there are more articles to load
            sethasMore(articles.length < 30)
        } catch (error) {
            // Display error message on the page in case of failure
            document.body.innerText = ` ${error}`
        }

        // Debugging logs for articles and hasMore state
        console.log(articles.length);
        console.log(hasMore);
    }

    // Fetch initial news articles when the component mounts
    useEffect(() => {
        fetchnews(`https://newsdata.io/api/1/latest?apikey=${props.apikey}&language=en&country=${props.country}`, []);
    }, [])

    return (

        <div className="container-fluid my-3 px-3" data-bs-theme={props.mode}>
            {/* Display the headline based on the selected category */}
            <h3 className='text-center my-3'>{(props.category) ? `Top ${(props.category).replace(/^./, char => char.toUpperCase())} HeadLines  ` : "NewsOne - HeadLines"}</h3>

            {/* Infinite scroll to load more articles as the user scrolls */}
            <InfiniteScroll
                dataLength={articles.length} // Current number of articles loaded
                next={() => fetchnews(`https://newsdata.io/api/1/latest?apikey=${props.apikey}&language=en&country=${props.country}&page=${page_no}`)} // Fetch next page
                inverse={false} // Normal scrolling direction
                hasMore={hasMore} // Whether more articles are available
                endMessage={
                    <p className="text-center my-3" >
                        <b>Yay! You have seen it all 🎉</b>
                    </p>
                }
            >

                {/* Display articles in a grid layout */}
                <div className="row">
                    {articles.map((article) => (
                        <div className="col-12 col-sm-6 col-md-4 mb-4" key={article.article_id}>
                            {/* Render individual news item */}
                            <Newsitem mode={props.mode} title={article.title} imageUrl={article.image_url} desc={article.description ? article.description.slice(0, 88) : " "} newsUrl={article.link} author={article.creator} date={article.pubDate} publisher={article.source_name} />
                        </div>
                    ))}
                </div>
            </InfiniteScroll>

            {/* Show loading animation while fetching data */}
            {isLoading && <LoadingCardAnimation />}
        </div>

    )
}

// Define the expected prop types for the News component
News.propTypes = {
    country: PropTypes.string, // Country code for fetching news
    category: PropTypes.string, // News category
    apikey: PropTypes.string.isRequired, // API key for authentication
    mode: PropTypes.string.isRequired // Theme mode (light or dark)
}

// Set default values for optional props
News.defaultProps = {
    country: "in", // Default country is India
    category: "" // Default category is empty (general news)
}

export default News
