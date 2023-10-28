let devDetails = [];
const userTemplate = document.getElementById('userTemplateElement')
const userCard = document.getElementById('cardHead')
const search = document.getElementById('searchBox')
const maindiv = document.getElementById('mainDiv')

search.addEventListener('input', e=>{
  let value = e.target.value.toLowerCase()
  devDetails.forEach(userInfo=>{
  let showMatches =
 userInfo.name.toLowerCase().includes(value) ||
userInfo.email.toLowerCase().includes(value) ||
userInfo.company.toLowerCase().includes(value) ||
userInfo.website.toLowerCase().includes(value) ||
userInfo.phone.toLowerCase().includes(value);

userInfo.element.classList.toggle('hide', !showMatches)

  })
})

fetch('https://jsonplaceholder.typicode.com/users')
.then(res=> {return res.json()})
.then(data => {
 devDetails = data.map(userInfo => {
    let detailsCard = userTemplate.content.cloneNode(true).children[0]
let name = detailsCard.querySelector('#name')
let company = detailsCard.querySelector('#workplace')
let website = detailsCard.querySelector('#webpage')
let email = detailsCard.querySelector('.email')
let phone = detailsCard.querySelector('.number')
name.textContent += userInfo.name
company.textContent += userInfo.company.name
website.textContent += userInfo.website
email.textContent += userInfo.email
phone.textContent += userInfo.phone
userCard.append(detailsCard)
return {
  name: userInfo.name, 
  company: userInfo.company.name, 
  website: userInfo.website,
  email: userInfo.email, 
  phone: userInfo.phone,
  element: detailsCard
      }
  })
})
.catch(err =>{
  maindiv.style.fontFamily='Goutham Rounded'
  maindiv.innerHTML = 'ERROR CANNOT REACH TO SERVER'
})


