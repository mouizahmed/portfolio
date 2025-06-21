import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { Inter, Courier_Prime } from '@next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const courier = Courier_Prime({
  subsets: ['latin'],
  variable: '--font-courier',
  weight: ['400', '700'],
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className={`${inter.variable} ${courier.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
