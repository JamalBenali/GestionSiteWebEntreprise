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


function CreateImage(SRC) {
    var imgP = document.createElement("IMG");
    imgP.src = SRC;
    imgP.height = imgP.naturalHeight * 0.66;
    imgP.width = imgP.naturalWidth * 0.66;
    return imgP;
}

var tblUsers = document.getElementById('tbl_users_list');
var databaseRef = firebase.database().ref('News/');
var rowIndex = 1;

databaseRef.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();

        var row = tblUsers.insertRow(rowIndex);
        var cellId = row.insertCell(0);
        var cellDate = row.insertCell(1);
        var cellTitle = row.insertCell(2);
        var cellContent = row.insertCell(3);
        var cellImage = row.insertCell(4);
        cellId.appendChild(document.createTextNode(childKey));
        cellContent.appendChild(document.createTextNode(childData.content));
        cellTitle.appendChild(document.createTextNode(childData.title));
        cellDate.appendChild(document.createTextNode(childData.date));
        cellImage.appendChild(CreateImage(childData.imgUrl));
        rowIndex = rowIndex + 1;
    });
});

function find_info() {
    if (document.getElementById('news_id').value == "") {
        alert("veuillez entrer l'ID");
    }
    else {
        databaseRef.once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                var idTextfield = document.getElementById('news_id').value;
                var textfId = document.getElementById('news_id');
                var textFtitle = document.getElementById('title');
                var textFnImage = document.getElementById('news_Image');
                var textFncontent = document.getElementById('news_content');
                if (childKey == idTextfield) {
                    textfId.value = childKey;
                    textFtitle.value = childData.title;
                    textFnImage.value = childData.imgUrl;
                    textFncontent.value = childData.content;
                }
            });
        });
    }
}

function save_news() {
    if (document.getElementById('title').value == "" || document.getElementById('news_content').value == "") {
        alert("Please fill ID,content,title fields");
    }
    else {
        var content = document.getElementById('news_content').value;
        var news_Image = "";
        if (document.getElementById('news_Image').value == "")
            news_Image = "https://via.placeholder.com/700x525?text=lqliaa.com";
        else news_Image = document.getElementById('news_Image').value;
        var title = document.getElementById('title').value;

        var uid = firebase.database().ref().child('News').push().key;
        var data = {
            content: content,
            title: title,
            date: dateAr(),
            imgUrl: news_Image,
        }
    }
    var updates = {};
    updates['/News/' + uid] = data;
    firebase.database().ref().update(updates);

    alert('Article added successfully!');
    reload_page();
}
function dateAr() {
    // les noms de jours / mois
    var jours = new Array("الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعة", "السبت");
    var mois = new Array("يناير", "فبراير", "مارس", "ابريل", "ماي", "يونيو", "يوليوز", "غشت", "شتنبر", "أكتوبر", "نونبر", "دجنبر");
    // on recupere la date
    var date = new Date();
    // on construit le message
    var message = jours[date.getDay()] + " ";   // nom du jour
    message += date.getDate() + " ";   // numero du jour
    message += mois[date.getMonth()] + " ";   // mois
    message += date.getFullYear();
    return message;
}
function update_news() {
    if (document.getElementById('titleE').value == "" || document.getElementById('news_contentE').value == "" || document.getElementById('news_idE').value == "") {
        alert("veuillez entrer l'ID, le titre , et le contenue");
    }
    else {
        var content = document.getElementById('news_contentE').value;
        var news_Image = "";
        if (document.getElementById('news_ImageE').value == "")
            user_Image = "https://via.placeholder.com/700x525?text=lqliaa.com";
        else user_Image = document.getElementById('news_ImageE').value;
        var title = document.getElementById('titleE').value;
        var news_id = document.getElementById('news_idE').value;

        var data = {
            content: content,
            title: title,
            date: dateAr(),
            imgUrl: news_Image,
        }

        var updates = {};
        updates['/News/' + news_id] = data;
        firebase.database().ref().update(updates);
        alert('Article updated successfully!');
        reload_page();
    }
}

function delete_news() {
    if (document.getElementById('news_id').value == "") {
        alert("veuillez entrer l'ID");
    }
    else {
        var news_id = document.getElementById('news_id').value;

        firebase.database().ref().child('/News/' + news_id).remove();
        alert('Article deleted successfully!');
        reload_page();
    }
}
function reload_page() {
    window.location.reload();
}

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});