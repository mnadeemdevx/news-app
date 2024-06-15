import NewsGrid from '@/components/news/news-grid';
import { getLatestNews } from '@/lib/news';

const LatestNews = () => {
    const latest = getLatestNews();
    return (
        <>
            <h2>LatestNews</h2>
            <NewsGrid news={latest} />
        </>
    );
};

export default LatestNews;
