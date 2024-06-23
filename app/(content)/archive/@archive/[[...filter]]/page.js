import Link from "next/link";

import NewsGrid from "@/components/news/news-grid";
import {
    getAvailableNewsMonths,
    getAvailableNewsYears,
    getNewsForYear,
    getNewsForYearAndMonth,
} from "@/lib/news";
import { Suspense } from "react";

const FilterHeader = async ({ year, month }) => {
    const availNewsForYears = await getAvailableNewsYears();
    let links = availNewsForYears;

    if (year && !month) {
        links = getAvailableNewsMonths(year);
    }

    if (year && month) {
        links = [];
    }

    if (
        (year && !availNewsForYears.includes(year)) ||
        (month && !getAvailableNewsMonths(year).includes(month))
    ) {
        throw new Error("Invalid filter.");
    }

    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map((link) => {
                        const href = year
                            ? `/archive/${year}/${link}`
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
    );
};
const FilteredNews = async ({ year, month }) => {
    let news = [];

    if (year && !month) {
        news = await getNewsForYear(year);
    } else if (year && month) {
        news = await getNewsForYearAndMonth(year, month);
    }

    let newsContent = <p>No news found for the selected period.</p>;

    if (news && news.length > 0) {
        newsContent = <NewsGrid news={news} />;
    }

    return newsContent;
};
const FilteredNewsPage = async (props) => {
    const { params } = props;

    const selectedYear = params.filter?.[0];
    const selectedMonth = params.filter?.[1];

    return (
        <>
            <Suspense fallback={<p>Loading filter...</p>}>
                <FilterHeader year={selectedYear} month={selectedMonth} />
            </Suspense>
            <Suspense fallback={<p>Loading news...</p>}>
                <FilteredNews year={selectedYear} month={selectedMonth} />
            </Suspense>
        </>
    );
};

export default FilteredNewsPage;
