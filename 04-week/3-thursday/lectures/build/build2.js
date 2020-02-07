function className(name, location) {
    location.className = name;
  }
  function addText(text, textLocation) {
    textLocation.textContent = text;
  }
  function setAttributeHref(content, location) {
    location.setAttribute('href', content);
  }
  function appendContent(toBeAppended, location) {
    location.append(toBeAppended);
  }
  function setBgColor(color, location) {
    location.style = color;
  }
  function createNavbar() {
    var container = document.querySelector('#container');
    var link1 = document.createElement('a');
    var link2 = document.createElement('a');
    var link3 = document.createElement('a');
    var headerDiv = document.createElement('div');
    var headerNav = document.createElement('nav');
    className('container-fluid', container);
    addText('HighOnCoding', link1);
    className('nav-item nav-link active', link1);
    setAttributeHref('#', link1);
    addText('home', link2);
    className('nav-item nav-link active small pl-5', link2);
    setAttributeHref('#', link2);
    addText('Categories', link3);
    className('nav-item nav-link active small pl-5', link2);
    setAttributeHref('#', link3);
    className('nav navbar-nav h3', headerDiv);
    className('nav-item nav-link active small pl-5', link3);
    appendContent(link1, headerDiv);
    appendContent(link2, headerDiv);
    appendContent(link3, headerDiv);
    className('navbar navbar-expand navbar-dark p-4', headerNav);
    setBgColor('background-color: rgb(82, 167, 250)', headerNav);
    appendContent(headerDiv, headerNav);
    appendContent(headerNav, container);
}
    createNavbar();