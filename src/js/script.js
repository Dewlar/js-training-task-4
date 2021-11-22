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
      {
        title: 'lada-sedan-baclajan',
        nodes: [],
      },
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

document.querySelector('.tree').append(createNode(incomingData));

function createNode(nodes) {
  if (Array.isArray(nodes)) {
    let ul = document.createElement('ul');

    for (let i = 0; i < nodes.length; i++) {
      let li = document.createElement('li');

      for (let key in nodes[i]) {
        let titleValue = nodes[i][key];

        if (Array.isArray(titleValue)) {
          if (titleValue.length != 0) {
            li.append(createNode(titleValue));
          }
        } else {
          li.innerHTML = titleValue;
        }
      }
      ul.append(li);
    }
    return ul;
  }
}

let liArray = document.querySelectorAll('li');
for (let i = 0; i < liArray.length; i++) {
  let span = document.createElement('span');
  liArray[i].prepend(span);
  span.append(span.nextSibling);

  let isTitleNeeded = liArray[i];

  if (isTitleNeeded.childNodes.length > 1) {
    isTitleNeeded.firstChild.classList.add('title');

    let headerListStyle = document.createElement('div');
    headerListStyle.innerHTML = '-&nbsp;';
    isTitleNeeded.firstChild.prepend(headerListStyle);
  }
}

document.querySelector('.tree').addEventListener('click', (event) => {
  if (event.target.matches('.title')) {
    let title = event.target.nextSibling;
    title.classList.toggle('hide');

    if (title.classList.contains('hide')) {
      event.target.firstChild.textContent = '+\u00A0';
    } else {
      event.target.firstChild.textContent = '-\u00A0';
    }
  } else {
    return;
  }
});
