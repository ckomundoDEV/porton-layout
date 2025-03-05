import './globals.css';
import './styles.css';
import { Inter } from 'next/font/google';
import { Metadata, Viewport } from 'next';
import { ThemeProvider } from "./providers/ThemeProvider";
import { Toaster } from 'react-hot-toast';
import ScrollToTopButton from '@/components/buttons/ScrollToTopButton';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://portoneslux.com'), // Reemplaza con tu dominio real
  title: {
    default: 'PortonesLux | Portones Automáticos de Alta Gama',
    template: '%s | PortonesLux'
  },
  description: 'Diseño, fabricación e instalación de portones automáticos con un diseño exclusivo y tecnología de vanguardia para residencias y comercios.',
  keywords: ['portones automáticos', 'puertas automatizadas', 'accesos residenciales', 'portones eléctricos', 'automatización', 'seguridad'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://portoneslux.com', // Reemplaza con tu dominio real
    title: 'PortonesLux | Portones Automáticos de Alta Gama',
    description: 'Diseño, fabricación e instalación de portones automáticos con un diseño exclusivo y tecnología de vanguardia.',
    siteName: 'PortonesLux',
    images: [
      {
        url: '/og-image.jpg', // Asegúrate de crear esta imagen
        width: 1200,
        height: 630,
        alt: 'PortonesLux - Portones Automáticos de Alta Gama',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PortonesLux | Portones Automáticos de Alta Gama',
    description: 'Diseño, fabricación e instalación de portones automáticos con un diseño exclusivo y tecnología de vanguardia.',
    images: ['/twitter-image.jpg'], // Asegúrate de crear esta imagen
  },
  alternates: {
    canonical: 'https://portoneslux.com', // Reemplaza con tu dominio real
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="author" content="PortonesLux" />
      </head>
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased">
        <ThemeProvider>
          {children}
          <ScrollToTopButton />
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 5000,
              style: {
                background: '#333',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#4aed88',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 4000,
                iconTheme: {
                  primary: '#ff4b4b',
                  secondary: '#fff',
                },
              },
            }}
          />
        </ThemeProvider>
        <script dangerouslySetInnerHTML={{__html: `
          (function() {
            // Función para desplazar al inicio con prioridad máxima
            function forceScrollToTop() {
              if (!window.location.hash) {
                // Desplazamiento inmediato usando 'auto' para mayor compatibilidad
                window.scrollTo(0, 0);
                
                // Backup con desplazamiento instantáneo (para navegadores modernos)
                setTimeout(() => {
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'instant'
                  });
                }, 0);
              }
            }
            
            // Ejecutar inmediatamente durante la carga inicial
            forceScrollToTop();
            
            // También ejecutar cuando la ventana termine de cargar
            window.addEventListener('load', forceScrollToTop);
            
            // Ejecutar cuando cambie el historial (navegación)
            window.addEventListener('popstate', forceScrollToTop);
            
            // Para aplicaciones Next.js/React - ejecutar después de la hidratación
            document.addEventListener('DOMContentLoaded', forceScrollToTop);
            
            // Específico para Next.js - manejar cambios de ruta
            if (typeof window !== 'undefined' && window.next) {
              window.next.router.events.on('routeChangeComplete', forceScrollToTop);
            }
          })();
        `}} />
      </body>
    </html>
  )
}
