const context = {  
    posts: [
        {
            'ZPejMr2v': 1,
            featured: true,
            image: "http://192.168.43.140:8848/blog/images/The-Death-of-Language-in-Johnny-23.jpg",
            alt: '',
            tag: 'Review',
            title: 'The Death of Language in “Johnny 23”',
            description: 'Language is dead — long live language!',
            link: 'http://192.168.43.140:8848/blog/2021/the-death-of-language.html',
            date: 'February 12, 2021',
            photoBy: 'Photo by Nonsap Visuals via Unsplash',
        },
        {
            'qY2LXYZV': 1,
            featured: false,
            image: 'http://192.168.43.140:8848/blog/images/what-is-the-Emil-Bulut-and-who-is-this-website.jpg',
            alt: '',
            tag: 'Feature',
            title: 'what is the Emil Bulut and who is this website',
            description: 'Hi there real life human person! I’m Emil and I like making up stories.',
            link: 'http://192.168.43.140:8848/blog/2019/what-is-the-emil-bulut-and-who-is-this-website.html',
            date: 'July 06, 2019',
        },
    ]
};

const templateElement = document.getElementById("templateHB");

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById("blogposts").innerHTML = compiledHtml;