function generateString()
{
    return Math.random().toString(36).substring(2, 5);
}

function nanoid()
{
    const fistSegment = generateString();
    const secondSegment = generateString();
    return `${fistSegment}-${secondSegment}`;
}

export { nanoid };