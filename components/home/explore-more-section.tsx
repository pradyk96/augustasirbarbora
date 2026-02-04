import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { menuCategories, isServingNow, getAvailabilityText } from "@/lib/menu-data";

export function ExploreMoreSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Explore More
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our complete menu offerings
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="divide-y divide-border">
            {menuCategories.map((category) => {
              const serving = isServingNow(category.availability);
              const availabilityText = getAvailabilityText(category.availability);

              return (
                <Link
                  key={category.id}
                  href={`/menu/${category.id}`}
                  className="group flex items-center justify-between py-6 hover:bg-muted/50 -mx-4 px-4 rounded-lg transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
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
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
