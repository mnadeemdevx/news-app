import './globals.css';

export const metadata = {
    title: 'News App',
    description: 'Every news is here!',
};

export default function SharedRootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
