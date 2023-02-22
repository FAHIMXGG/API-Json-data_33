const user = {id: 1, name: 'bot', job: 'actor'}

const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    owner: 'alia',
    address: {
        street: 'khochu tola',
        city: 'am tola',
        country: 'alu'
    } ,
    products: ['laptop', 'monitor', 'keyboard'],
    revenue: 4600000,
    isOpen: true,
    isNew: false
}

console.log(shop);
const ShopJSON = JSON.stringify(shop);
console.log(ShopJSON);

const shopObj = JSON.parse(ShopJSON);
console.log(shopObj);