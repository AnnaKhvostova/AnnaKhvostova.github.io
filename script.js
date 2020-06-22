'use strict';
const loadImages1 = document.getElementById('loadImages1');
const gallery1 = document.querySelector('.amazing-work__gallery');
const parentLoad = document.querySelector('#load');

const galleryItemNodeWordpress = document.querySelector('.wordpress');
const galleryItemNodeLandingPage = document.querySelector('.landing-page');
const galleryItemNodeWebDesign = document.querySelector('.web-design');
const galleryItemNodeGraphicDesign = document.querySelector('.graphic-design');


// gallery1.appendChild(newGalleryItemNode);

// loadFunction();
// console.log(loadImages1);
// console.log(gallery1);
loadImages1.addEventListener('click', addloadImages);
let counter = 0;
// ---------------------------------------------------------------------
function loadFunction() {
    parentLoad.classList.remove('hide-info');
    setTimeout(() => { parentLoad.classList.add('hide-info') }, 2800);
}
// ---------------------------------------------------------------------
function addloadImages() {

    loadFunction();
    setTimeout(addImages, 3000);
}
// ---------------------------------------------------------------------
function addImages() {

    if (counter === 0) {
        let arr = [];

        for (let i = 1; i <= 12; i++) {
            arr.push(`img/graphic-design/graphic-design${i}.jpg`);
        }

        for (let elem of arr) {
            let newGalleryItemNodeGraphicDesign = galleryItemNodeGraphicDesign.cloneNode(true);
            let GraphicDesignImage = newGalleryItemNodeGraphicDesign.firstElementChild;
            GraphicDesignImage.src = elem;
            gallery1.appendChild(newGalleryItemNodeGraphicDesign);

        }
        counter += 1;
    }
    else if (counter === 1) {
        let arr = [];
        for (let i = 1; i <= 7; i++) {
            arr.push(`img/web-design/web-design${i}.jpg`);
        }
        for (let elem of arr) {
            let newGalleryItemNodeWebDesign = galleryItemNodeWebDesign.cloneNode(true);
            let WebDesignImage = newGalleryItemNodeWebDesign.firstElementChild;
            WebDesignImage.src = elem;
            gallery1.appendChild(newGalleryItemNodeWebDesign);
        }
        counter += 1;
    }
    else if (counter === 2) {
        let arr = [];
        for (let i = 1; i <= 7; i++) {
            arr.push(`img/landing-page/landing-page${i}.jpg`);
        }
        for (let elem of arr) {
            let newGalleryItemNodeLandingPage = galleryItemNodeLandingPage.cloneNode(true);
            let LandingPageImage = newGalleryItemNodeLandingPage.firstElementChild;
            LandingPageImage.src = elem;
            gallery1.appendChild(newGalleryItemNodeLandingPage);
        }
        counter += 1;
    }
    else if (counter === 3) {
        let arr = [];
        for (let i = 1; i <= 10; i++) {
            arr.push(`img/wordpress/wordpress${i}.jpg`);
        }
        for (let elem of arr) {
            let newGalleryItemNodeWordpress = galleryItemNodeWordpress.cloneNode(true);
            let WordpressImage = newGalleryItemNodeWordpress.firstElementChild;
            WordpressImage.src = elem;
            gallery1.appendChild(newGalleryItemNodeWordpress);
        }
        counter += 1;
    }
    else if (counter >= 4) {
        alert('Sorry...no more pictures');
        loadImages1.style.display = 'none';
    }
}
// --------------------------------------------------------------------------------------
const amazingWorkInfoMenu = document.querySelector('.amazing-work__infomenu');
amazingWorkInfoMenu.addEventListener('click', InfoItem);
const galleryItems = gallery1.children;
// let img = gallery1.querySelectorAll('img');
// console.log(img);
function InfoItem(event) {
    event.preventDefault();
    let action = event.target;
    let itemId = event.target.id;
    console.log(action);
    console.log(itemId);
    for (let link of amazingWorkInfoMenu.children) {
        link.classList.remove('toggle-item');
    }
    action.parentElement.classList.add('toggle-item');

    console.log(action);
    console.log(itemId);
    if (itemId) {
        for (let img of galleryItems) {
            if (!img.classList.contains(itemId)) {
                img.classList.add('hide-info');
            }
            else { img.classList.remove('hide-info'); }
        }
    }
    else {
        for (let img of gallery1.children) {
            img.classList.remove('hide-info');
        }
    }
}

// --------------------------SERVICES-------CHANGES------------------------------------------
const serviceMenu = document.querySelector('.services__info-menu__itemlist');
const serviceText = document.getElementById('serviceText');
// const graphicDesign =document.getElementById('graphicDesign');
// const onlineSupport =document.getElementById('onlineSupport');
// const appDesign =document.getElementById('appDesign');
// const onlineMarketing =document.getElementById('onlineMarketing');
// const seoService =document.getElementById('seoService');

serviceMenu.addEventListener('click', changeInfo);
const serviceImage = document.getElementById('imgDefault');

function changeInfo(event) {
    event.preventDefault();
    let action = event.target;
    let itemId = event.target.id;
    console.log(action);
    console.log(itemId);
    for (let link of serviceMenu.children) {
        link.classList.remove('toggle-item');
    }
    action.parentElement.classList.add('toggle-item');

    switch (itemId) {
        case 'webDesign':
            serviceText.textContent = `SOME TEXT ABOUT WEB DESIGN.  Blanditiis a ipsa iure veritatis quis. Facilisure ratione provident magni soluta eveniet
            iusto voluptatum excepturi
            sint! Voluptatibus labore, iure ratione provident magni placeat ducimus assumenda
            aspernatur? Dignissimos, similique`;
            serviceImage.src = `img/services/landing-page6.jpg`;
            break;

        case 'graphicDesign':
            serviceText.textContent = `GRAPHIC DESIGN. Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Asperiores ab assumenda totam nemo
            pariatur magnam deserunt eaque et ad quidem, rem non saepe earum aut odit! Tempora
            tenetur`;
            serviceImage.src = `img/services/graphic-design10.jpg`;
            break;

        case 'onlineSupport':
            serviceText.textContent = `ONLINE SUPPORT and other....Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Asperiores ab assumenda totam nemo pariatur magnam deserunt eaque et ad quidem, rem non saepe earum aut odit! Tempora
            tenetur cumque alias doloremque facere illum? `;
            serviceImage.src = `img/services/Layer3.jpg`;
            break;

        case 'appDesign':
            serviceText.textContent = `A lot of interesting about Apps...Lorem ipsum dolor, sit amet consectetur adipisicing elit
            Asperiores ab assumenda totam nemo pariatur magnam deserunt eaque et ad quidem, rem non saepe earum aut odit! Tempora
            tenetur cumque alias doloremque facere illum? Accusamus veniam quaerat, qui magni deleniti
            illum.`;
            serviceImage.src = `img/services/web-design1.jpg`;
            break;

        case 'onlineMarketing':
            serviceText.textContent = `MARKETING...VERY INTERESTING.Asperiores ab assumenda totam nemo pariatur magnam deserunt eaque et ad quidem, rem non saepe earum aut odit! Tempora
            tenetur cumque alias doloremque facere illum? Accusamus veniam quaerat, qui magni deleniti
            illum.Blanditiis a ipsa iure veritatis quis. Facilisure ratione provident magni soluta eveniet
           `;
            serviceImage.src = `img/services/web-design7.jpg`;
            break;

        case 'seoService':
            serviceText.textContent = `SEO... do u know what is it?Asperiores ab assumenda totam nemo pariatur magnam deserunt eaque et ad quidem, rem non saepe earum aut odit! Tempora
            tenetur cumque alias doloremque facere illum? Accusamus veniam quaerat, qui magni deleniti
            illum.Blanditiis a ipsa iure veritatis quis. Facilisure ratione provident magni soluta eveniet
            iusto voluptatum excepturiLorem ipsum dolor, sit amet consectetur adipisicing elit
           `;
            serviceImage.src = `img/services/graphic-design12.jpg`;
            break;
        default:
            serviceText.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit
             Asperiores ab assumenda totam nemo
             pariatur magnam deserunt eaque et ad quidem, rem non saepe earum aut odit! Tempora
             tenetur
             cumque alias doloremque facere illum? Accusamus veniam quaerat, qui magni deleniti
             illum.
             
             id, labore unde reprehenderit modi consequatur quasi sequi quis ea. Fugiat consequuntur
             accusantium cumque exercitationem impedit fuga eaque ipsum, deserunt officia`;
    }
}
// ---------------------------------------------------------------------

const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const mainAvatar = document.getElementById('mainAvatar');
const nameArray = ['SUPERMAN', 'Mighty Thor', 'Captain America', 'Wonder Woman', 'Just HULK', 'Black Widow'];
const professionsArray = ['Project Manager', 'Digital Marketing', 'Front-end Developer', 'Web Designer', 'Quality Assurance', 'Backend Developer'];
const nameEmployees = document.getElementById('nameEmployees');
const professionEmployees = document.getElementById('professionEmployees');
const employeePhoto = document.querySelector('.empoyees-gallery-photo');

// const personalInfo = document.querySelector('.personal-info');
let slideCollection = document.querySelectorAll('.picture');
let slideCounter = 0;
let slideArray = [];
for (let elem of slideCollection) {
    slideArray.push(elem);
}

btnRight.addEventListener('click', toSlideRight);
btnLeft.addEventListener('click', toSlideLeft);
function onFocus() {
    slideArray[counter].classList.add('slide');
}

onFocus();

function toSlideRight() {
    slideCounter += 1;
    if (slideCounter < 0) {
        slideCounter = 0;
    }
    else if (slideCounter > 5) {
        slideCounter = 0;
    }
    for (let elem of slideArray) {
        elem.classList.remove('slide');
    }

    slideArray[slideCounter].classList.add('slide');
    mainAvatar.src = slideArray[slideCounter].src;
    nameEmployees.innerText = nameArray[slideCounter];
    professionEmployees.innerText = professionsArray[slideCounter];
}


function toSlideLeft() {
    slideCounter -= 1;
    if (slideCounter < 0) {
        slideCounter = 5;
    }
    else if (slideCounter > 5) {
        slideCounter = 0;
    }
    for (let elem of slideArray) {
        elem.classList.remove('slide');
    }

    slideArray[slideCounter].classList.add('slide');
    mainAvatar.src = slideArray[slideCounter].src;
    nameEmployees.innerText = nameArray[slideCounter];
    professionEmployees.innerText = professionsArray[slideCounter];
}

// for (let item of employeePhoto.children) {
//     employeePhotoArray.push(item);
// }
// console.log(employeePhotoArray);

employeePhoto.addEventListener('click', clickPhoto);

function clickPhoto(event) {
    let photoEvent = event.target;
    console.log(event.target);

    if (photoEvent == this) {
        photoEvent = this.firstElementChild;
        console.log(photoEvent)

    }
    for (let photo of slideArray) {
        photo.classList.remove('slide');
    }
    photoEvent.classList.add('slide');
    const index = slideArray.indexOf(photoEvent, 0);
    mainAvatar.src = photoEvent.src;
    nameEmployees.innerText = nameArray[index];
    professionEmployees.innerText = professionsArray[index];
}

// ----------------------------HOVER_OVER_ITEMS-------------------------------------------
// const overflow = document.querySelector('.overflow');

// gallery1.addEventListener('mouseover', hoverON);
// let itemEvent;
// let itemEventMainClass;
// // // let itemRelatedEvent;
// function hoverON(event) {
//     event.target.classList.remove('display-none')

//     if (event.target.hasAttribute('src')) {
//         itemEvent = event.target;
//         itemEvent.classList.remove('display-none');

//         console.log('MouseON');
//         console.log(itemEvent);
//         itemEvent.after(overflow);

//         console.log(overflow);
//         setTimeout(() => {

//             overflow.classList.remove('display-none')
//         }, 1000);
//         setTimeout(() => itemEvent.classList.add('display-none'), 1000);
//         console.log('MouseON after remove');
//         console.log(itemEvent);
//         // itemEvent.classList.remove('display-none');
//     }
//     // setTimeout(hoverON, 700);
// }

// overflow.addEventListener('mouseout', hoverOffdiv);
// function hoverOffdiv() {

//     console.log('MouseOUT and next');
//     console.log(itemEvent);
//     // this.classList.remove('itemEvent.className');
//     itemEvent.classList.remove('display-none');
//     this.previousElementSibling.classList.remove('display-none');
//     this.classList.add('display-none');
//     itemEvent.classList.remove('display-none');

// }
// gallery1.addEventListener('mouseover', hoverOff);


// function hoverOnImage() {
//     overflow.classList.remove('hide-info');
//     this.after(overflow);
//     this.classList.add('hide-info');
// }

// function hoverON(event) {

//     let itemEvent = event.target;
//     console.log(itemEvent);
//     // let itemRelatedEvent = event.relatedTarget;
//     // console.log(itemRelatedEvent);

//     overflow.classList.remove('hide-info');
//     itemEvent.after(overflow);
//     console.log(overflow.previousElementSibling);
//     overflow.previousSibling.classList.add('hide-info');
//     // if(itemRelatedEvent!==this){
//     //     itemEvent.classList.add('hide-info');}
//     // event.stopImmediatePropagation();
//     // if(!itemRelatedEvent==overflow){
//     //     itemRelatedEvent.classList.add('hide-info'); 
//     // }
// }

// function hoverON(event) {
//     itemEvent = event.target;
//     itemRelatedEvent=event.relatedTarget;
//     console.log(itemEvent);
//     console.log(itemRelatedEvent);
//     // itemRelatedEvent.remove('hide-info');
//     // itemEvent.classList.toggle('hide-info');
//     overflow.classList.remove('hide-info');
//     itemEvent.before(overflow);
//     console.log(itemEvent);
//     console.log(itemRelatedEvent);
//     // itemRelatedEvent.toggle('hide-info');
//     // // event.stopPropagation();
//     // if (itemEvent === overflow) {
//     //     itemEvent.classList.remove('hide-info');
//     // }

// }


// //     itemRelatedEvent = event.target;
