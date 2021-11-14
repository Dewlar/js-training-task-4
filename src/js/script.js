let incomingData = [
  {
    title1: 'automobile',
    nodes1: [
      {
        title2: 'supercar',
        nodes2: [
          { title3: 'McLaren 720S' }, 
          { title3: 'Ferrari SF90' }, 
          { title3: 'Lamborghini Aventador' }
        ],
      },
      { title7: 'Mercedes' },
      { title8: 'Audi' },
      { title9: 'BMW' },
      { title10: 'lada-sedan-baclajan' },
    ],
  },

  {
    title11: 'motocycle',
    nodes3: [
      {
        title12: 'honda',
        nodes4: [
          { 
            title13: 'sport', 
            nodes: [
              { title18: 'CBR 1000 RR' }, 
              { title18: 'CBR650R' }
            ] 
          }
        ],
      },
      {
        title17: 'Suzuki',
        nodes: [
          { title18: 'B-King' }, 
          { title18: 'GSX-R1000' }, 
          { title18: 'SV650' }
        ],
      },
      { title18: 'KTM' },
      { title19: 'BMW' },
      { title20: 'Aprilla' },
    ],
  },
];

processingIncomingObject(incomingData);

function processingIncomingObject(data) {
  if(Array.isArray(data)){
    for(let i=0;i<data.length;i++){
      objectProcessing(data[i]);
    }
  }
}

function objectProcessing(obj) {
  for (let key in obj) {
    if (!Array.isArray(obj[key]))    console.log(obj[key]);
    else processingIncomingObject(obj[key]);
  }
} 

