export const metadata = {
  title: "Xcurzen — Transform Army AI",
  description: "Local excursions meet agentic ops. Tiny site, big brain.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0, background: "#0b0f14", color: "#e6f1ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>{children}</div>
      </body>
    </html>
  );
}
