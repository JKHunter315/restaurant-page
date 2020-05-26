const menuPage = function() {
    const content = document.getElementById('content');
    const image = document.createElement('img');
    const imgContainer = document.createElement('div');
    const menuContainer = document.createElement('div');
    const menuHeader = document.createElement('h2');
    const menuItemHeaderOne = document.createElement('h3');
    const menuItemHeaderTwo = document.createElement('h3');
    const menuItemHeaderThree = document.createElement('h3');
    const menuItemHeaderFour = document.createElement('h3');
    const menuItemHeaderFive = document.createElement('h3');
    const menuItemDescOne = document.createElement('p');
    const menuItemDescTwo = document.createElement('p');
    const menuItemDescThree = document.createElement('p');
    const menuItemDescFour = document.createElement('p');
    const menuItemDescFive = document.createElement('p');
    const body = document.querySelector('body');

    menuContainer.appendChild(menuHeader);
    menuContainer.appendChild(menuItemHeaderOne);
    menuContainer.appendChild(menuItemDescOne);
    menuContainer.appendChild(menuItemHeaderTwo);
    menuContainer.appendChild(menuItemDescTwo);
    menuContainer.appendChild(menuItemHeaderThree);
    menuContainer.appendChild(menuItemDescThree);
    menuContainer.appendChild(menuItemHeaderFour);
    menuContainer.appendChild(menuItemDescFour);
    menuContainer.appendChild(menuItemHeaderFive);
    menuContainer.appendChild(menuItemDescFive);
    imgContainer.appendChild(menuContainer);
    imgContainer.appendChild(image);
    content.appendChild(imgContainer);

    menuHeader.textContent = 'Menu';
    menuItemHeaderOne.textContent = 'Deep Fried Crispy Chicken (Half)';
    menuItemDescOne.innerHTML = '<em>Colonel Sanders would have taken up an alternative career if he\'d ever tried' +
                                'our way with chicken! Crispy, crunchy & an explosion of taste.</em>'
    menuItemHeaderTwo.textContent = 'Char Siu';
    menuItemDescTwo.innerHTML = '<em>Slices of pork, don\'t be alarmed at the colour - the famous Hoi Sin sauce in' +
                                'which it is marinated makes it go red, barbecued & exceedingly good.</em>';
    menuItemHeaderThree.textContent = 'Classic steamed dim sum';
    menuItemDescThree.innerHTML = '<em>Scallop shui mai, seafood black truffle dumpling, har gau, wild mushroom dumpling</em>';
    menuItemHeaderFour.textContent = 'Classic sweet and sour pork';
    menuItemDescFour.innerHTML = '<em>Pineapple, bell pepper, tomato</em>';
    menuItemHeaderFive.textContent = 'Stir-fry soybean with cloud ear mushroom';
    menuItemDescFive.innerHTML = 'Shimeji, cloud ear mushroom';

    imgContainer.setAttribute('style', 'overflow: hidden; height: 700px; position: relative');
    image.src = "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1129&q=80";
    image.setAttribute('style', 'display: block; width: 100%; height: auto; position: absolute; bottom: 0');
    menuContainer.setAttribute('style', 'z-index: 1; position: absolute; text-align: center; font-size: 1.2em; background-color: rgba(0,0,0,0.5);' +
                                'margin-top: 2.3em; padding-left: 1em; padding-right: 1em; margin-left: 7em; margin-right: 7em');
    menuHeader.setAttribute('style', 'font-family: \'Rock Salt\', cursive;');
}

export { menuPage };