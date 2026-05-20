import "./globals.css";

export const metadata = {
  title: "PMB Universitas Handayani Makassar",
  description: "Penerimaan Mahasiswa Baru - Universitas Handayani Makassar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
