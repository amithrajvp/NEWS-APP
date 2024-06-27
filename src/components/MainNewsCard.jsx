
const MainNewsCard = (props) => {
    const article = props.article
    console.log(props.article)
    return (
        <>
          <article >
       <img className="w-full h-3/5 rounded-xl" src={article.urlToImage} alt="" />
       <h3 className="text-2xl font-bold py-8">{article.title}</h3>
       <p className="font-semibold">{article.description}</p>
       
      </article>   
        </>
    );
}

export default MainNewsCard;
