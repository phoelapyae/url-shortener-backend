"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shortener_1 = __importDefault(require("../models/shortener"));
const nanoid_1 = require("../utils/nanoid");
const data = [
    {
        'short_url': (0, nanoid_1.nanoid)(),
        'long_url': 'https://www.bbc.com/news/videos/cvgdrqgxyg3o'
    },
    {
        'short_url': (0, nanoid_1.nanoid)(),
        'long_url': 'https://www.bbc.com/news/videos/cly5rnm7mdmo'
    },
    {
        'short_url': (0, nanoid_1.nanoid)(),
        'long_url': 'https://www.bbc.com/news/videos/c17ekkwweeno'
    },
    {
        'short_url': (0, nanoid_1.nanoid)(),
        'long_url': 'https://www.bbc.com/news/videos/cx2q3vz7zgwo'
    },
    {
        'short_url': (0, nanoid_1.nanoid)(),
        'long_url': 'https://www.bbc.com/news/videos/cy8p3qg4911o'
    },
];
shortener_1.default.bulkCreate(data, {
    validate: true,
    ignoreDuplicates: true,
}).then(() => {
    console.log('Data seeded successfully.');
}).catch((error) => {
    console.error('Error seeding database:', error);
});
