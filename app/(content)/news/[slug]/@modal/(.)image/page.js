'use client';

import { notFound, useRouter } from 'next/navigation';

import { DUMMY_NEWS } from '@/utils/dummy-news';

const InterceptedImagePage = (props) => {
    const { params } = props;

    const router = useRouter();

    const newsItem = DUMMY_NEWS.find((item) => item.slug === params.slug);

    if (!newsItem) notFound();

    return (
        <>
            <div className="modal-backdrop" onClick={router.back} />
            <dialog className="modal" open>
                <div className="modal-image">
                    <img
                        src={`/images/news/${newsItem.image}`}
                        alt={newsItem.title}
                    />
                </div>
            </dialog>
        </>
    );
};

export default InterceptedImagePage;
