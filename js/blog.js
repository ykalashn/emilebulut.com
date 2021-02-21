const context = {  
    posts: [
        {
            'MW845Vdb': 1,
            image: "https://emilebulut.com/blog/images/a-vegan-review-of-mosquito.jpg",
            alt: 'A photo of a mosquito',
            tag: 'Review',
            title: 'A Vegan Review of Mosquito',
            description: '“The Butcher Dreams” screams an introspective look at a human being faced with the brutality of animal cruelty.',
            link: 'https://emilebulut.com/blog/2021/a-vegan-review-of-mosquito.html',
            date: 'February 21, 2021',
            photoBy: 'Photo by Yogesh Pedamkar via Unsplash',
        },
        {
            'ZPejMr2v': 1,
            image: "https://emilebulut.com/blog/images/The-Death-of-Language-in-Johnny-23.jpg",
            alt: '',
            tag: 'Review',
            title: 'The Death of Language in “Johnny 23”',
            description: 'Language is dead — long live language!',
            link: 'https://emilebulut.com/blog/2021/the-death-of-language.html',
            date: 'February 12, 2021',
            photoBy: 'Photo by Nonsap Visuals via Unsplash',
        },
        {
            'qY2LXYZV': 1,
            image: 'https://emilebulut.com/blog/images/what-is-the-Emil-Bulut-and-who-is-this-website.jpg',
            alt: '',
            tag: 'Feature',
            title: 'what is the Emil Bulut and who is this website',
            description: 'Hi there real life human person! I’m Emil and I like making up stories.',
            link: 'https://emilebulut.com/blog/2019/what-is-the-emil-bulut-and-who-is-this-website.html',
            date: 'July 06, 2019',
        },
    ]
};

const templateElement = document.getElementById("templateHB");

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById("blogposts").innerHTML = compiledHtml;