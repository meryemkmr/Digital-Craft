function createNewElement(element, tag, text, classes, link)
{
    var newElement = document.createElement(tag);
    if (classes.length > 0)
    {
        newElement.className = classes;
    }
    if (text.length > 0)
    {
        newElement.textContent = text
    }
    if (tag == 'a')
    {
        newElement.setAttribute('href', link)
    }
    element.append(newElement);
    return newElement;
}