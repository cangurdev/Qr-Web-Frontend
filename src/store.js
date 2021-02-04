import Vue from "vue";

export const store = Vue.observable({
    price: Number(localStorage.getItem("price")),
    items: JSON.parse(localStorage.getItem("items")),
    count: Number(localStorage.getItem("count")),
    stock: {},
});
export const show = Vue.observable({
        isTrue: false,
        addCategory: false,
    }
)
export const mutations = {
    editStock(content){
        store.stock = content;
    },
    clearStock(){
        store.stock = {};
    },
    show() {
        show.isTrue = !show.isTrue;
    },
    showAddCategory() {
        show.addCategory = !show.addCategory;
    },
    increasePrice(price) {
        store.price += Number(price);
        localStorage.setItem("price", Number(store.price));
    },
    decreasePrice(price) {
        store.price -= price;
        localStorage.setItem("price", Number(store.price));
    },
    increaseCount() {
        store.count++;
        localStorage.setItem("count", store.count);
    },
    decreaseCount() {
        store.count--;
        localStorage.setItem("count", store.count);
    },
    addCart(item) {
        let i = this.indexOf(item.item.name);
        if (i === -1) {
            store.items.push(item);
        } else {
            store.items[i].piece++;
        }
        localStorage.setItem("items", JSON.stringify(store.items));
    },
    removeCart(name) {
        let i = this.indexOf(name);
        store.items.splice(i, 1);
        localStorage.setItem("items", JSON.stringify(store.items));
    },
    increasePiece(name) {
        let i = this.indexOf(name);
        store.items[i].piece++;
        localStorage.setItem("items", JSON.stringify(store.items));
    },
    decreasePiece(name) {
        let i = this.indexOf(name);
        store.items[i].piece--;
        localStorage.setItem("items", JSON.stringify(store.items));
    },
    clearCart() {
        store.items = [];
        store.price = 0;
        store.count = 0;
        localStorage.setItem("price", 0);
        localStorage.setItem("items", JSON.stringify([]));
        localStorage.setItem("count", 0);
    }
    ,
    indexOf(item) {
        return store.items.findIndex(x => x.item.name === item);
    },
    setStorage() {
        if (localStorage.getItem("items") === null) {
            localStorage.setItem("price", 0);
            localStorage.setItem("items", JSON.stringify([]));
            localStorage.setItem("count", 0);
        }
    }
};