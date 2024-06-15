import { Suspense } from 'react';

import { DUMMY_NEWS } from '@/utils/dummy-news';
import { NewsGrid } from '@/components';

const NewsPage = () => {
    return (
        <>
            <h1>News Page</h1>
            <Suspense fallback={<p>Fetching news...</p>}>
                <NewsGrid news={DUMMY_NEWS} />
            </Suspense>
        </>
    );
};

export default NewsPage;
