import Review from "./Review"

const reviews = [
  {
    name: "Larry Capaja",
    score: "5 / 5",
    review:
      "Perfect! Five stars!",
    getImageSrc: () => require("../../assets/images/handsome.png"),
  },
  {
    name: "Norma Stitz",
    score: "5 / 5",
    review:
      "What a lovely place to eat",
      getImageSrc: () => require("../../assets/images/handsomette.png"),
  },
  {
    name: "Kerry Caverga",
    score: "5 / 5",
    review:
      "I love these bruschettas!",
      getImageSrc: () => require("../../assets/images/review1.jpg"),
  },
  {
    name: "Mike Hawk",
    score: "5 / 5",
    review:
      "I'll never give you up, Little Lemon!",
      getImageSrc: () => require("../../assets/images/review2.jpg"),
  },
];

function CustomersSay() {
  return (
    <section className="reviewArea">
      <h2>Testimonials</h2>
    <div className="reviewGrid">
      {reviews.map((review) => (<Review
        name={review.name}
        score={review.score}
        review={review.review}
        imageSrc={review.getImageSrc()}
      /> ))}
    </div>
    </section>
  );
}

  export default CustomersSay;