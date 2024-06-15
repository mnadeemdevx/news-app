import { notFound } from 'next/navigation';

import { DUMMY_NEWS } from '@/utils/dummy-news';

const ImagePage = (props) => {
    const { params } = props;

    const newsItem = DUMMY_NEWS.find((item) => item.slug === params.slug);

    if (!newsItem) notFound();

    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    );
};

export default ImagePage;
