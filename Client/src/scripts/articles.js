function get_articles_summary()
{
    fetch("http://127.0.0.1:5000/api/articles/summary")
        .then(response => response.json())
        .then(data =>
        {
            console.log(data);
            setArticles(data);
        });
}