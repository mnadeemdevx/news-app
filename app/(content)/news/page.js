import { NewsGrid } from "@/components";

import { getAllNews } from "@/lib/news";

const NewsPage = async () => {
    const news = await getAllNews();

    return (
        <>
            <h1>News Page</h1>
            <NewsGrid news={news} />
        </>
    );
};

export default NewsPage;
