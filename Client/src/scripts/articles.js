function get_articles_summary()
{
    fetch("http://localhost:5000/api/articles/summary")
        .then(response => response.json())
        .then(data =>
        {
            console.log(data);
            setArticles(data);
        });
}