import React from "react";
import Header from "../components/Header/Header";
import BookSearch from "../components/Search/BookSearch";
import FeatCard from "../components/Featured/FeatCard";
import Footer from "../components/Footer/Footer";
import LazyImage from "../components/LazyImage/LazyImage";

function HomePage() {
  return (
    <div>
      <Header />
      {/* Main content area */}
      <main className="flex-1 overflow-y-auto">
        <div className="h-[65px] bg-purple-200"></div>
        <section className="award margin bg-purple-200">
          <div className="details">
            <h1 className="py-4">Find Your Favorite — 1200+ Books Available</h1>
            <BookSearch />
          </div>
          <LazyImage 
            src="/assets/images/books-search.webp" 
            alt="Books Search"
            className="w-auto h-auto"
          />
        </section>
        <FeatCard title="New Releases" />
        <FeatCard title="Top Rated Books" />
        <FeatCard title="Our Suggestion" />
        <FeatCard title="Most Popular Books" />
        <Footer />
      </main>
    </div>
  );
}

export default HomePage;