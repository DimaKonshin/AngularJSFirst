function Point(message) {
    this.message = message;

    var showMessage2 = function () {
        this.message = "default message";
        console.log(this.message);
    }

    showMessage2();
}

Point.prototype.showMessage = function () {
    console.log(this.message);
}