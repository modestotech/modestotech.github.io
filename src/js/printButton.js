const printButton = document.getElementById("print-button");

printButton.addEventListener("click", function() {
    var previousTitle = document.title;
    var now = new Date();
    var formattedDate = now.toISOString().split('T')[0]
    document.title = `Max Modesto Wallin - Resume (printed ${formattedDate})`;
    window.print();
    document.title = previousTitle;
});