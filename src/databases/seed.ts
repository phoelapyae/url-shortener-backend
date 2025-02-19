import URL from "../models/shortener";
import { nanoid } from "../utils/nanoid";

const data = [
    {
        'short_url': nanoid(),
        'long_url': 'https://www.bbc.com/news/videos/cvgdrqgxyg3o'
    },
    {
        'short_url': nanoid(),
        'long_url': 'https://www.bbc.com/news/videos/cly5rnm7mdmo'
    },
    {
        'short_url': nanoid(),
        'long_url': 'https://www.bbc.com/news/videos/c17ekkwweeno'
    },
    {
        'short_url': nanoid(),
        'long_url': 'https://www.bbc.com/news/videos/cx2q3vz7zgwo'
    },
    {
        'short_url': nanoid(),
        'long_url': 'https://www.bbc.com/news/videos/cy8p3qg4911o'
    },
];

URL.bulkCreate(data, {
    validate: true,
    ignoreDuplicates: true,
}).then(() => {
    console.log('Data seeded successfully.');
}).catch((error) => {
    console.error('Error seeding database:', error);
});