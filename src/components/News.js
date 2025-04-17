// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Newsitem from './Newsitem'
import LoadingCardAnimation from './LoadingCardAnimation';

export default class News extends Component {


    constructor() {
        super();
        this.state = {
            articles: [],
            page_no: null,
            isLoading: false
        }
    }
    async componentDidMount() {
        this.setState({ isLoading: true })
        let url = "https://newsdata.io/api/1/latest?apikey=pub_80635608c807eb702e3e5914a2ea124647bb8&language=en&country=in";
        let data = await fetch(url);
        let parsed_data = await data.json();
        this.setState({
            articles: parsed_data.results,
            page_no: parsed_data.nextPage,
            isLoading: false
        });
    }

    handleNextpage = async () => {
        this.setState({ isLoading: true })
        let url = `https://newsdata.io/api/1/latest?apikey=pub_80635608c807eb702e3e5914a2ea124647bb8&language=en&country=in&page=${this.state.page_no}`;
        let data = await fetch(url);
        let parsed_data = await data.json();
        this.setState({
            articles: parsed_data.results,
            page_no: parsed_data.nextPage,
            isLoading: false

        });

    }
    render() {
        return (
            (!this.state.isLoading) ?
                (<div className="container my-3 ">
                    <h3 className='text-center'>NewsOne - HeadLines</h3>
                    <div className="row">
                        {this.state.articles.map((article) => (

                            <div className="col-md-3" key={article.article_id}>
                                <Newsitem title={article.title} imageUrl={article.image_url} desc={article.description ? article.description.slice(0, 88) : " "} newsUrl={article.link} />
                            </div>
                        ))}
                    </div>
                    <div className="container d-flex justify-content-end">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item "><button className="page-link text-dark" onClick={this.handleNextpage}>Next&rarr;</button></li>
                            </ul>
                        </nav>
                    </div>
                </div>) : (
                    <>
                    <LoadingCardAnimation />
                    </>
                )

        )
    }
}
