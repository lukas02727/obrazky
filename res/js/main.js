const obr1 = document.getElementById("obr1");
const male = document.getElementsByClassName("obr");


[...male].forEach((maly) => {
    maly.onclick = () => {
        console.log(maly.src)
        obr1.src=maly.src
    };
});