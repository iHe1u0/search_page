function search() {
    const input = document.getElementById('searchInput').value.trim();
    if (input) {
        const searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(input)}`;
        window.open(searchUrl, '_blank');
    } else {
        document.getElementById('results').innerHTML = '请输入内容进行搜索。';
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        search();
    }
}
