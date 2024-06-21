import "./restaurantItem.js"

class restaurantList extends HTMLElement {
    /**
     * @param {any} restaurants
     */
    set restaurants(restaurants) {
        this._restaurants = restaurants;
        this.render();
        this.fetchAndRenderData();
    }

    fetchAndRenderData() {
        const RestaurantsContainer = this.querySelector('.restaurants');

        this._restaurants.restaurants.forEach(restaurant => {
            const restaurantItem = document.createElement('restaurant-item');
            restaurantItem.restaurant = restaurant;
            RestaurantsContainer.appendChild(restaurantItem);

        });
    }

    render() {
        this.innerHTML = `
            <div class="content" id="main-content">
                <h1 class="content__label">Restaurant List</h1>
                <div class="restaurants"></div>
            </div>
        `;
    }
}

customElements.define('restaurant-list', restaurantList);