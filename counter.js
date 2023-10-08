import provinces from './provinces.json';

export function setupCounter() {
  // let counter = 0
  // const setCounter = (count) => {
  //   counter = count
  //   element.innerHTML = `count is ${counter}`
  // }
  // element.addEventListener('click', () => setCounter(counter + 1))
  // setCounter(0)

  const address = [
    {
      "province": 1,
      "district": 2,
      "ward": 1,
      "info": {
        "name": "aAAA",
        "logo": "logo",
        "phone": "111111111111"
      }
    },
    {
      "province": 1,
      "district": 2,
      "ward": 2,
      "info": {
        "name": "aAAA",
        "logo": "logo",
        "phone": "111111111111"
      }
    },
    {
      "province": 10,
      "district": 2,
      "ward": 11,
      "info": {
        "name": "BBBBB",
        "logo": "logo",
        "phone": "222222"
      }
    },
    {
      "province": 31,
      "district": 21,
      "ward": 12,
      "info": {
        "name": "CCCCCC",
        "logo": "logo",
        "phone": "3333333"
      }
    },
  ]

  const postData = {
    "province": 1,
    "district": 2,
    "ward": 1
  }

  const sendData = address.find( each => {
    each.province === postData.province
    each.district === postData.district
    each.ward === postData.ward
  })
console.log(sendData);
  return sendData;
}
