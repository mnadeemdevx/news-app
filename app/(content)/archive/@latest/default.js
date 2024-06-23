import NewsGrid from "@/components/news/news-grid";
import { getLatestNews } from "@/lib/news";

const LatestNews = async () => {
    const latest = await getLatestNews();
    return (
        <>
            <h2>LatestNews</h2>
            <NewsGrid news={latest} />
        </>
    );
};

export default LatestNews;
