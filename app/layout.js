import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div style={{ marginTop: "80px" }}>{children}</div>
      </body>
    </html>
  );
}
