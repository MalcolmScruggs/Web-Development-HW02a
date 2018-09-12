(function() {
    let getCurNum = () => {
        return document.getElementById("number").innerHTML;
    };

    let alertFunc = () => {
        alert(getCurNum());
    };

    let inc = () => {
        let number = document.getElementById("number");
        let value = number.innerHTML;
        value++;
        number.innerHTML = value;
    };

    let append = () => {
        let p = document.createElement("p");
        let node = document.createTextNode(getCurNum());
        p.appendChild(node);
        document.getElementById("contents").appendChild(p);
    };

    let setup_buttons = () => {
      let alertButton = document.getElementById("alert-button");
      alertButton.addEventListener('click', alertFunc);

      let incButton = document.getElementById("increment-button");
      incButton.addEventListener('click', inc);

      let appButton = document.getElementById("append-button");
      appButton.addEventListener('click', append);
    };

    window.addEventListener('load', setup_buttons);
}());