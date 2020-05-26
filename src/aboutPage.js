const aboutPage = function() {
    const content = document.getElementById('content');
    const infoTitle = document.createElement('h2');
    const imgContainer = document.createElement('div');
    const infoContainer = document.createElement('div');
    const infoParagraph = document.createElement('p');
    const image = document.createElement('img');

    imgContainer.appendChild(image);
    infoContainer.appendChild(infoTitle);
    infoContainer.appendChild(infoParagraph);
    imgContainer.appendChild(infoContainer);
    content.appendChild(imgContainer);

    const body = document.querySelector('body');

    infoTitle.textContent = "About";
    infoParagraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +  
                                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' + 
                                'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                                'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    imgContainer.setAttribute('style', 'overflow: hidden; height: 700px; position: relative');
    image.src = "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1129&q=80";
    image.setAttribute('style', 'display: block; width: 100%; height: auto; position: absolute; bottom: 0');
    infoContainer.setAttribute('style', 'z-index: 1; position: absolute; text-align: center; margin-left: 23em; margin-right: 23em;' + 
                                'font-size: 1.2em; background-color: rgba(0,0,0,0.5); margin-top: 8.6em; padding-left: 1em; padding-right: 1em');
    infoTitle.setAttribute('style', 'font-family: \'Rock Salt\', cursive;');
}

export { aboutPage };
