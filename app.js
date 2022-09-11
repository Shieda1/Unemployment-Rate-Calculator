// https://www.omnicalculator.com/finance/unemployment-rate

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const unemploymentrateRadio = document.getElementById('unemploymentrateRadio');
const employedpeopleRadio = document.getElementById('employedpeopleRadio');
const unemployedpeopleRadio = document.getElementById('unemployedpeopleRadio');

let unemploymentrate;
let employedpeople = v1;
let unemployedpeople = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

unemploymentrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Employed people';
  variable2.textContent = 'Unemployed people';
  employedpeople = v1;
  unemployedpeople = v2;
  result.textContent = '';
});

employedpeopleRadio.addEventListener('click', function() {
  variable1.textContent = 'Unemployment rate';
  variable2.textContent = 'Unemployed people';
  unemploymentrate = v1;
  unemployedpeople = v2;
  result.textContent = '';
});

unemployedpeopleRadio.addEventListener('click', function() {
  variable1.textContent = 'Unemployment rate';
  variable2.textContent = 'Employed people';
  unemploymentrate = v1;
  employedpeople = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(unemploymentrateRadio.checked)
    result.textContent = `Unemployment rate = ${computeunemploymentrate().toFixed(2)}`;

  else if(employedpeopleRadio.checked)
    result.textContent = `Employed people = ${computeemployedpeople().toFixed(2)}`;

  else if(unemployedpeopleRadio.checked)
    result.textContent = `Unemployed people = ${computeunemployedpeople().toFixed(2)}`;
})

// calculation

// unemploymentrate = (unemployedpeople / (employedpeople + unemployedpeople)) * 100

function computeunemploymentrate() {
  return (Number(unemployedpeople.value) / (Number(employedpeople.value) + Number(unemployedpeople.value))) * 100;
}

function computeemployedpeople() {
  return (Number(unemployedpeople.value) / (Number(unemploymentrate.value) / 100)) - Number(unemployedpeople.value);
}

function computeunemployedpeople() {
  return Number(unemploymentrate.value) / Number(employedpeople.value);
}