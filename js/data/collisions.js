const collisionsLevel1 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0,
    0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

const collisionsLevel2 = [292, 292, 292, 292, 292, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    292, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    292, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    292, 292, 292, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 292, 0, 0, 292, 0, 0, 292, 292, 292, 292, 292, 292, 0,
    0, 292, 292, 292, 0, 0, 292, 292, 292, 292, 0, 0, 0, 0, 292, 0,
    0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 292, 292, 292, 292, 292, 0,
    0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0, 0, 0, 0
];

const collisionsLevel3 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 0,
    0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0,
    0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0,
    0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 250, 250, 250, 250, 250, 0,
    0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0, 0,
    0, 250, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 250, 0, 0,
    0, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

const collisionsLevel4 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 0,
    0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0,
    0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0, 0, 250, 0,
    0, 250, 0, 0, 0, 0, 0, 250, 0, 0, 250, 250, 250, 250, 250, 0,
    0, 250, 0, 0, 0, 0, 0, 0, 250, 0, 0, 0, 0, 250, 0, 0,
    0, 250, 250, 0, 0, 0, 0, 0, 250, 250, 0, 0, 250, 250, 0, 0,
    0, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

const collisionsLevel5 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 0,
    0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0,
    0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0, 250, 250, 0,
    0, 250, 250, 0, 0, 0, 0, 250, 0, 0, 250, 250, 250, 250, 250, 0,
    0, 250, 0, 0, 0, 250, 250, 250, 0, 0, 0, 0, 0, 250, 0, 0,
    0, 250, 250, 0, 0, 250, 250, 250, 250, 0, 0, 0, 250, 250, 0, 0,
    0, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

const collisionsLevel6 = [
    250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 0, 0, 0, 0,
    250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0, 0, 0, 0,
    250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0, 0, 0, 0,
    250, 0, 0, 0, 0, 250, 250, 250, 250, 0, 0, 250, 0, 0, 0, 0,
    250, 0, 250, 250, 0, 250, 0, 0, 250, 0, 250, 250, 0, 0, 0, 0,
    250, 0, 0, 0, 0, 250, 0, 0, 250, 0, 0, 250, 250, 250, 250, 0,
    250, 0, 0, 0, 250, 250, 0, 0, 250, 250, 0, 0, 0, 0, 250, 0,
    250, 0, 0, 250, 0, 250, 0, 0, 250, 0, 0, 0, 0, 0, 250, 0,
    250, 250, 250, 250, 250, 250, 0, 0, 250, 250, 250, 250, 250, 250, 250, 0
];

const collisionsLevel7 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0,
    0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 292, 0,
    0, 292, 0, 0, 0, 0, 0, 0, 292, 292, 292, 0, 0, 0, 292, 0,
    0, 292, 0, 0, 292, 292, 292, 292, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

const collisionsLevel9 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2250, 2250, 2251, 2252, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2250, 2250, 2251, 2252, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2250, 2250, 2250, 2250, 2250, 2251, 2252, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2250, 2250, 2250, 2250, 2250, 2251, 2252, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2250, 2255, 2255, 2255, 2250, 2251, 2252, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2250, 2251, 2250, 2250, 2251, 2250, 2251, 2250, 2251, 2252, 2251, 2250, 2255, 2255, 2256, 2257, 2255, 2256, 2257, 2250, 2251, 2252,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2250, 2251, 2250, 2250, 2251, 2255, 2256, 2255, 2256, 2257, 2256, 2255, 2255, 2255, 2255, 2255, 2255, 2255, 2255, 2255, 2256, 2257,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2250, 2250, 2251, 2250, 2251, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2250, 2251, 2250, 2250, 2251, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2250, 2250, 2250, 2250, 2251, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2250, 2250, 2250, 2250, 2251, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2250, 2251, 2252, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2250, 2251, 2252, 2253, 2254, 0, 0, 0, 0, 0, 2250, 2251, 2252, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2255, 2256, 2257, 2258, 2259, 0, 0, 0, 0, 0, 2255, 2256, 2257, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2251, 2252, 2250, 2250, 2251, 2252, 2253, 2250, 2250, 2250, 2250, 2251, 2252, 2253, 2254, 2250, 2250, 2251, 2252, 2253, 2250, 2250, 2251, 2252, 2253, 2260, 2261, 2262, 2263, 2264, 2251, 2252, 2250, 2251, 2250, 2250, 2251, 2250, 2251, 2252, 2253,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 2250, 2250, 2251, 2252, 0, 0, 0, 0, 0, 2250, 2251, 2252, 2253, 2255, 2255, 2255, 2255, 2255, 2250, 2250, 2250, 2250, 2255, 2250, 2250, 2250, 2250, 2255, 2255, 2255, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2251, 2252, 2255, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2255, 2250, 2250, 2250, 2250, 2250, 2255, 2250, 2250, 2250, 2251, 2252, 2253,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 2250, 2251, 2252, 2252, 2253, 2254, 0, 2250, 2251, 2255, 2256, 2257, 2258, 2260, 2260, 2260, 2260, 2260, 2250, 2255, 2255, 2255, 2260, 2255, 2255, 2255, 2255, 2260, 2260, 2260, 2255, 2255, 2255, 2250, 2255, 2255, 2255, 2250, 2250, 2251, 2252, 2255, 2255, 2255, 2255, 2255, 2255, 2255, 2260, 2255, 2255, 2255, 2255, 2255, 2260, 2255, 2255, 2250, 2251, 2252, 2253,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 2255, 2256, 2257, 2257, 2258, 2259, 0, 2255, 2256, 2260, 2261, 2262, 2263, 2264, 2260, 2261, 2262, 2263, 2255, 2260, 2260, 2260, 2260, 2260, 2260, 2260, 2260, 2260, 2261, 2262, 2260, 2260, 2260, 2255, 2255, 2256, 2257, 2255, 2255, 2256, 2257, 2260, 2260, 2260, 2260, 2260, 2260, 2260, 2260, 2260, 2260, 2260, 2260, 2260, 2260, 2260, 2260, 2250, 2251, 2252, 2253,
    2250, 2251, 2252, 2250, 2250, 2250, 2250, 2251, 2252, 2250, 2260, 2261, 2262, 2263, 2264, 2251, 2260, 2261, 2262, 2263, 2264, 2250, 2250, 2260, 2261, 2262, 2263, 2260, 2260, 2261, 2262, 2263, 2264, 2250, 2251, 2252, 2253, 2254, 2250, 2251, 2252, 2253, 2250, 2255, 2256, 2257, 2250, 2250, 2250, 2250, 2250, 2251, 2252, 2253, 2254, 2250, 2250, 2250, 2251, 2252, 2253, 2254, 2250, 2250, 2250, 2250, 2250, 2251, 2252, 2253,
    2255, 2256, 2257, 2255, 2255, 2250, 2250, 2250, 2250, 2255, 2250, 2250, 2250, 2255, 2250, 2251, 2250, 2250, 2255, 2250, 2251, 2255, 2255, 2250, 2251, 2252, 2250, 2250, 2255, 2250, 2251, 2252, 2255, 2250, 2250, 2251, 2252, 2250, 2250, 2250, 2251, 2252, 2255, 2255, 2255, 2255, 2255, 2255, 2250, 2251, 2252, 2253, 2254, 2254, 2250, 2255, 2255, 2250, 2250, 2250, 2250, 2251, 2255, 2255, 2255, 2250, 2250, 2251, 2252, 2253,
    2250, 2251, 2252, 2260, 2250, 2250, 2255, 2255, 2255, 2260, 2250, 2255, 2255, 2260, 2250, 2250, 2255, 2255, 2260, 2250, 2250, 2260, 2260, 2250, 2250, 2250, 2255, 2255, 2260, 2250, 2250, 2250, 2260, 2255, 2250, 2250, 2250, 2255, 2255, 2250, 2250, 2250, 2260, 2260, 2260, 2260, 2260, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2255, 2260, 2260, 2255, 2255, 2255, 2250, 2250, 2250, 2250, 2250, 2251, 2252, 2256, 2257, 2258,
    2255, 2256, 2257, 2258, 2255, 2255, 2260, 2260, 2260, 2260, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2251, 2252, 2255, 2260, 2261, 2255, 2255, 2255, 2260, 2260, 2260, 2255, 2255, 2255, 2260, 2260, 2255, 2255, 2255, 2260, 2260, 2255, 2255, 2255, 2260, 2260, 2261, 2262, 2263, 2255, 2255, 2255, 2255, 2255, 2255, 2255, 2260, 2260, 2261, 2250, 2251, 2252, 2255, 2255, 2255, 2255, 2255, 2256, 2257, 2261, 2262, 2263,
    2260, 2261, 2262, 2263, 2260, 2260, 2260, 2261, 2262, 2263, 2255, 2255, 2255, 2255, 2255, 2255, 2255, 2255, 2256, 2257, 2260, 2260, 2261, 2260, 2260, 2260, 2260, 2261, 2262, 2260, 2260, 2260, 2260, 2261, 2260, 2260, 2260, 2260, 2261, 2260, 2260, 2260, 2260, 2261, 2262, 2263, 2264, 2260, 2260, 2260, 2260, 2260, 2260, 2260, 2260, 2261, 2262, 2255, 2256, 2257, 2255, 2255, 2260, 2255, 2256, 2257, 2261, 2262, 2263, 2264
];