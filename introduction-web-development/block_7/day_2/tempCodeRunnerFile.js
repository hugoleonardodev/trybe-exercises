const addMorningTurn = (lesson2) => {
  const morning = {turno: 'manhã'};
  Object.assign(lesson2, morning);
  console.log(lesson2);
}

addMorningTurn(lesson2);