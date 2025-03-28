function searchTools() {
    let input = document.getElementById("search").value.toLowerCase();
    let tools = document.querySelectorAll("#ai-tools li");

    tools.forEach(tool => {
        if (tool.textContent.toLowerCase().includes(input)) {
            tool.style.display = "block";
        } else {
            tool.style.display = "none";
        }
    });
}
