import Link from 'next/link';

const NewsItem = (props) => {
    const { id, slug, title, image, date, content } = props;

    return (
        <Link href={`/news/${slug}`}>
            <img src={`/images/news/${image}`} alt={title} />
            <span>{title}</span>
        </Link>
    );
};

export default NewsItem;
