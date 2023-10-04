import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from './components/NavBar';
import { StoreProvider } from './redux/StoreProvider';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DMP MDT',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StoreProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <body className="bg-slate-700 overflow-auto scroll-smooth scroll-hidden  ">
          {children}
        </body>
      </StoreProvider>
    </html>
  );
}
