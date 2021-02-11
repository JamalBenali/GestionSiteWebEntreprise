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
function CreateImage(SRC) {
    var imgP = document.createElement("IMG");
    imgP.src = SRC;
    // imgP.height = imgP.naturalHeight * 0.66;
    // imgP.width = imgP.naturalWidth * 0.66;
    imgP.height = 250;
    imgP.width = 250;
    return imgP;
}

var tblUsers = document.getElementById('tbl_users_list');
var databaseRef = firebase.database().ref('Baramij_Mobadarat/');
var rowIndex = 1;

databaseRef.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();

        var row = tblUsers.insertRow(rowIndex);
        var cellId = row.insertCell(0);
        var cellname = row.insertCell(1);
        var cellgoals = row.insertCell(2);
        var cellsummary = row.insertCell(3);
        var cellimgUrl = row.insertCell(4);
        cellId.appendChild(document.createTextNode(childKey));
        cellname.appendChild(document.createTextNode(childData.name));
        cellgoals.appendChild(document.createTextNode(childData.goals));
        cellsummary.appendChild(document.createTextNode(childData.summary));
        cellimgUrl.appendChild(CreateImage(childData.imgUrl));
        rowIndex = rowIndex + 1;
    });
});

function find_info() {
    if (document.getElementById('mobdara_id').value == "") {
        alert("veuillez entrer l'ID");
    }
    else {

        databaseRef.once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                var idTextfield = document.getElementById('mobdara_id').value;
                var textfId = document.getElementById('mobdara_id');
                var cellname = document.getElementById('name');
                var cellgoals = document.getElementById('goals');
                var cellsummary = document.getElementById('summary');
                var cellimgUrl = document.getElementById('imgUrl');
                if (childKey == idTextfield) {
                    textfId.value = childKey;
                    cellname.value = childData.name;
                    cellgoals.value = childData.goals;
                    cellsummary.value = childData.summary;
                    cellimgUrl.value = childData.imgUrl;
                }
            });
        });
    }
}


function save_mobadara() {
    var name = document.getElementById('name').value;
    var goals = document.getElementById('goals').value;
    var summary = document.getElementById('summary').value;
    var imgUrl = "";
    if (document.getElementById('imgUrl').value == "")
        imgUrl = "https://via.placeholder.com/450x350?text=lqliaa.com";
    else imgUrl = document.getElementById('imgUrl').value;

    if (!name || !goals || !summary) {
        alert("veuillez entrer name , goals , et summary");
    }
    else {
        var uid = firebase.database().ref().child('Baramij_Mobadarat').push().key;
        var data = {
            mobadara_id: uid,
            name: name,
            imgUrl: imgUrl,
            summary: summary,
            goals: goals,
        }

        var updates = {};
        updates['/Baramij_Mobadarat/' + uid] = data;
        firebase.database().ref().update(updates);

        alert("The 'mobadara' is created successfully!");
        reload_page();
    }
}
function update_mobadara() {
    var name = document.getElementById('nameE').value;
    var goals = document.getElementById('goalE').value;
    var summary = document.getElementById('summaryE').value;
    var imgUrl = document.getElementById('imgUrlE').value;
    var mobadara_id = document.getElementById('mobadara_idE').value;
    if (!name || !goals || !summary || !mobadara_id) {
        alert("veuillez entrer l'id ,name , goals , et summary");
    }
    else {
        var data = {
            name: name,
            imgUrl: imgUrl,
            summary: summary,
            goals: goals,
        }

        var updates = {};
        updates['/Baramij_Mobadarat/' + mobadara_id] = data;
        firebase.database().ref().update(updates);
        alert("The 'mobadara' is updated successfully!");
        reload_page();
    }
}

function delete_mobadara() {
    if (document.getElementById('mobadara_id').value == "")
        alert("veuillez entrer l'Id");
    else {
        var mobadara_id = document.getElementById('mobadara_id').value;
        firebase.database().ref().child('/Baramij_Mobadarat/' + mobadara_id).remove();
        alert("The 'mobadara' is deleted successfully!");
        reload_page();
    }
}
function reload_page() {
    window.location.reload();
}

//===========//
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});