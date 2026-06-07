import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Deal Drop",
  description: "A platform for sharing and discovering the best deals and discounts online.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
