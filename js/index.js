const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img")
logo.setAttribute('src', siteContent["nav"]["img-src"])
//console.log(logo)
const navItems = document.querySelectorAll('a')
//navItems.textContent = siteContent["nav"]
//console.log(navItems)
let newNavItems = Array.from(navItems).map(function(name, index) {
  //console.log('test', siteContent.nav.index.name.key)
 // console.log(`nav-item-${Number([index]) + 1}`)
      navItems[index].textContent = (siteContent["nav"][`nav-item-${Number([index]) + 1}`])
      navItems[index].style.color = "green"
  })

  const newElement = document.createElement('a')
  newElement.textContent = "prepended element"  
  newElement.style.color = "green"
  const parentElement = document.querySelector('nav')
  parentElement.prepend(newElement)

const newElement2 = document.createElement('nav')
newElement2.textContent = "appended Child"
newElement2.style.color = "green"
const parentElement2 = document.querySelector('nav')
parentElement2.appendChild(newElement2)
 

//console.log('nav', siteContent.nav)

const domIsAwesome = document.querySelector('.cta-text > h1')
domIsAwesome.textContent = siteContent["cta"]["h1"]

let ctaImg = document.getElementById("cta-img")
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let ctaButton = document.querySelector('.cta-text > button')
ctaButton.textContent = siteContent["cta"]["button"]
//ctaButton.textContent = siteContent["cta"]["button"]

// const headers = document.querySelectorAll('.text-content > h4')
// let newHeaders = Array.from(headers).map(function(name, index) {
//   //console.log('test', siteContent.nav.index.name.key)
//  // console.log(`nav-item-${Number([index]) + 1}`) 
//  headers[index].textContent = (siteContent["main-content"])
// })
// console.log(newHeaders)

const h4Tags = document.querySelectorAll('.text-content > h4')
console.log(h4Tags)
h4Tags[0].textContent = siteContent["main-content"]["features-h4"]
h4Tags[1].textContent = siteContent["main-content"]["about-h4"]
h4Tags[2].textContent = siteContent["main-content"]["services-h4"]
h4Tags[3].textContent = siteContent["main-content"]["product-h4"]
h4Tags[4].textContent = siteContent["main-content"]["vision-h4"]

const pTags = document.querySelectorAll('.text-content > p')
pTags[0].textContent = siteContent["main-content"]["features-content"]
pTags[1].textContent = siteContent["main-content"]["about-content"]
pTags[2].textContent = siteContent["main-content"]["services-content"]
pTags[3].textContent = siteContent["main-content"]["product-content"]
pTags[4].textContent = siteContent["main-content"]["vision-content"]

let middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])