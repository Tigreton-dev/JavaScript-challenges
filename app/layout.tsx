import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import DataProvider from './context/dataContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Challenges',
    description: 'JavaScript algorithms challenges'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark" id="htmlElement">
            <body className={inter.className}>
                <Providers>
                    <DataProvider>{children}</DataProvider>
                </Providers>
            </body>
        </html>
    );
}
