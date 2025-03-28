//const getString = window.location.search;
//console.log(getString);

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('ordinances'));
console.log(myInfo.get('date'));
console.log(myInfo.get('location'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('email'));

document.querySelector('#results').innerHTML = `
<p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Proxy ${myInfo.get('ordinaces')} on ${myInfo.get('date')} ${myInfo.get('location')} Temples</p>
<p>Your phone: ${myInfo.get('phone')}</p>
<p>Your email is ${myInfo.get('email')}</p>
`
