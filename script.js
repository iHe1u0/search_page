function search() {
    const input = document.getElementById('searchInput').value;
    const results = document.getElementById('results');

    // 假设执行简单的搜索逻辑，只显示输入内容
    if (input) {
        results.innerHTML = `你搜索了: ${input}`;
    } else {
        results.innerHTML = '请输入内容进行搜索。';
    }
}
