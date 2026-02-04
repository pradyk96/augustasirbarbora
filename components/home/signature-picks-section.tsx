import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const signaturePicks = [
  {
    id: "royal-breakfast",
    name: "Royal Breakfast",
    description: "A lavish selection of eggs, bacon, sausages, toast, and seasonal accompaniments",
    price: "20€",
    image: "/images/menu/royal-breakfast.jpg",
  },
  {
    id: "avocado-toast",
    name: "Avocado Toast",
    description: "Smashed avocado on sourdough with poached egg and microgreens",
    price: "14€",
    image: "/images/menu/avocado-toast.jpg",
  },
  {
    id: "eggs-benedict",
    name: "Eggs Benedict",
    description: "Poached eggs with hollandaise sauce on English muffin",
    price: "12€",
    image: "/images/menu/eggs-benedict.jpg",
  },
  {
    id: "cottage-cheese-pancakes",
    name: "Cottage Cheese Pancakes",
    description: "Fluffy pancakes with fresh berries and maple syrup",
    price: "14€",
    image: "/images/menu/cottage-cheese-pancakes.jpg",
  },
  {
    id: "pink-latte",
    name: "Pink Latte",
    description: "Our signature pink beetroot latte",
    price: "6,50€",
    image: "/images/menu/pink-latte.jpg",
  },
  {
    id: "cheesecake",
    name: "Cheesecake",
    description: "Homemade cheesecake",
    price: "7€",
    image: "/images/menu/cheesecake.jpg",
  },
  {
    id: "chocolate-mousse",
    name: "Chocolate Mousse with Raspberries",
    description: "Rich chocolate mousse topped with fresh raspberries",
    price: "8€",
    image: "/images/menu/chocolate-mousse.jpg",
  },
  {
    id: "salmon-bagel",
    name: "Bagel with Salmon",
    description: "Smoked salmon, labneh, pickled wasabi, pickled red onions, cucumber + yuzu",
    price: "12€",
    image: "/images/menu/salmon-bagel.jpg",
  },
];

export function SignaturePicksSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-4">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Signature Picks
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Our most beloved dishes and drinks, crafted with passion
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-full self-start md:self-auto bg-transparent">
            <Link href="/menu">View Full Menu</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signaturePicks.map((item) => (
            <div
              key={item.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-foreground mb-1 truncate">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-semibold text-primary text-lg flex-shrink-0">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
