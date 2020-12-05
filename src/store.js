import Vue from "vue";

export const store = Vue.observable({
    price: 0,
    items: []
});

export const mutations = {

    increasePrice(price) {
        store.price += Number(price);
    },
    decreasePrice(price) {
        store.price -= price;
    },
    addCart(item) {
        store.items.push(item);
    },
    removeCart(item) {
        var arr = store.items;
        var i = arr.findIndex(x => x.id === item.id);
        arr.splice(i, 1);
        store.items = arr;
    }
};