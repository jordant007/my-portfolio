import './globals.css';

export const metadata = {
  title: 'Your Portfolio',
  description: 'Your Portfolio Description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
