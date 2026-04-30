export const MockData = {
  data: {
    cards: [
      // 🔹 Restaurant Info
      {
        card: {
          card: {
            info: {
              id: "12345",
              name: "Meghana Foods",
              cuisines: ["Biryani", "South Indian"],
              avgRating: "4.4",
              costForTwoMessage: "₹300 for two",
              areaName: "BTM Layout",
              sla: {
                deliveryTime: 30,
              },
            },
          },
        },
      },

      // 🔹 Section 1 - Recommended
      {
        card: {
          card: {
            title: "Recommended",
            itemCards: [
              {
                card: {
                  info: {
                    id: "1",
                    name: "Chicken Biryani",
                    description: "Aromatic basmati rice cooked with spicy chicken and herbs.",
                    price: 25000,
                    imageId: "chicken_biryani_img",
                    category: "Biryani",
                    ratings: {
                      aggregatedRating: {
                        rating: "4.5",
                        ratingCount: "1200+",
                      },
                    },
                  },
                },
              },
              {
                card: {
                  info: {
                    id: "2",
                    name: "Mutton Biryani",
                    description: "Slow-cooked mutton with rich spices and long grain rice.",
                    price: 32000,
                    imageId: "mutton_biryani_img",
                    category: "Biryani",
                    ratings: {
                      aggregatedRating: {
                        rating: "4.6",
                        ratingCount: "900+",
                      },
                    },
                  },
                },
              },
              {
                card: {
                  info: {
                    id: "3",
                    name: "Paneer Biryani",
                    description: "Delicious paneer chunks cooked with flavorful rice.",
                    price: 22000,
                    imageId: "paneer_biryani_img",
                    category: "Biryani",
                    ratings: {
                      aggregatedRating: {
                        rating: "4.3",
                        ratingCount: "500+",
                      },
                    },
                  },
                },
              },
            ],
          },
        },
      },

      // 🔹 Section 2 - Starters
      {
        card: {
          card: {
            title: "Starters",
            itemCards: [
              {
                card: {
                  info: {
                    id: "4",
                    name: "Chicken 65",
                    description: "Spicy deep-fried chicken with curry leaves.",
                    price: 18000,
                    category: "Starter",
                    ratings: {
                      aggregatedRating: {
                        rating: "4.4",
                        ratingCount: "800+",
                      },
                    },
                  },
                },
              },
              {
                card: {
                  info: {
                    id: "5",
                    name: "Paneer 65",
                    description: "Crispy paneer cubes tossed in spicy masala.",
                    price: 16000,
                    category: "Starter",
                    ratings: {
                      aggregatedRating: {
                        rating: "4.2",
                        ratingCount: "400+",
                      },
                    },
                  },
                },
              },
            ],
          },
        },
      },

      // 🔹 Section 3 - Beverages
      {
        card: {
          card: {
            title: "Beverages",
            itemCards: [
              {
                card: {
                  info: {
                    id: "6",
                    name: "Coca Cola",
                    description: "Refreshing cold drink.",
                    price: 4000,
                    category: "Beverage",
                  },
                },
              },
              {
                card: {
                  info: {
                    id: "7",
                    name: "Buttermilk",
                    description: "Cool and refreshing traditional drink.",
                    price: 3000,
                    category: "Beverage",
                  },
                },
              },
            ],
          },
        },
      },
    ],
  },
};