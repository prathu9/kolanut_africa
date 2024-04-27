import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
