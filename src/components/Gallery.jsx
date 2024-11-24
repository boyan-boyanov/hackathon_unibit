import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Gallery = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showChalenge, setShowChalenge] = useState(false);
  const [randomFoods, setRandomFoods] = useState([]);
  const [player, setPlayer] = useState({
    level: 1,
    exp: 0,
    questionsAnswered: 0,
  });
  const [currentFood, setCurrentFood] = useState(null);
  const [answer, setAnswer] = useState("");
  const [quizMessage, setQuizMessage] = useState("");
  const [currentChalenge, setCurrentChalenge] = useState(null);

  const foods = [
    { name: "Хала Ака Пухала", img: "hala" },
    { name: "Рогат пъпеш", img: "rogat" },
    { name: "Броколи романеско", img: "brokoli" },
    { name: "Рамбутан", img: "rambutan" },
    { name: "Мангостан", img: "mangostan" },
    { name: "Акее", img: "akee" },
    { name: "Акеби", img: "akebi" },
    { name: "Драконов плод", img: "dragon" },
    { name: "Джакфрут", img: "jackfruit" },
    { name: "Салак", img: "salak" },
    { name: "Карамбол", img: "karambol" },
    { name: "Ръката на буда", img: "buda" },
    { name: "Лилав сладък картоф", img: "sweetpotato" },
    { name: "Шоколадова ябълка", img: "chokolateapple" },
    { name: "Дуриан", img: "durian" },
    { name: "Купуасу", img: "kupy" },
    { name: "Джаботикаба", img: "jabotikaba" },
    { name: "Личи", img: "lichi" },
    { name: "Черимоя", img: "cherimoya" },
  ];

  const challenges = [
    { name: "Подскоци", description: "Направи 20 подскока", img: "jump" },
    {
      name: "Баланс на ляв крак",
      description: "Стой на ляв крак 1 минута",
      img: "leg",
    },
    {
      name: "Баланс на десен крак",
      description: "Стой на десен крак 1 минута",
      img: "leg",
    },
    {
      name: "Точност с хартиена топка",
      description:
        "Направи хартиена топка и оцели пластмасова чаша 3 пъти подред",
      img: "paper-ball",
    },
    {
      name: "Лицеви опори",
      description: "Направи 10 лицеви опори",
      img: "push-ups",
    },
    {
      name: "Книга на главата",
      description:
        "Сложи книга на главата и без да я докосваш с ръце, мини през стаята.",
      img: "book-balance",
    },
    {
      name: "Танцов маратон",
      description: "Пусни си музика и танцувай 5 минути без да спираш",
      img: "dance",
    },
    {
      name: "Цел с хартиен самолет",
      description:
        "Направи хартиен самолети и уцели пластмасова бутилка от 5 крачки",
      img: "paper-plane",
    },
    {
      name: "Домашен боулинг",
      description:
        "Използвайте 3 пластмасови бутилки за кегли и мека топка. Събори всички бутилки от 5 крачки разстояние.",
      img: "bowling",
    },
    { name: "Клекове", description: "Клекни 20 пъти", img: "squats" },
    {
      name: "Патешко ходене",
      description: "Обиколи стаята на патешко ходене 2 пъти",
      img: "duck-walk",
    },
  ];

  const getRandomFoods1 = () => {
    const shuffled = [...foods].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 8);
  };

  const getRandomFood = () => {
    const randomNumber = Math.floor(Math.random() * foods.length);
    return foods[randomNumber];
  };

  const getRandomChalenge = () => {
    const randomNumber = Math.floor(Math.random() * challenges.length);
    return challenges[randomNumber];
  };

  const calculateLevelUp = (exp) => {
    let level = 1;
    let expForNextLevel = 1000;

    while (exp >= expForNextLevel) {
      exp -= expForNextLevel;
      level++;
      expForNextLevel = Math.ceil(expForNextLevel * 1.6); // Increase by 60%
    }

    return { level, remainingExp: exp, nextLevelExp: expForNextLevel };
  };
  const handleChalengeSubmit = (answer) => {
    if (answer) {
      const newExp = player.exp + 100;
      const levelData = calculateLevelUp(newExp);

      setPlayer((prev) => ({
        ...prev,
        level: levelData.level,
        exp: levelData.remainingExp,
        questionsAnswered: prev.questionsAnswered + 1,
      }));
      setQuizMessage("Браво!Ти спечели 100 точки.");
    } else {
      setQuizMessage("Не се отказвай! Другият път ще успееш.");
    }

    // Show a new chalenge
    setCurrentChalenge(getRandomChalenge());
    setAnswer("");
  };

  const handleAnswerSubmit = () => {
    if (player.questionsAnswered >= 10) {
      setQuizMessage(
        "Ти отговори на всичките 10 въпроса за днес! Пробвай пак утре."
      );
      setShowQuiz(false);
      return;
    }

    if (
      currentFood &&
      answer.trim().toLowerCase() === currentFood.name.toLowerCase()
    ) {
      // Correct answer, gain EXP
      const newExp = player.exp + 100;
      const levelData = calculateLevelUp(newExp);

      setPlayer((prev) => ({
        ...prev,
        level: levelData.level,
        exp: levelData.remainingExp,
        questionsAnswered: prev.questionsAnswered + 1,
      }));
      setQuizMessage("Правилно!Ти спечели 100 точки.");
    } else {
      setQuizMessage("Неправилно! Пробвай пак.");
    }

    // Show a new question
    setCurrentFood(getRandomFood());
    setAnswer("");
  };

  useEffect(() => {
    setRandomFoods(getRandomFoods1());
  }, []);

  const startChalenge = () => {
    setCurrentChalenge(getRandomChalenge());
    setShowChalenge(true);
    setShowQuiz(false);
  };

  const startQuiz = () => {
    if (player.questionsAnswered >= 10) {
      setQuizMessage(
        "Ти отговори на всичките 10 въпроса за днес! Пробвай пак утре."
      );
      return;
    }

    setCurrentFood(getRandomFood());
    setShowChalenge(false);
    setShowQuiz(true);
  };

  return (
    <>
      <div className="tm-section-wrap">
        <img className="tm-parallax" src="/assets/img/games.png"></img>
        <section id="gallery" className="tm-section">
          <h2 className="tm-text-primary">Игри</h2>
          <hr className="mb-5" />

          {/* Player Stats */}
          <div className="player-stats">
            <div>
              <h3>Статус на играча</h3>
              <p>Ниво: {player.level}</p>
              <p>
                Точки опит: {player.exp} /{" "}
                {calculateLevelUp(player.exp).nextLevelExp}
              </p>
              <p>Отговорени въпроси днес: {player.questionsAnswered}/10</p>
            </div>
            <div className="avatar-container">
              <figure className="effect-honey tm-gallery-item portrait">
                <img src={"/assets/img/avatar.png"} alt="Image" />
                <figcaption>
                  <h2>
                    <i>Avatar</i>
                  </h2>
                </figcaption>
              </figure>
            </div>
          </div>

          <ul className="tm-gallery-links">
            <li>
              <a className="active tm-gallery-link" data-filter="*">
                <i className="fas fa-layer-group tm-gallery-link-icon"></i>
                Всички
              </a>
            </li>
            <li onClick={() => startChalenge()}>
              <a className="tm-gallery-link" data-filter="portrait">
                <i className="fas fa-portrait tm-gallery-link-icon"></i>
                Спорт
              </a>
            </li>
            <li>
              <a className="tm-gallery-link" data-filter="nature">
                <i className="fas fa-leaf tm-gallery-link-icon"></i>
                Плодове
              </a>
            </li>
            <li>
              <a className="tm-gallery-link" data-filter="animal">
                <i className="fas fa-paw tm-gallery-link-icon"></i>
                Зеленчуци
              </a>
            </li>
            <li onClick={() => startQuiz()}>
              <a className="tm-gallery-link" data-filter="building">
                <i className="far fa-building tm-gallery-link-icon"></i>
                Викторина
              </a>
            </li>
          </ul>
          <div className="tm-gallery">
            {randomFoods.map((food, index) => (
              <figure
                key={index}
                className="effect-honey tm-gallery-item portrait"
              >
                <img
                  src={"/assets/img/foods/" + food.img + ".jpg"}
                  alt="Image"
                />
                <figcaption>
                  <h2>
                    <i>{food.name}</i>
                  </h2>
                  <a href={`/assets/img/foods/${food.img}.jpg`}>View more</a>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>

      {/* Quiz Modal */}
      {showQuiz && (
        <div className="quiz-modal">
          <button className="close-modal" onClick={() => setShowQuiz(false)}>
            X
          </button>
          <div className="quiz-modal-content">
            <h3 className="quiz-modal-question">
              Какво е името на тази храна?
            </h3>
            <img
              src={`/assets/img/foods/${currentFood.img}.jpg`}
              alt={currentFood.name}
            />
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Въведи своя отговор"
            />
            <button onClick={handleAnswerSubmit}>Изпрати</button>
            <p>{quizMessage}</p>
          </div>
        </div>
      )}

      {/* Chalenges Modal */}
      {showChalenge && (
        <div className="quiz-modal">
          <button
            className="close-modal"
            onClick={() => setShowChalenge(false)}
          >
            X
          </button>
          <div className="quiz-modal-content">
            <h1 className="quiz-modal-question">{currentChalenge.name}</h1>
            <h3>{currentChalenge.description}</h3>
            <img
              src={`/assets/img/chalenges/${currentChalenge.img}.png`}
              alt={currentChalenge.name}
            />
            <h5>Успя ли да завършиш предизвикателството?</h5>
            <div className="quiz-modal-buttons">
              <button onClick={() => handleChalengeSubmit(true)}>Да</button>
              <button onClick={() => handleChalengeSubmit(false)}>Не</button>
            </div>
            <p>{quizMessage}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
