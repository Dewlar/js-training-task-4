let incomingData = [
  {
    title: 'Automobile',
    nodes: [
      {
        title: 'Supercar',
        nodes: [{ title: 'McLaren 720S' }, { title: 'Ferrari SF90' }, { title: 'Lamborghini Aventador' }],
      },
      { title: 'Mercedes' },
      { title: 'Audi' },
      { title: 'BMW' },
      { title: 'lada-sedan-baclajan' },
    ],
  },

  {
    title: 'Motocycle',
    nodes: [
      {
        title: 'Honda',
        nodes: [
          {
            title: 'Sport',
            nodes: [{ title: 'CBR 1000 RR' }, { title: 'CBR650R' }],
          },
        ],
      },
      {
        title: 'Suzuki',
        nodes: [{ title: 'B-King' }, { title: 'GSX-R1000' }, { title: 'SV650' }],
      },
      { title: 'KTM' },
      { title: 'BMW' },
      { title: 'Aprilla' },
    ],
  },
];

document.querySelector('.tree').append(createUL(incomingData));

function createUL(arr) {
  if (Array.isArray(arr)) {
    let ul = document.createElement('ul');

    for (let i = 0; i < arr.length; i++) {
      let li = document.createElement('li');

      for (let key in arr[i]) {
        let titleValue = arr[i][key];

        if (Array.isArray(titleValue)) {
          li.append(createUL(titleValue));
        } else {
          li.innerHTML = titleValue;
        }
      }
      ul.append(li);
    }
    return ul;
  }
}

for (let li of document.querySelectorAll('li')) {
  let span = document.createElement('span');
  li.prepend(span);
  span.append(span.nextSibling);
}

let isTitleNeeded = document.querySelectorAll('li');
for (let i = 0; i < isTitleNeeded.length; i++) {
  if (isTitleNeeded[i].childNodes.length > 1) {
    isTitleNeeded[i].firstChild.classList.add('title');
  }
}

document.querySelector('.tree').addEventListener('click', (event) => {
  if (event.target.matches('.title')) {
    let title = event.target.nextSibling;
    console.log(title);
    title.classList.toggle('hide');
  }
});
