import '../components/restaurantList.js'
import resto from '../../public/data/DATA.json'

const main = () => {
    const hamburgerButtonElement = document.querySelector("#hamburger");
    const drawerElement = document.querySelector("#navigation");
    const restaurantList = document.querySelector("restaurant-list");

    restaurantList.restaurants = resto;

    hamburgerButtonElement.addEventListener("click", (event) => {
        drawerElement.classList.toggle("open");
        event.stopPropagation();
        event.preventDefault();
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('#navigation') && drawerElement.classList.contains('open')) {
            drawerElement.classList.remove('open');
        }
    });

    document.querySelector("#content-btn").addEventListener("click", () => {
        const element = document.querySelector("#main-content");
        element.scrollIntoView({
            behavior: "smooth"
        });
    });
};

export default main;