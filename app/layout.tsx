import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import SchemaMarkup from './schema';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Atlas Intelligence | AI-Powered Educational App for iOS',
  description: 'Atlas Intelligence is an AI-powered education app for iOS that helps students study smarter. Generate flashcards, search the web, get help with assignments, and explore topics across your curriculum.',
  keywords: 'educational AI app, iOS education app, AI flashcards, study help, learning assistant, student AI tool, atlas intelligence, educational technology, exam preparation, curriculum assistance',
  authors: [{ name: 'Atlas Group' }],
  category: 'Education',
  creator: 'Atlas Group',
  publisher: 'Atlas Group',
  applicationName: 'Atlas Intelligence',
  metadataBase: new URL('https://www.atlas-group.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Atlas Intelligence | AI-Powered Educational App for iOS',
    description: 'Atlas Intelligence is an AI-powered education app for iOS that helps students study smarter. Generate flashcards, search the web, get help with assignments, and explore topics across your curriculum.',
    type: 'website',
    url: 'https://www.atlas-group.uk',
    siteName: 'Atlas Intelligence',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.atlas-group.uk/atlas-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Atlas Intelligence - The AI-powered educational companion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Intelligence | AI-Powered Educational App for iOS',
    description: 'Atlas Intelligence is an AI-powered education app for iOS that helps students study smarter. Generate flashcards, search the web, get help with assignments, and explore topics across your curriculum.',
    images: ['https://www.atlas-group.uk/atlas-og-image.jpg'],
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