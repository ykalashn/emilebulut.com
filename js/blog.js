const context = {  
    posts: [
        {
            'GcQ7hC5B': 1,
            image: 'https://emilebulut.com/blog/images/the-search-for-meaning.jpg',
            alt: 'Alaskan wilderness with a stream, ever-greens, and clouds.',
            tag: 'Review',
            title: `The search for meaning`,
            description: `The book alternates between different tools of non-fiction writing such as describing, quoting, interviewing, reminiscing, and speculating.`,
            link: './2021/the-search-for-meaning.html',
            date: 'June 17, 2021',
            photoBy: 'Photo by Dylan Taylor on Unsplash',
        },
        {
            'ex23ftb4': 1,
            image: 'https://emilebulut.com/blog/images/you-are-reading-a-book.jpg',
            alt: 'Man standing in a hall made of mirrors.',
            tag: 'Review',
            title: `"You" are reading a book`,
            description: `The metanarratives are baked into each other for the reader to wade through.`,
            link: './2021/you-are-reading-a-book.html',
            date: 'June 15, 2021',
            photoBy: 'Photo by Carlos de Toro on Unsplash',
        },
        {
            'Cyt33Ckm': 1,
            image: 'https://emilebulut.com/blog/images/knowing-your-past.jpg',
            alt: 'A hand coming out of a blue box holding a clock against a pink background.',
            tag: 'Review',
            title: 'Knowing Your Past',
            description: `This reference to the Ouroboros encapsulates the theme and story: a circle made whole and beginnings through ends.`,
            link: './2021/knowing-your-past.html',
            date: 'June 3, 2021',
            photoBy: 'Photo by Elena Koycheva on Unsplash',
        },
        {
            'Q9g72uni': 1,
            image: 'https://emilebulut.com/blog/images/who-gets-to-tell-stories.jpg',
            alt: 'An ant.',
            tag: 'Review',
            title: 'Who gets to tell stories?',
            description: `I believe this is the sentiment of Le Guin as well; push the limits of storytelling and question who gets to be the narrator of stories.`,
            link: './2021/who-gets-to-tell-stories.html',
            date: 'May 20, 2021',
            photoBy: 'Photo by Peter F. Wolf on Unsplash',
        },
        {
            'c4iWbmvY': 1,
            image: 'https://emilebulut.com/blog/images/the-comic-duel-of-the-belletrists.jpg',
            alt: 'An envelope, a pen, a crystal, and a branch.',
            tag: 'Review',
            title: 'The Comic Duel of the Belletrists',
            description: `Nafissa Thompson-Spires’ epistolary masterpiece “Belles Lettres” explores middle-class African American academic identity through humor.`,
            link: './2021/the-comic-duel-of-the-belletrists.html',
            date: 'May 15, 2021',
            photoBy: 'Photo by Joanna Kosinska on Unsplash',
        },
        {
            'YczDqJW8': 1,
            image: 'https://emilebulut.com/blog/images/how-a-rose-for-emily-weaponizes-nostalgia.jpg',
            alt: '',
            tag: 'Review',
            title: 'How “A Rose for Emily” Weaponizes Nostalgia',
            description: "The story doesn’t just create a feeling of nostalgia but also explores the pitfalls of pining for lost things and not letting go.",
            link: './2021/how-a-rose-for-emily-weaponizes-nostalgia.html',
            date: 'March 19, 2021',
            photoBy: 'Photo by Library of Congress on Unsplash',
        },
        {
            'jYZPfai6': 1,
            image: 'https://emilebulut.com/blog/images/cutting-up-the-fifty-year-sword.jpg',
            alt: '',
            tag: 'Review',
            title: 'Cutting up The Fifty Year Sword',
            description: 'Danielewski tries to muddle the waters of traditional storytelling by narrating from the point of view of communal memory.',
            link: './2021/cutting-up-the-fifty-year-sword.html',
            date: 'March 8, 2021',
            photoBy: 'Photo by Sigmund on Unsplash',
        },
        {
            'MW845Vdb': 1,
            image: "https://emilebulut.com/blog/images/a-vegan-review-of-mosquito.jpg",
            alt: 'Mosquito.',
            tag: 'Review',
            title: 'A Vegan Review of Mosquito',
            description: '“The Butcher Dreams” screams an introspective look at a human being faced with the brutality of animal cruelty.',
            link: './2021/a-vegan-review-of-mosquito.html',
            date: 'February 21, 2021',
            photoBy: 'Photo by Yogesh Pedamkar on Unsplash',
        },
        {
            'ZPejMr2v': 1,
            image: "https://emilebulut.com/blog/images/The-Death-of-Language-in-Johnny-23.jpg",
            alt: 'Person holding a book with fire in their hands.',
            tag: 'Review',
            title: 'The Death of Language in “Johnny 23”',
            description: 'Language is dead — long live language!',
            link: './2021/the-death-of-language.html',
            date: 'February 12, 2021',
            photoBy: 'Photo by Nonsap Visuals on Unsplash',
        },
        {
            'qY2LXYZV': 1,
            image: 'https://emilebulut.com/blog/images/what-is-the-Emil-Bulut-and-who-is-this-website.jpg',
            alt: 'A photo of Emil E. Bulut and their dog Chico laying on a bright red carpet, with Emil holding book in their hands.',
            tag: 'Feature',
            title: 'what is the Emil Bulut and who is this website',
            description: 'Hi there real life human person! I’m Emil and I like making up stories.',
            link: './2019/what-is-the-emil-bulut-and-who-is-this-website.html',
            date: 'July 06, 2019',
        },
    ]
};

const templateElement = document.getElementById("templateHB");

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById("blogposts").innerHTML = compiledHtml;