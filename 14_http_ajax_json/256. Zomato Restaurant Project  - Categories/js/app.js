class ZOMATO{
    constructor(){
        this.api = "9a676990f1d56132a9cfed5e912e1108";
        this.header = {
            method:'GET',
            headers:{
                'user-key':this.api,
                'Content-Type':'application/json'
            },
            credentials:'same-origin'
        };
    }
    async searchAPI(){
        const categoryURL = `https://developers.zomato.com/api/v2.1/categories`;

        // category URL
        const categoryInfo = await fetch(categoryURL, this.header);
        const categoryJSON = await categoryInfo.json();
        const categories = await categoryJSON.categories;

        return {
            categories
        };
    }
}
class UI{
    constructor(){
        this.loader = document.querySelector('.loader');
        this.restaurantList = document.getElementById('restaurant-list')
    }
    addSelectOptions(categories){
        const search = document.getElementById('searchCategory');
        let output = `<option value='0' selected>select category</option>`;
        categories.forEach(category =>{
            output +=`<option value="${category.categories.id}">${category.categories.name}</option>`
        })
          search.innerHTML = output;
    }

}

(function(){
    const searchForm = document.getElementById('searchForm');
    const searchCity = document.getElementById('searchCity');
    const searchCategory = document.getElementById('searchCategory');

    const zomato = new ZOMATO();
    const ui = new UI();

    // add select options
    document.addEventListener('DOMContentLoaded', ()=>{
            // logic goes here
        zomato.searchAPI().then(data => ui.addSelectOptions(data.categories));
    });
})();