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

export default {
    list
}
