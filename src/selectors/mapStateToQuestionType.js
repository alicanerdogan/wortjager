export default ({ word }) => {
  if (!word) {
    return null;
  }

  const qTypes = Q_TYPES[word.type];
  const randomTypeIndex = getRandomTypeIndex(qTypes.length);
  const qType = qTypes[randomTypeIndex];

  return qType;
};

const Q_TYPES = {
  verb: ['translation', 'prateritum', 'pp'],
  noun: ['translation', 'artikel', 'plural']
};

function getRandomTypeIndex(typeCount) {
  const min = 0;
  const max = Math.floor(typeCount);
  return Math.floor(Math.random() * (max - min)) + min;
}
