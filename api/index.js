import express from 'express';

const api = express();

api.get('/lists', (req, res) => {
    let result = {
        lists: [
            {
                id: 1,
                name: 'Personal' 
            },
            {
                id: 2,
                name: 'Work'
            }
        ]
    };
    res.json(result);
});

api.get('/lists/:id', (req, res) => {
    let result = {
        list: {
            name: 'Personal',
            tasks: [
                {
                    id: 1,
                    text: 'Buy groceries',
                    done: false
                },
                {
                    id: 2,
                    text: 'Wash the car',
                    done: true
                }
            ]
        }
    };
    res.json(result);
});


export default api;
