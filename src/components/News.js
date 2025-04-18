import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import React, { Component } from 'react'
import Newsitem from './Newsitem'
import LoadingCardAnimation from './LoadingCardAnimation';
const BASE_URL = "https://newsdata.io/api/1/latest?apikey=pub_80635608c807eb702e3e5914a2ea124647bb8&language=en";


export default class News extends Component {

    static  propTypes = {
        country:PropTypes.string,
        category: PropTypes.string,
    }

    static  defaultProps ={
        country:"in",
        category:""
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            page_no: null,
            isLoading: false,
            hasMore: true,
        }
    }
    async fetchnews(api_key){
        if(this.state.isLoading) return;

        this.setState({ isLoading: true });

        let Api_url_req = api_key;
        let url = (this.props.category === "")? Api_url_req :  Api_url_req + `&category=${this.props.category}`;
        

        let data = await fetch(url);
        let parsed_data = await data.json();

        console.log(this.state.articles.length);
        console.log(this.state.hasMore);


        this.setState({
            articles: this.state.articles.concat(parsed_data.results),
            page_no: parsed_data.nextPage,
            isLoading: false,
            hasMore: this.state.articles.length < 30 ,
        });


    } 

    async componentDidMount() {
        this.fetchnews(BASE_URL + `&country=${this.props.country}`);
        
    }

    render() {
        return (
           
                <div className="container my-3 ">
                    <h3 className='text-center my-3'>{(this.props.category)?`Top ${(this.props.category).replace(/^./, char => char.toUpperCase())} HeadLines  `: "NewsOne - HeadLines" }</h3>
                    
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={()=> this.fetchnews(BASE_URL +`&country=${this.props.country}&page=${this.state.page_no}`)}
                        inverse={false} 
                        hasMore={this.state.hasMore}
                        endMessage={
                            <p className="text-center my-3" >
                              <b>Yay! You have seen it all 🎉</b>
                            </p>
                          }
                    >

                    <div className="row">
                        {this.state.articles.map((article) => (
                            <div className="col-md-4" key={article.article_id}>
                                <Newsitem title={article.title} imageUrl={article.image_url} desc={article.description ? article.description.slice(0, 88) : " "} newsUrl={article.link} author={article.creator} date={article.pubDate} publisher={article.source_name} />
                            </div>
                        ))}
                    </div>
                    </InfiniteScroll>
                    
             {this.state.isLoading && <LoadingCardAnimation />}    
        </div>
           
        )
    }
}
