function switchTheme() {
    let checkBox = document.getElementById("toggleSwitch");
    //console.log(checkBox.checked);
    let body = document.body;
    let sectionOne = document.getElementById('one');
    let sectionTwo = document.getElementById('two');
    let sectionThree = document.getElementById('three');

    let imgFour = document.getElementById('img04');
    let imgFive = document.getElementById('img05');
    let imgSix = document.getElementById('img06');

    if (checkBox.checked === true) {
        //console.log("Switch: " + checkBox.checked)
        imgFour.src = "assets/img/darkmode-img4.png"
        imgFive.src = "assets/img/darkmode-img5.png"
        imgSix.src = "assets/img/darkmode-img6.png"

        let linkLight = document.getElementsByTagName('a')
        var length = linkLight.length;
        for (let i = 0; i < length; i++) {
            linkLight[i].className = linkLight[i].className = "link-dark";
        }
    } else {
        let linkDark = document.getElementsByTagName('a')
        var length = linkDark.length;
        for (let i = 0; i < length; i++) {
            linkDark[i].className = linkDark[i].className = "link-light";
        }
        //console.log("Switch: " + checkBox.checked)
        imgFour.src = "assets/img/illustration4.png"
        imgFive.src = "assets/img/illustration5.png"
        imgSix.src = "assets/img/illustration6.png"
    }

    body.classList.toggle("dark-mode");
    sectionOne.classList.toggle("dark-one");
    sectionTwo.classList.toggle("dark-two");
    sectionThree.classList.toggle("dark-three");
}