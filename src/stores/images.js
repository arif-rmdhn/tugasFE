import {defineStore} from 'pinia';

const imageStore = defineStore({
    id: 'image',
    state: () => ({
        list:[
            {
                slug: 'circuit',
                title: 'Circuit',
                img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            },
            {
                slug: 'engineering',
                title: 'Engineering',
                img: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            },
            {
                slug: 'drone',
                title: 'Drone',
                img: 'https://images.unsplash.com/photo-1534798270584-a695c8a977e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'
            },
            
        ]
    }),
    actions: {},
    getters: {
        g$list: ({list}) => list,
    },
});

export default imageStore;

