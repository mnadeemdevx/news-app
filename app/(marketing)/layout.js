import '../globals.css';

export const metadata = {
    title: 'News App',
    description: 'Every news is here!',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div id="page">{children}</div>
            </body>
        </html>
    );
}
