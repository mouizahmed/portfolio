import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { IBM_Plex_Mono } from '@next/font/google';

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  weight: ['400'],
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className={`${ibmPlexMono.variable} font-mono`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
