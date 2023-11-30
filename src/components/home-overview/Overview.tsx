import dataHelper from "@/helpers/dataHelper";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Overview = (): JSX.Element => {
  const { overviewData } = dataHelper();
  const [counts, setCounts] = useState([0, 0, 0]);
  const [shouldIncrement, setShouldIncrement] = useState(false);

  //init useinView
  const { ref, inView } = useInView({
    threshold: 0,
  });

  //useEffect pour observer le inView aprés le rendu
  useEffect(() => {
    if (inView && shouldIncrement) {
      //intervale pour ralentir le compteur
      const interval = setInterval(() => {
        setCounts((prevCounts) =>
          prevCounts.map((prevCount, index) =>
            prevCount < overviewData[index].statisitic
              ? prevCount + 1
              : prevCount
          )
        );
      }, 100);

      return () => clearInterval(interval);
    }
  }, [inView, shouldIncrement]);

  
  useEffect(() => {
    if (inView && !shouldIncrement) {
      setShouldIncrement(true);
    }
  }, [inView]);

  return (
    <section id="home-overview">
      <div id="home-overview__container">
        <div className="row" ref={ref}>
          {overviewData.map((item, index) => (
            <div className="col-4" key={index}>
              <div className="overview-item" id={item.id}>
                <h3>{counts[index]}</h3>
                <h5>{item.label}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
