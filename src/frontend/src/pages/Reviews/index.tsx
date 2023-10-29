import "./Reviews.scss";

const Reviews = () => {
  return (
    <main className="reviews">
      <h1 className="title">Компании, которые нам доверяют</h1>
      <div className="companies">
        <img src="/images/reviews/companies.svg" alt="" />
      </div>
      <div className="why">
        <h1 className="title">Почему выбирают ПрофТестиум</h1>
        <div className="wrapper">
          <div className="col1">
            <div className="logo">
              <img src="/images/reviews/leroymerlin.svg" alt="" />
            </div>
            <div className="text">
              <p>
                "Мы&nbsp;выбрали ПрофТестиум за&nbsp;зрелость, потенциал
                и&nbsp;возможность совместного развития. Для нас ПрофТестиум&nbsp;—
                это возможность получить ген масштабируемости и&nbsp;внедрить
                его в&nbsp;ДНК нашего бизнеса"
              </p>
            </div>
            <div className="author">
              <p>- Дмитрий Шостко,</p>
              <p>Chief Data Officer «Леруа Мерлен Восток»</p>
            </div>
          </div>
          <div className="col2"></div>
        </div>
      </div>
    </main>
  );
};

export default Reviews;
