let searchLimit = 10;
const sneakerUl = document.querySelector(".sneaker-list");
async function GetSneakers() {


    try {
        const response = await fetch('assets/data/sneakers.json');
        const data = await response.json();

        const sneakerList = data.map(item => {
            return new Sneaker(
                item.image,
                item.brand,
                item.name,
                item.price
            )
        });

        return sneakerList;
    }

    catch {
        return []
    }
}

function ConvertSneakerToLi(sneaker) {
    return `
            <li class="sneaker-item-container">
                <div class="sneaker-item">
                    <img class="thumbnail" src="${sneaker.image}" alt="">
                    <p class="sneaker-name">${sneaker.name}</p>
                    <p class="sneaker-brand">${sneaker.brand}</p>
                    <p class="sneaker-price">$${sneaker.price}</p>
                </div>
            </li>
            `
}

async function Main() {
    let sneakerList = await GetSneakers();

    for (const sneaker of sneakerList) {
        sneakerUl.innerHTML += ConvertSneakerToLi(sneaker)
    }

}

Main();