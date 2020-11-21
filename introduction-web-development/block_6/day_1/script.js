const states = [
  'AC - Acre',
  'AL - Alagoas',
  'AP - Amapá',
  'AM - Amazonas',
  'BA - Bahia',
  'CE - Ceará',
  'DF - Distrito Federal',
  'ES - Espírito Santo',
  'GO - Goías',
  'MA - Maranhão',
  'MT - Mato Grosso',
  'MS - Mato Grosso do Sul',
  'MG - Minas Gerais',
  'PA - Pará',
  'PB - Paraíba',
  'PR - Paraná',
  'PE - Pernambuco',
  'PI - Piauí',
  'RJ - Rio de Janeiro',
  'RN - Rio Grande do Norte',
  'RS - Rio Grande do Sul',
  'RO - Rondônia',
  'RR - Roraíma',
  'SC - Santa Catarina',
  'SP - São Paulo',
  'SE - Sergipe',
  'TO - Tocantins'
  ];

const stateSelector = document.querySelector('.select-state');

for (let index = 0; index < states.length; index += 1) {
  const stateElement = document.createElement('option');
  stateElement.innerHTML = states[index];
  stateSelector.appendChild(stateElement);
}

const allInputs = document.querySelectorAll('input[type=text]');

const generateButton = document.getElementById('generate-curriculum');

const invalidFields = document.querySelector('.invalid-fields');

function showInvalid () {
  invalidFields.style.display = 'flex';
}

generateButton.addEventListener('click', function (event) {
	for (let index = 0; index < allInputs.length-1; index += 1) {
		if (allInputs[index].value === '') {
      showInvalid ();
      event.preventDefault();
		}
	}
});
