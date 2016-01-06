async function list(params) {
    return [
        {
            id: 1,
            image: '/milkman.jpg',
            brand: 'Milkman',
            name: 'Churrios',
            rating: 8
        },
        {
            id: 2,
            image: '/cuttwood.jpg',
            brand: 'Cuttwood',
            name: 'Unicorn Milk',
            rating: 9
        },
        {
            id: 3,
            image: '/milkman.jpg',
            brand: 'Milkman',
            name: 'Churrios',
            rating: 10
        }
    ];
}

async function get(params) {
    return {
        id: 1,
        image: '/milkman.jpg',
        brand: 'Milkman',
        name: 'Churrios',
        rating: 8,
        description: `
            The decadent, warm, fluffy churro flavour in Churrios topped with cinnamon sugar and
            coupled with creamy fresh milk delivers the vaping perfection we've come to expect from The Milkman.
            It's another tantalisingly complex vape that bridges the gap between breakfast cereal flavours and
            dessert flavours with unbelievable expertise. This is definitely a flavour you don't want to miss.
        `
    };
}

export default {
    list,
    get
};
