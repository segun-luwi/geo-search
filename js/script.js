viewMap = () => {
    searchInput = document.getElementById('search-input');
    if(searchInput.value != ''){
        map = document.getElementById('map');
        map.style.display = 'grid';
    }
}