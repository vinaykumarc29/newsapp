import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import React,{useState,useEffect} from 'react'
import Newsitem from './Newsitem'
import LoadingCardAnimation from './LoadingCardAnimation';

// const BASE_URL = `https://newsdata.io/api/1/latest?apikey=${this.props.apikey}&language=en`;


const News =(props)=> {

   const [articles,setarticles] = useState([]);
   const [page_no,setpage_no] = useState(null);
   const [isLoading,setisLoading] = useState(false);
   const [hasMore,sethasMore] = useState(true);

    // constructor() {
    //     super();
    //     this.state = {
    //         articles: [],
    //         page_no: null,
    //         isLoading: false,
    //         hasMore: true,
    //     }
       
    // }
    const fetchnews = async(url)=>{

        if(isLoading) return;
        
        setisLoading(true);
        
        props.progress(30);
        // let Api_url_req = api_key;
        url = (props.category === "")? url :  url + `&category=${props.category}`;
        
        
        try {
            
            
            let data = await fetch(url);
            
            if(!data.ok){
                throw new Error(`Http Error ${data.status}:${data.statusText}`)
            }
            let parsed_data = await data.json();
            
            
            
            
            
            props.progress(100);
            setarticles(articles.concat(parsed_data.results));
            setpage_no(parsed_data.nextPage);
            setisLoading(false);
            sethasMore(articles.length < 30)
        }catch (error) {
            document.body.innerText =` ${error}`
        }





        console.log(articles.length);
        console.log(hasMore);
        
        // this.setState({
            //     articles: this.state.parsed_data.results,
        //     page_no: parsed_data.nextPage,
        //     isLoading: false,
        //     hasMore: this.state.articles.length < 30 ,
        // });
        
        
    } 
    
    useEffect(()=>{
        fetchnews(`https://newsdata.io/api/1/latest?apikey=${props.apikey}&language=en&country=${props.country}`,[]);
    },[])


    // async componentDidMount() {
        
    // }

    
        return (
           
                <div className="container-fluid my-3 px-3" >
                    <h3 className='text-center my-3'>{(props.category)?`Top ${(props.category).replace(/^./, char => char.toUpperCase())} HeadLines  `: "NewsOne - HeadLines" }</h3>
                    
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={()=>fetchnews(`https://newsdata.io/api/1/latest?apikey=${props.apikey}&language=en&country=${props.country}&page=${page_no}`)}
                        inverse={false} 
                        hasMore={hasMore}
                        endMessage={
                            <p className="text-center my-3" >
                              <b>Yay! You have seen it all 🎉</b>
                            </p>
                          }
                    >

                    <div className="row">
                        {articles.map((article) => (
                            <div className="col-12 col-sm-6 col-md-4 mb-4" key={article.article_id}>
                                <Newsitem mode={props.mode} title={article.title} imageUrl={article.image_url} desc={article.description ? article.description.slice(0, 88) : " "} newsUrl={article.link} author={article.creator} date={article.pubDate} publisher={article.source_name} />
                            </div>
                        ))}
                    </div>
                    </InfiniteScroll>
                    
             {isLoading && <LoadingCardAnimation />}    
        </div>
           
        )
    }


News.propTypes = {
    country:PropTypes.string,
    category: PropTypes.string,
    apikey: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired
}

News.defaultProps ={
    country:"in",
    category:""
}


export default News
