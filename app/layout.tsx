import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import SchemaMarkup from './schema';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Atlas Intelligence | AI Education Platform by Atlas Group UK',
  description: 'Atlas Intelligence by Atlas Group is an AI-powered education platform that revolutionizes learning with smart tools, flashcards, and curriculum assistance for students and educators.',
  keywords: 'Atlas Intelligence, Atlas AI, Atlas Education, Atlas Group, educational AI app, iOS education app, AI flashcards, study help, learning assistant, student AI tool, educational technology, exam preparation, curriculum assistance, UK education AI',
  authors: [{ name: 'Atlas Group' }],
  category: 'Education',
  creator: 'Atlas Group',
  publisher: 'Atlas Group',
  applicationName: 'Atlas Intelligence',
  metadataBase: new URL('https://www.atlasintel.co.uk'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: 'https://i.imgur.com/YOAmR5d.png',
    apple: 'https://i.imgur.com/YOAmR5d.png',
    shortcut: 'https://i.imgur.com/YOAmR5d.png',
  },
  openGraph: {
    title: 'Atlas Intelligence | AI Education Platform by Atlas Group UK',
    description: 'Atlas Intelligence by Atlas Group is an AI-powered education platform that revolutionizes learning with smart tools, flashcards, and curriculum assistance for students and educators.',
    type: 'website',
    url: 'https://www.atlasintel.co.uk',
    siteName: 'Atlas Intelligence by Atlas Group',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.atlasintel.co.uk/atlas-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Atlas Intelligence - The AI-powered educational companion by Atlas Group',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Intelligence | AI Education Platform by Atlas Group UK',
    description: 'Atlas Intelligence by Atlas Group is an AI-powered education platform that revolutionizes learning with smart tools, flashcards, and curriculum assistance for students and educators.',
    images: ['https://www.atlasintel.co.uk/atlas-og-image.jpg'],
    creator: '@AtlasGroupUK',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SchemaMarkup />
        <link rel="icon" href="https://i.imgur.com/YOAmR5d.png" />
        <link rel="apple-touch-icon" href="https://i.imgur.com/YOAmR5d.png" />
        <link rel="shortcut icon" href="https://i.imgur.com/YOAmR5d.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}