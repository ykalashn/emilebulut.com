const context = {
    image: "./images/The-Death-of-Language-in-Johnny-23.jpg",
    tag: 'Review',
    title: 'The Death of Language in “Johnny 23”',
    description: 'Language is dead — long live language!',
    link: './2021/the-death-of-language.html',
    posts: [
        {
        image: '',
        tag: '',
        title: '',
        description: '',
        link: ''
        },
    ]
};

const templateElement = document.getElementById("templateHB");

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById("blogposts").innerHTML = compiledHtml;