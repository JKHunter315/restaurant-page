const contactPage = function() {
    const content = document.getElementById('content');
    const image = document.createElement('img');
    const imgContainer = document.createElement('div');
    const contactContainer = document.createElement('div');
    const contactHeader = document.createElement('h2');
    const emailHeader = document.createElement('h3');
    const email = document.createElement('p');
    const phoneHeader = document.createElement('h3');
    const phoneNum = document.createElement('p');
    const addressHeader = document.createElement('h3');
    const address = document.createElement('p');
    const googleImg = document.createElement('img');

    contactContainer.appendChild(contactHeader);
    contactContainer.appendChild(emailHeader);
    contactContainer.appendChild(email);
    contactContainer.appendChild(phoneHeader);
    contactContainer.appendChild(phoneNum);
    contactContainer.appendChild(addressHeader);
    contactContainer.appendChild(address);
    contactContainer.appendChild(googleImg);
    imgContainer.appendChild(contactContainer);
    imgContainer.appendChild(image);
    content.appendChild(imgContainer);

    contactHeader.textContent = 'Contact';
    emailHeader.textContent = 'Email us:';
    email.innerHTML = '<em> enquires@cantonplace.com </em>';
    phoneHeader.textContent = 'Call us:';
    phoneNum.innerHTML = '<em> 123-456-7891 </em>';
    addressHeader.textContent = 'Address:';
    address.innerHTML = '<em>12 Somewhere Street, SomePlace, 000000 </em>';
    image.src = "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1129&q=80";
    googleImg.src = "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1";

    
    image.setAttribute('style', 'display: block; width: 100%; height: auto; position: absolute; bottom: 0');
    contactContainer.setAttribute('style', 'z-index: 1; position: absolute; text-align: center; font-size: 1.2em; background-color: rgba(0,0,0,0.5);' + 
                                'margin-top: 1.6em; padding-left: .1em; padding-right: .1em; margin-left: 22em; margin-right: 22em;left: 0; right: 0');
    imgContainer.setAttribute('style', 'overflow: hidden; height: 700px; position: relative');
    googleImg.setAttribute('style', ' position: relative; height: 17em; margin-bottom: 1em; margin-top: .5em');
    address.setAttribute('style', 'margin-top: -.8em; margin-bottom: -.1em');
    email.setAttribute('style', 'margin-top: -.8em; margin-bottom: -.1em');
    phoneNum.setAttribute('style', 'margin-top: -.8em; margin-bottom: -.1em');
    contactHeader.setAttribute('style', 'margin-bottom: -.5em; margin-top: -.1em');
}

export { contactPage };