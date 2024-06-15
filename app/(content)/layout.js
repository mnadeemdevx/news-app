import { MainHeader } from '@/components';
import SharedRootLayout from '../layout';

export const metadata = {
    title: 'News App',
    description: 'Every news is here!',
};

export default function RootLayout({ children }) {
    return (
        <SharedRootLayout>
            <div id="page">
                <MainHeader />
                {children}
            </div>
        </SharedRootLayout>
    );
}
