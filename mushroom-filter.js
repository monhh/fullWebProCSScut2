const cards = document.querySelectorAll('.mushroom-guide .card');
const seasonalFilter = document.querySelector('#season');
const edibleFilter = document.querySelector('#edible');


const currentFilters = {
    season: "all",
    edible: "all"
};

// refactoring with a function -----------------------------

/* seasonalFilter.addEventListener("change", (event) => {
    currentFilters.season = event.target.value;
    console.log(currentFilters.season);
});

edibleFilter.addEventListener("change", (event) => {
    currentFilters.edible = event.target.value;
    console.log(currentFilters.edible);
}); */

seasonalFilter.addEventListener("change", updateFilter);
edibleFilter.addEventListener("change", updateFilter);

function updateFilter(e) {
    //console.log(e.target.value);
    //console.log(e.target.name);
    const filterType = e.target.name;
    //console.log('filterType: ' + filterType);
    currentFilters[filterType] = e.target.value;
    //console.log('currentFilters: ', currentFilters);
}
