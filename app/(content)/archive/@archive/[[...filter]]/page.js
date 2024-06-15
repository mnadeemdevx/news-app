import Link from 'next/link';

import NewsGrid from '@/components/news/news-grid';
import {
    getAvailableNewsMonths,
    getAvailableNewsYears,
    getNewsForYear,
    getNewsForYearAndMonth,
} from '@/lib/news';

const FilteredNewsPage = (props) => {
    const { params } = props;

    const selectedYear = params.filter?.[0];
    const selectedMonth = params.filter?.[1];

    let news;
    let links = getAvailableNewsYears();

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    }

    if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];
    }

    let newsContent = <p>No news found for the selected period.</p>;

    if (news && news.length > 0) {
        newsContent = <NewsGrid news={news} />;
    }

    if (
        (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
        (selectedMonth &&
            !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
    ) {
        throw new Error('Invalid filter.');
    }
    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map((link) => {
                            const href = selectedYear
                                ? `/archive/${selectedYear}/${link}`
                                : `/archive/${link}`;
                            return (
                                <li key={link}>
                                    <Link href={href}>{link}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </header>
            {newsContent}
        </>
    );
};

export default FilteredNewsPage;
