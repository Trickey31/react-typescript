import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Evondev",
    image: "",
    stars: 5,
    premiumUser: true,
    date: "05/09/2022",
  },
  {
    name: "CharkaUI",
    image: "",
    stars: 4,
    premiumUser: false,
    date: "03/08/2022",
  },
  {
    name: "React Query",
    image: "",
    stars: 3,
    premiumUser: false,
    date: "04/08/2022",
  },
];

function App() {
  const travelItem: {
    image: string;
    name: string;
    totalReviews: number;
    rating: number;
    location: string;
    price: number;
    date: string;
    departure: string;
    features: {
      wifi: boolean;
      parking: boolean;
      offer: boolean;
    };
  }[] = [
    {
      image: "https://source.unsplash.com/random",
      name: "New Zealand",
      totalReviews: 5,
      rating: 5,
      location: "New Zealand",
      price: 10,
      date: "31/01/2002",
      departure: "Viet Nam",
      features: { wifi: true, parking: true, offer: true },
    },
  ];
  const [count, setCount] = useState(0);
  function displayReview(totalReviews: number, name: string, premium: boolean) {
    return (
      <>
        Review total <strong>{totalReviews}</strong> | Last reviewed by{" "}
        <strong>{name}</strong> {premium ? "⭐️" : ""}
      </>
    );
  }
  return (
    <div>
      <div className="review">
        <div className="review-image">
          <img src="https://source.unsplash.com/random" alt="" />
        </div>
        <div className="review-info">
          {displayReview(
            reviews.length,
            reviews[0].name,
            reviews[0].premiumUser
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
