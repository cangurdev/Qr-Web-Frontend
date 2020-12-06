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
        var i = this.indexOf(item.item.id);
        if (i === -1) {
            store.items.push(item);
        } else {
            store.items[i].piece++;
        }
    },
    removeCart(item) {
        var i = this.indexOf(item);
        store.items.splice(i, 1);
    },
    increasePiece(item) {
        var i = this.indexOf(item);
        store.items[i].piece++;
    },
    decreasePiece(item) {
        var i = this.indexOf(item);
        store.items[i].piece--;
    },
    indexOf(item) {
        return store.items.findIndex(x => x.item.id === item);
    }
};