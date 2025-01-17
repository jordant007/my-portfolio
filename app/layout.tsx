import './globals.css';

export const metadata = {
  title: 'Jordan',
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
