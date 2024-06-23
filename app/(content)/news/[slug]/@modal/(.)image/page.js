import { notFound } from "next/navigation";

import ModalBackdrop from "@/components/modal-backdrop";

import { getNewsItem } from "@/lib/news";

const InterceptedImagePage = async (props) => {
    const { params } = props;

    const newsItem = await getNewsItem(params.slug);

    if (!newsItem) notFound();

    return (
        <>
            <ModalBackdrop />
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
