export const metadata = {
  title: "Xcurzen — Ocean & Jungle Adventures",
  description: "Connecting travelers with trusted local experiences in Corpus Christi & Costa Rica."
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{fontFamily: 'system-ui, sans-serif', margin: 0}}>{children}</body>
    </html>
  );
}
