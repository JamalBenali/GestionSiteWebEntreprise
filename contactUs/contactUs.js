$(document).ready(function () {
    // Activate tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Select/Deselect checkboxes
    var checkbox = $('table tbody input[type="checkbox"]');
    $("#selectAll").click(function () {
        if (this.checked) {
            checkbox.each(function () {
                this.checked = true;
            });
        } else {
            checkbox.each(function () {
                this.checked = false;
            });
        }
    });
    checkbox.click(function () {
        if (!this.checked) {
            $("#selectAll").prop("checked", false);
        }
    });
});

var firebaseConfig = {
    apiKey: "AIzaSyDINVl1WQj_bRf4_mLHS99RWt5vLDwVrZg",
    authDomain: "lqliaaapp.firebaseapp.com",
    databaseURL: "https://lqliaaapp.firebaseio.com",
    projectId: "lqliaaapp",
    storageBucket: "lqliaaapp.appspot.com",
    messagingSenderId: "795608392624",
    appId: "1:795608392624:web:3a63da0768da084d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//===========//
var tblUsers = document.getElementById('Contact_Us_list');
var databaseRef = firebase.database().ref('ContactUs/');
var rowIndex = 1;

databaseRef.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();

        var row = tblUsers.insertRow(rowIndex);

        var cellId = row.insertCell(0);
        var cellName = row.insertCell(1);
        var cellMessage = row.insertCell(2);
        var cellEmail = row.insertCell(3);

        cellId.appendChild(document.createTextNode(childKey));
        cellEmail.appendChild(document.createTextNode(childData.email));
        cellMessage.appendChild(document.createTextNode(childData.message));
        cellName.appendChild(document.createTextNode(childData.name));

        rowIndex = rowIndex + 1;
    });
});

function reload_page() {
    window.location.reload();
}
//===========//
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});