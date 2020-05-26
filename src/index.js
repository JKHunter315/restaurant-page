import { aboutPage } from './aboutPage';
import { menuPage } from './menuPage';
import { contactPage } from './contactPage';

const aboutLi = document.getElementById('about');
const menuLi = document.getElementById('menu');
const contactLi = document.getElementById ('contact');
const content = document.getElementById('content');

menuLi.addEventListener('click', function() {
    content.removeChild(content.childNodes[3]);
    menuPage();
    menuLi.style.textDecoration = 'underline';
    aboutLi.style.textDecoration = 'none';
    contactLi.style.textDecoration = 'none';
});

aboutLi.addEventListener('click', function() {
    content.removeChild(content.childNodes[3]);
    aboutPage();
    aboutLi.style.textDecoration = 'underline';
    menuLi.style.textDecoration = 'none';
    contactLi.style.textDecoration = 'none';
});

contactLi.addEventListener('click', function() {
    content.removeChild(content.childNodes[3]);
    contactPage();
    contactLi.style.textDecoration = 'underline';
    menuLi.style.textDecoration = 'none';
    aboutLi.style.textDecoration = 'none';
});

window.onload = function() {
    aboutPage();
}