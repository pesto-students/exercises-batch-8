const timeNow = () => {
    const today = new Date();
    const h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();
    const ms = today.getMilliseconds();
    return `${h}h:${m}m:${s}s:${ms}ms`;
};

const languages = [
    'Haskell',
    'JavaScript',
    'Java',
    'C++',
    'Python',
];

const fiveFavoritePackages = [
    'bcrypt',
    'express',
    'isomorphic-fetch',
    'jsonwebtoken',
    'passport',
];

module.exports = {
    languages,
    fiveFavoritePackages,
    timeNow,
};
