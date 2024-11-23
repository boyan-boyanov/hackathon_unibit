import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Gallery = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [randomFoods, setRandomFoods] = useState([]);
  const [player, setPlayer] = useState({
    level: 1,
    exp: 0,
    questionsAnswered: 0,
  });
  const [currentFood, setCurrentFood] = useState(null);
  const [answer, setAnswer] = useState("");
  const [quizMessage, setQuizMessage] = useState("");

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

  const getRandomFoods1 = () => {
    const shuffled = [...foods].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 8);
  };

  const getRandomFood = () => {
    const randomNumber = Math.floor(Math.random() * foods.length);
    return foods[randomNumber];
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

  const handleAnswerSubmit = () => {
    if (player.questionsAnswered >= 10) {
      setQuizMessage(
        "You have answered all 10 questions for today! Try again tomorrow."
      );
      setShowQuiz(false);
      return;
    }

    if (answer.trim().toLowerCase() === currentFood.name.toLowerCase()) {
      // Correct answer, gain EXP
      const newExp = player.exp + 100;
      const levelData = calculateLevelUp(newExp);

      setPlayer((prev) => ({
        ...prev,
        level: levelData.level,
        exp: levelData.remainingExp,
        questionsAnswered: prev.questionsAnswered + 1,
      }));
      setQuizMessage("Correct! You've earned 100 EXP.");
    } else {
      setQuizMessage("Incorrect! Try again.");
    }

    // Show a new question
    setCurrentFood(getRandomFood());
    setAnswer("");
  };

  useEffect(() => {
    setRandomFoods(getRandomFoods1());
  }, []);

  const startQuiz = () => {
    console.log("startQuiz");

    if (player.questionsAnswered >= 10) {
      setQuizMessage(
        "You have answered all 10 questions for today! Try again tomorrow."
      );
      return;
    }

    setCurrentFood(getRandomFood());
    setShowQuiz(true);
  };
  console.log(currentFood);

  return (
    <>
      <div className="tm-section-wrap">
        <img className="tm-parallax" src="/assets/img/games.png"></img>
        <section id="gallery" className="tm-section">
          <h2 className="tm-text-primary">Игри</h2>
          <hr className="mb-5" />

          {/* Player Stats */}
          <div className="player-stats">
            <h3>Статус на играча</h3>
            <p>Ниво: {player.level}</p>
            <p>
              Точки опит: {player.exp} /{" "}
              {calculateLevelUp(player.exp).nextLevelExp}
            </p>
            <p>Отговорени въпроси днес: {player.questionsAnswered}/10</p>
          </div>

          <ul className="tm-gallery-links">
            <li>
              <a href="/;" className="active tm-gallery-link" data-filter="*">
                <i className="fas fa-layer-group tm-gallery-link-icon"></i>
                Всички
              </a>
            </li>
            <li>
              <a href="/;" className="tm-gallery-link" data-filter="portrait">
                <i className="fas fa-portrait tm-gallery-link-icon"></i>
                Спорт
              </a>
            </li>
            <li>
              <a href="/;" className="tm-gallery-link" data-filter="nature">
                <i className="fas fa-leaf tm-gallery-link-icon"></i>
                Плодове
              </a>
            </li>
            <li>
              <a href="/;" className="tm-gallery-link" data-filter="animal">
                <i className="fas fa-paw tm-gallery-link-icon"></i>
                Зеленчуци
              </a>
            </li>
            <li onClick={() => startQuiz()}>
              <a href="#" className="tm-gallery-link" data-filter="building">
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
                  <a href="/assets/img/gallery/portrait-01.jpg">View more</a>
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
          <h3>What is the name of this food?</h3>
          <img
            src={`/assets/img/foods/${currentFood.img}.jpg`}
            alt={currentFood.name}
          />
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter your answer"
          />
          <button onClick={handleAnswerSubmit}>Submit</button>
          <p>{quizMessage}</p>
        </div>
      )}
    </>
  );
};

export default Gallery;
