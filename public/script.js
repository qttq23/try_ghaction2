// const { Thang } = require("../model/Thang");


let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        console.log(this.responseText);
        let message = JSON.parse(this.responseText);

        let thang = Thang.fromJson(message.result);
        console.log('thang value: ', thang);
        new Thang();
    }

}
request.open('GET', '/thang', true);
request.send();