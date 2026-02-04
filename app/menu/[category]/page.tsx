"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  menuCategories,
  menuItems,
  isServingNow,
  getAvailabilityText,
} from "@/lib/menu-data";
import { ArrowLeft, Search, X } from "lucide-react";

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.category as string;

  const category = menuCategories.find((c) => c.id === categoryId);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const filteredItems = useMemo(() => {
    let items = menuItems.filter((item) => item.category === categoryId);

    if (activeSubcategory) {
      items = items.filter((item) => item.subcategory === activeSubcategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description?.toLowerCase().includes(query)
      );
    }

    return items;
  }, [categoryId, activeSubcategory, searchQuery]);

  if (!category) {
    return (
      <>
        <Header />
        <main className="pt-20 md:pt-24 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl font-semibold text-foreground mb-4">
              Category Not Found
            </h1>
            <Button asChild variant="outline" className="rounded-full bg-transparent">
              <Link href="/menu">Back to Menu</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const serving = isServingNow(category.availability);
  const availabilityText = getAvailabilityText(category.availability);

  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24 min-h-screen bg-background">
        {/* Header */}
        <div className="sticky top-16 md:top-20 z-40 bg-background border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Link
                  href="/menu"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                  aria-label="Back to menu"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                  <h1 className="font-serif text-2xl font-semibold text-foreground">
                    {category.name}
                  </h1>
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        serving ? "bg-green-500" : "bg-destructive"
                      }`}
                    />
                    <span className="text-sm text-muted-foreground">
                      {serving ? "Serving Now" : "Not Available"} • {availabilityText}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                aria-label="Search"
              >
                {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
              </button>
            </div>

            {/* Search Bar */}
            {isSearchOpen && (
              <div className="mt-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search items..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 rounded-full"
                    autoFocus
                  />
                </div>
              </div>
            )}

            {/* Subcategory Tabs */}
            {category.subcategories && category.subcategories.length > 0 && (
              <div className="mt-4 flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
                <button
                  onClick={() => setActiveSubcategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeSubcategory === null
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  All
                </button>
                {category.subcategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setActiveSubcategory(sub)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      activeSubcategory === sub
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Items List */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No items found</p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {filteredItems.map((item) => (
                <div key={item.id} className="py-6 flex gap-4">
                  {/* Image */}
                  {item.image ? (
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 rounded bg-border" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground mb-1">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="text-muted-foreground text-sm line-clamp-2">
                            {item.description}
                          </p>
                        )}
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex gap-2 mt-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs bg-accent/30 text-accent-foreground px-2 py-0.5 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="text-right flex-shrink-0">
                        {item.priceOptions ? (
                          <div className="space-y-1">
                            {item.priceOptions.map((opt) => (
                              <div key={opt.label} className="text-sm">
                                <span className="text-muted-foreground">{opt.label}: </span>
                                <span className="font-semibold text-primary">{opt.price}</span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <span className="font-semibold text-primary text-lg">
                            {item.price}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
