let resDiv = document.querySelector('#internet_info');
let resDiv2 = document.querySelector('#internet_info2');
let ipElem = document.querySelector('#ipValue')
let ipElem2 = document.querySelector('#ipValue2')
getIpaddress();
getIpaddress2();

function getIpaddress() {
  fetch('https://jsonip.com/').then(res => {
    return res.json()
  }).then(data => {
    getInternet_info(data.ip)
    ipElem.innerHTML = data.ip;
  }).catch(err => {
    console.log(`There was an error ${err}`)
  })
}

function getIpaddress2() {
    fetch('https://api.ipify.org?format=json').then(res => {
      return res.json()
    }).then(data => {
      getInternet_info(data.ip)
      ipElem2.innerHTML = data.ip;
    }).catch(err => {
      console.log(`There was an error ${err}`)
    })
  }


function getInternet_info(ip) {
  let ipAddress = ip;
  let output = "";

  fetch(`http://ip-api.com/json/${ipAddress}`).then(res => {
    return res.json()
  }).then(data => {
    output += `
      <ul class="collection">
        <li class="collection-item">Country:: <strong>${data.country}</strong></li>
        <li class="collection-item">City:: <strong>${data.city}</strong></li>
        <li class="collection-item">Region:: <strong>${data.regionName}</strong></li>
        <li class="collection-item">Timezone:: <strong>${data.timezone}</strong></li>
        <li class="collection-item">Lat:: <strong>${data.lat}</strong></li>
        <li class="collection-item">Lon:: <strong>${data.lon}</strong></li>
        <li class="collection-item">Internet Organisation:: <strong>${data.org}</strong></li>
        <li class="collection-item">Zip Code:: <strong>${data.zip ? data.zip : 'Unavailable(no Zip)'}</strong></li>
      </ul>
    `;
    resDiv.innerHTML = output;
    console.log(data)
  }).catch(err => {
    console.log(`There was an error in the info function:: ${err}`)
  })
}

function getInternet_info2(ip) {
    let ipAddress = ip;
    let output = "";
  
    fetch(`http://ip-api.com/json/${ipAddress}`).then(res => {
      return res.json()
    }).then(data => {
      output += `
        <ul class="collection">
          <li class="collection-item">Country:: <strong>${data.country}</strong></li>
          <li class="collection-item">City:: <strong>${data.city}</strong></li>
          <li class="collection-item">Region:: <strong>${data.regionName}</strong></li>
          <li class="collection-item">Timezone:: <strong>${data.timezone}</strong></li>
          <li class="collection-item">Lat:: <strong>${data.lat}</strong></li>
          <li class="collection-item">Lon:: <strong>${data.lon}</strong></li>
          <li class="collection-item">Internet Organisation:: <strong>${data.org}</strong></li>
          <li class="collection-item">Zip Code:: <strong>${data.zip ? data.zip : 'Unavailable(no Zip)'}</strong></li>
        </ul>
      `;
      resDiv2.innerHTML = output;
      console.log(data)
    }).catch(err => {
      console.log(`There was an error in the info function:: ${err}`)
    })
  }
  