import Clock from './Clock';

export default function ClockList({ quantities = [] }) { 
  // ei ClockList function, {quantities} k props hishebe pabe, from App.js; keu jodi vule kono value ne dey, tai amra default value [] dlm
  return(
    // *** jodi [1, 2, 3] amn number na theke object type kisu thake! that is, kono unique identifier jodi na thake, in that case
    
    <>
      <div>
      
        {/* {quantities.map( (key) => ( // unique key nilm for each clock, BUT***
          <Clock key={key} />
        ))} */}

        {quantities.map( () => (
          <Clock key={Math.random()} />
        ))}
      </div>
      
      {/* V.V.I. eikhane, quantities.map() akta ARRAY, say arr1, key gulo sudhu ei arr1 er mddhei unique hoite hbe, say ei arr1 er akta key=1, pore abr jokhn amra arekta arr2 (say) quantities.map nibo, tar o amn key thakte pare jar value 1; so key MUST NOT be globally unique, but akta single array er mddhe unique hoite hbe */}

      {/* <div>
        {quantities.map( (key) => (
          <Clock key={key} />
        ))}
      </div> */}
    </>
  );
}