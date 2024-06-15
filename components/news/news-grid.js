import NewsItem from './news-item';

const NewsGrid = (props) => {
    const { news } = props;
    return (
        <ul className="news-list">
            {news.map((item) => {
                return (
                    <li key={item.id}>
                        <NewsItem {...item} />
                    </li>
                );
            })}
        </ul>
    );
};

export default NewsGrid;
