import Typewriter from "typewriter-effect";

interface IbuttonHero {
  label: string;
  id:string
}

const Hero = (): JSX.Element => {
  const buttonHero: IbuttonHero[] = [
    { label: "Book my CV" , id:"btn1"},
    { label: "See my realisations" , id:"btn2"},
  ];

  return (
    <section id="home-hero">
      <div id="home-hero__container">
        <div className="row">
          <div className="col-6">
            <div className="section-header">
              <div className="title">
                <h1>
                  {" "}
                  Welcome to MY <span>PORTFOLIO</span>
                </h1>
              </div>
              <div className="subtitle mt-3">
                <h3>
                  <Typewriter
                    options={{
                      loop: true, // Active la boucle
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("I'm a Javascript Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("I'm fascinated by new technologies")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("I search best IT solutions")
                        .start();
                    }}
                  />
                </h3>
              </div>
              <div className="text mt-4">
                <p>
                  I'm a Javascript fullstack Developer, I am looking for
                  efficiency, effectiveness of all my programs , I'm using
                  mostly for dynamic Web App <b> REACT JS and TYPESCRIPT JS</b>{" "}
                  for frontend and <b>NODE JS </b> for serverside{" "}
                </p>
              </div>
              <div className="button mt-4">
                {buttonHero.map((item, index) => (
                  <div key={index}>
                    <button className="btn" id={`${item.id}`}>{item.label}</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="section-cover"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
