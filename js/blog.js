const context = {
    image: "./images/The-Death-of-Language-in-Johnny-23.jpg",
    tag: 'Review',
    title: 'The Death of Language in “Johnny 23”',
    description: 'Language is dead — long live language!',
    link: './2021/the-death-of-language.html',
    posts: [
        {
        image: './images/what-is-the-Emil-Bulut-and-who-is-this-website.jpg',
        tag: 'Feature',
        title: 'hat is the Emil Bulut and who is this website',
        description: 'Hi there real life human person! I’m Emil and I like making up stories.',
        link: './2019/what-is-the-emil-bulut-and-who-is-this-website.html'
        },
    ]
};

const templateElement = document.getElementById("templateHB");

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById("blogposts").innerHTML = compiledHtml;