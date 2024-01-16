import { useEffect, useState } from 'react'
import image from '../../assets/article_image.png'
import { CONSTANS } from '../../helpers/constans';
import { AjaxRequest } from '../../helpers/AjaxRequest';
export const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const getArticles = async () => {
        setIsLoading(true);
        const url = CONSTANS.url + "get-articles";
        let { response } = await AjaxRequest(url, "GET");    
        setArticles(response.message);
        setIsLoading(false);
    };
    useEffect(() => {
        getArticles();
    }, []);
    return (
        <>
            {isLoading ? (<h2>Loading ... </h2>) :
                <section className="content">
                    {/* typeof articles === 'string' && */}
                    {(articles.length > 0) ? articles.map(article => {
                        return (
                            <article key={article._id} className="article-item">
                                <div className="cover">
                                    <img src={image} alt="Image Article" />
                                </div>
                                <div className="article-item-body">
                                    <h3 className="title">{article.title}</h3>
                                    <p className="description">{article.content}</p>
                                    <div className="article-item-body-buttons">
                                        <button className="edit">Edit</button>
                                        <button className="delete">Delete</button>
                                    </div>
                                </div>
                            </article>);
                    }) : <div>
                        <h2>No data</h2>
                    </div>};
                </section>

            }
        </>
    )
}
