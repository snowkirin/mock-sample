let faker = require('faker');

let generateWorkers = () => {

  // ---------- SelectBox Start
  let selectBoxWrapper = [];
  for (let i = 0; i < 5; i++) {
    let selectBoxItem = [];
    for (let j = 0; j < faker.random.number({min:5, max: 10}); j++) {
      selectBoxItem.push({
        value: faker.random.number(),
        text: faker.random.word()
      });
    }
    selectBoxWrapper.push(selectBoxItem);
  }
  // ---------- SelectBox END

  // ---------- Line Single Data Start
  let lineSingleData = [];
  for (let id = 1; id < 7; id++) {
    let series = [];
    let data = [];
    let categories = [];
    // Data ID
    for (let i=0; i < 6; i++) {
      data.push(faker.random.number({min: 0, max: 4000}));
      categories.push(`5/${(i+1)*2}`);
    }
    series.push({
      name: `Single Line${id}`,
      data: data
    });
    lineSingleData.push({
      title: function() {
        switch (id) {
          case 1:
            return 'CPM';
          case 2:
            return 'CPC';
          case 3:
            return 'CTR';
          case 4:
            return 'CPV';
          case 5:
            return 'CPE';
          case 6:
            return 'CPI';
          default:
            return '기획서 봐라';
        }
      }(),
      series: series,
      categories: categories
    });
  }
  // ---------- Line Single Data END

  // ---------- Bar Single Data Start

  let barSingleWrapper = [];
  for (let i = 0; i< 6; i++) {
    let series = [];
    let data = [];
    let categories = ['페북', '인스타', '메신저', '몰라'];
    for (let j = 0; j < 4; j++) {
      data.push(faker.random.number({min: 1000, max: 5000}));
    }
    series.push({
      data: data
    });
    barSingleWrapper.push({
      title: function() {
        switch(i) {
          case 0:
            return '플랫폼별 CPM';
          case 1:
            return '플랫폼별 CPC';
          case 2:
            return '플랫폼별 CTR';
          case 3:
            return '플랫폼별 CPV';
          case 4:
            return '플랫폼별 CPE';
          case 5:
            return '플랫폼별 CPI';
          default:
            return 'ERROR'
        }
      }(),
      series: series,
      categories: categories
    })
  }
  // ---------- Bar Single Data END


  return {
    "lineSingle": lineSingleData,
    "barSingle": barSingleWrapper,
    "selectBox": selectBoxWrapper
  }
};
module.exports = generateWorkers;
