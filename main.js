import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
// import provinces from './provinces.json';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

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
      "name": "bbbbbbbbbbbbbbbbbbbbbb",
      "logo": "logo",
      "phone": "111111111111"
    }
  },
  {
    "province": 1,
    "district": 1,
    "ward": 2,
    "info": {
      "name": "bbbbbbbbbbbbbbbbbbbbbb",
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
  // "district": 2,
  // "ward": 1
}

// GET provinces data
const getProvinces = async () => {
  const res = await fetch ("https://provinces.open-api.vn/api/?depth=3")
    .then(response => response.json())
  return res;
}

// Get branch available
const branchList = ( postData ) => {
  const availableData = address.filter( each => {

    if (!postData.district) {
      return each.province === postData.province
    } else if (!postData.ward) {
      return each.province === postData.province &&
        each.district === postData.district
    } else {
      return each.province === postData.province &&
        each.district === postData.district &&
        each.ward === postData.ward
    }
  })

  return availableData;
}

// View branch list
const branchListView = ( brandList , provinces) => {
  const totalList = document.createElement("div");
  totalList.classList.add("total-list");

  brandList.forEach(data => {
    const p = provinces.find( each => each.code === data.province)
    const d = p.districts.find( each => each.code === data.district)
    const w = d.wards.find( each => each.code === postData.ward)
    
    const eachBranch = document.createElement('div');
    eachBranch.classList.add('each-branch')
    eachBranch.append(data.info.name)

    totalList.append(eachBranch);
  });
  return totalList;
}

// GET provinces list

const getProvincesList = (provincesAll) => {
  let provincesList = [];
  provincesAll.forEach(each => {
    provincesList.push({code: each.code, name: each.name})
  });

  return provincesList
}

const viewProvincesList = ( provincesList ) => {
  const bb = document.getElementById("province");
  provincesList.forEach(each => {
    const option = document.createElement('option')
    option.setAttribute("value", each.code)
    option.innerHTML = each.name
    bb.append(option);
  });
}
// Runnnnnnnnnnnnnnnn

let provinces;

function runn () {
  if ( provinces ) {
    document.getElementById('counter').append(branchListView(branchList( postData ), provinces));    
  } else {
    getProvinces().then( data => {
      provinces = data;
      document.getElementById('counter').append(branchListView(branchList( postData ), provinces));
      viewProvincesList(getProvincesList(provinces))
    })
  }


}

runn ();
