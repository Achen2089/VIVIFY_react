const defaultKeyframe = `
@keyframes animate {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
`;

const breatheKeyframe = `
@keyframes animate
{
  0% {
    -webkit-filter: drop-shadow(-0.75px 0px 6px #ff0000);
    filter: drop-shadow(-0.75px 0px 15px #ff0000);
    stroke: #ff0000;
  }
  20% {
    -webkit-filter: drop-shadow(-0.75px 0px 6px #ffff00);
    filter: drop-shadow(-0.75px 0px 15px #ffff00);
    stroke: #ffff00;
  } 
  400% {
    -webkit-filter: drop-shadow(-0.75px 0px 6px v);
    filter: drop-shadow(-0.75px 0px 15px #00ff00);
    stroke: #00ff00;
  }
  60% {
    -webkit-filter: drop-shadow(-0.75px 0px 6px #00ffff);
    filter: drop-shadow(-0.75px 0px 15px #00ffff);
    stroke: #00ffff;
  }
  80% {
    -webkit-filter: drop-shadow(-0.75px 0px 6px #0000ff);
    filter: drop-shadow(-0.75px 0px 15px #0000ff);
    stroke: #0000ff;
  } 
  100% {
    -webkit-filter: drop-shadow(-0.75px 0px 6px #ff00ff);
    filter: drop-shadow(-0.75px 0px 15px #ff00ff);
    stroke: #ff00ff;
  }
}
`;

const colors = [
  '#ff0000',
  '#ffff00',
  '#00ff00',
  '#00ffff',
  '#0000ff',
  '#ff00ff',
];

module.exports = { defaultKeyframe, breatheKeyframe, colors };
