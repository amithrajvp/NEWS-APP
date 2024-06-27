

const NewsCard = (props) => {
    const article = props.article
    return (
        <>
        <article className="gap-4 ">
            
       <img className="w-full h-40 rounded-lg" src={article.urlToImage} alt="" />
       <div>
       <h3 className="text-lg font-bold py-4">{article.title}</h3>
       <p>{article.description}</p>
       </div>
       
       
      </article>
            
        </>
    );
}

export default NewsCard;
