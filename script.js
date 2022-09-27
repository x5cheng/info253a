window.onload = () => {
    console.log(document.getElementById("submit").value);
}

window.onload = () => {
    document.getElementById("catForm").addEventListener("submit", (event) => {
        // const submitValue = document.getElementById("submit");
        // console.log(submitValue.innerHTML);
        document.getElementById("submit").innerHTML = '<div class="load"></div>'
        setTimeout(() => {
            const contactName = document.getElementById("name").value;
            window.alert(`Hi ${contactName}! Thanks for participating! We understad cats more because of you`);
            document.getElementById("submit").innerHTML = "Submit"
        }, 3000);
        event.preventDefault();
    });
}