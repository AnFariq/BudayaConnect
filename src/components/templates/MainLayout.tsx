import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Layout from "./Layout";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Header />
      <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {children}
      </main>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
