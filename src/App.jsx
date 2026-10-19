
import { useState } from "react";
import "./App.css";

const flowerTypes = [
  "🌷",
  "🪷",
  "🌷",
  "🪷",
  "🌷",
  "🪷",
  "🌷",
  "🪷",
  "✨",
  "💕",
];

const floatingFlowers = Array.from(
  { length: 100 },
  (_, index) => flowerTypes[index % flowerTypes.length]
);

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="page">
      {isOpen && (
        <div className="flower-shower" aria-hidden="true">
          {floatingFlowers.map((flower, index) => (
            <span
              className="floating-flower"
              key={index}
              style={{
                left: `${(index * 37 + 7) % 100}%`,
                animationDelay: `${(index % 12) * 0.35}s`,
                animationDuration: `${6 + (index % 6)}s`,
                fontSize: `${20 + (index % 5) * 6}px`,
              }}
            >
              {flower}
            </span>
          ))}
        </div>
      )}

      <section className="letter-card">
        <p className="eyebrow">
          ✦ a little something for you ✦
        </p>

        <h1>
          Hey, cutie <span>♡</span>
        </h1>

        <p className="intro">
          I made you a tiny little corner of the internet.
          Tap the envelope when you're ready, mi'lady.
        </p>

        <div className={`envelope ${isOpen ? "envelope-open" : ""}`}>
          <div className="envelope-flap" />
          <div className="envelope-heart">♡</div>
        </div>

        <button
          className="open-button"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close your letter" : "Open your letter ♡"}
        </button>

        {isOpen && (
          <article className="love-letter">
            <p className="letter-heading">
              a tiny little reminder for you
            </p>

            <p>heyyy, cutie ♡</p>

            <p>
              if you're reading this after a long day, first of
              all, take a little breather.
            </p>

            <p>
              i don't know how your day went, but i wanted to
              make you something that might make you smile,
              even if it's just for a little bit.
            </p>

            <div className="memory-photo">
              <img
                src="/veda.jpeg"
                alt="A little memory together"
              />
              <p>one of my favourite little moments ♡</p>
            </div>

            <p>
              you have this free-bird energy that i really like.
              you do your own thing, and then there's the way
              you get a little shy and nervous sometimes.
              it's honestly adorable.
            </p>

            <p>
              and your smile? yeah, i'm not even gonna try to
              act cool about that one.
            </p>

            <p>
              i could listen to you yap about the most random
              things for hours. especially because i never know
              what you're gonna say next.
            </p>

            <p>
              remember when we were both getting all nervous
              and overwhelmed while holding hands, and you
              randomly told me that i needed to get my belly
              button pierced?
            </p>

            <p>
              girl, how does your brain even work? i swear,
              you come up with the most random things at the
              most unexpected times. never change, okay?
            </p>

            <p>
              but jokes aside, i like how i can just be myself
              around you. i don't feel like i have to be someone
              else, and i really appreciate that.
            </p>

            <p>
              so if today wasn't your day, take a breath,
              get comfy, and be a little kinder to yourself,
              okay?
            </p>

            <p>
              you don't have to figure everything out tonight.
              you don't have to force yourself to be happy,
              either. if all you did today was get through it,
              that's enough.
            </p>

            <p>
              i hope this little corner of the internet reminds
              you that even on the not-so-good days, there's
              still room for a small smile.
            </p>

           
<p>
  <strong>
    take care of yourself, mi'lady.
    i hope this little corner makes you smile,
    whenever you need it. ♡
  </strong>
</p>


            <p className="letter-signoff">
              — your cool code guy
            </p>

            <p className="letter-footer">
              p.s. i still haven't recovered from the belly
              button piercing suggestion. i may need emotional
              compensation.
            </p>
          </article>
        )}

        <p className="little-note">
          made with a little bit of hehe
        </p>
      </section>

      <div className="floating-heart heart-one">♡</div>
      <div className="floating-heart heart-two">♡</div>
      <div className="floating-heart heart-three">✦</div>
    </main>
  );
}

export default App;
