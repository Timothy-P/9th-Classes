function Help() {
    alert('This isn\'t finished. If you have any feedback to provid, to back to the site. If you don\'t remember the site, type \"Return()\" in the console. Note: It is case sensitive.')
}
var TimeSec;
var TimeM;
var TimeH;
var MTime;

var MFirstMS = "56";
var RFirstMS = "56";
var RSecondMS = "54";
var MThirdMS = "46";
var RThirdMS = "28";
var MFourthMS = "36";
var RFourthMS = "21";
var MFifthMS = "26";
var RFifthMS = "14";
var MSixthMS = "46";
var RSixthMS = "37";
var MSeventhMS = "36";
var RSeventhMS = "30";
var MEighthMS = "26";
var REighthMS = "23";

var MFirstHS = "8";
var RFirstHS = "7";
var RSecondHS = "8";
var MThirdHS = "9";
var RThirdHS = "9";
var MFourthHS = "10";
var RFourthHS = "10";
var MFifthHS = "11";
var RFifthHS = "11";
var MSixthHS = "12";
var RSixthHS = "12";
var MSeventhHS = "13";
var RSeventhHS = "13";
var MEighthHS = "14";
var REighthHS = "14";

var MFirstME = "9:42";
var RFirstME = "8:50";
var RSecondME = "9:24";
var MThirdME = "10:32";
var RThirdME = "10:37";
var MFourthME = "11:22";
var RFourthME = "11:10";
var MFifthME = "12:12";
var RFifthME = "12:3";
var MSixthME = "13:32";
var RSixthME = "13:26";
var MSeventhME = "14:22";
var RSeventhME = "14:19";
var MEighthME = "15:12";
var REighthME = "15:12";

function A() {
	B(), D(), E(), F(), Help(), C()
};
function B() {
    if (TimeSec != new Date().getSeconds()) {
        TimeSec = new Date().getSeconds();
    };
    if (TimeM != new Date().getSeconds()) {
        TimeM = new Date().getMinutes();
    };
    setTimeout("B()", 0.5);
};
function D() {
    if (TimeH != new Date().getHours()) {
        TimeH = new Date().getHours();
    };
    setTimeout("D()", 0.5);
};
function E() {
    MTime = TimeH+":"+TimeM+":"+TimeSec
    if (TimeSec < "10") {
        document.getElementById("Time").innerHTML = "Military Time: "+TimeH+":"+TimeM+":0"+TimeSec;
    }
    else {
        document.getElementById("Time").innerHTML = "Military Time: "+MTime;    
    };
    setTimeout("E()", 0.5);
};
function F() {
    if(TimeH > 12) {
        var CTimeH = TimeH-12
        if (TimeSec < "10") {
            var CTime = CTimeH+":"+TimeM+":0"+TimeSec+" PM";
        }
        else {
            var CTime = CTimeH+":"+TimeM+":"+TimeSec+" PM";
        }
        document.getElementById("Time2").innerHTML = "Civilian Time: "+CTime;
    }
    else {
        document.getElementById("Time2").innerHTML = "Civilian Time: "+MTime;
    };
    setTimeout("F()", 0.5);
};
function G() {
    if (new Date().getDay() == "1") {
        if (TimeH >= MEighthHS && TimeM >= MEighthMS) {
            document.getElementById("Time3").innerHTML = "Eighth period, Mitchell";
        }
        else if (TimeH >= MSeventhHS && TimeM >= MSeventhMS) {
            document.getElementById("Time3").innerHTML = "Seventh period, Strahan";
        }
        else if (TimeH >= MSixthHS && TimeM >= MSixthMS) {
            document.getElementById("Time3").innerHTML = "Sixth period, Strahan";
        }
        else if (TimeH >= MFifthHS && TimeM >= MFifthMS) {
            document.getElementById("Time3").innerHTML = "Fifth period, Hubbard";
        }
        else if (TimeH >= MFourthHS && TimeM >= MFourthMS) {
            document.getElementById("Time3").innerHTML = "Fourth period, Caldwell";
        }
        else if (TimeH >= MThirdHS && TimeM >= MThirdMS) {
            document.getElementById("Time3").innerHTML = "Third period, Canard";
        }
        else if (TimeH >= MFirstHS && TimeM >= MFirstMS) {
            document.getElementById("Time3").innerHTML = "First period, JROTC";
        };
    }
    else {
        if (TimeH >= REighthHS && TimeM >= REighthMS) {
            document.getElementById("Time3").innerHTML = "Eighth period, Mitchell";
        }
        else if (TimeH >= RSeventhHS && TimeM >= RSeventhMS) {
            document.getElementById("Time3").innerHTML = "Seventh period, Strahan";
        }
        else if (TimeH >= RSixthHS && TimeM >= RSixthMS) {
            document.getElementById("Time3").innerHTML = "Sixth period, Strahan";
        }
        else if (TimeH >= RFifthHS && TimeM >= RFifthMS) {
            document.getElementById("Time3").innerHTML = "Fifth period, Hubbard";
        }
        else if (TimeH >= RFourthHS && TimeM >= RFourthMS) {
            document.getElementById("Time3").innerHTML = "Fourth period, Caldwell";
        }
        else if (TimeH >= RThirdHS && TimeM >= RThirdMS) {
            document.getElementById("Time3").innerHTML = "Third period, Canard";
        }
        else if (TimeH >= RSecondHS && TimeM >= RSecondMS) {
            document.getElementById("Time3").innerHTML = "Second period, Britt";
        }
        else if (TimeH >= RFirstHS && TimeM >= RFirstMS) {
            document.getElementById("Time3").innerHTML = "First period, JROTC";
        };
    };
    setTimeout("G()", 0.5);
    return "Classes are now displayed"
};
function C() {
    if (TimeM == "10" && TimeH == "15") {
        alert("2 minutes until school is over.")
    }
    else if (TimeM == "48" && TimeH == "8") {
        alert("2 minutes until JROTC is over.")
    }
    else if (TimeM == "22" && TimeH == RSecondHE) {
        alert("2 minutes until Advisory is over.")
    }
    else if (TimeM == "22" && TimeH == RThirdHE) {
        alert("2 minutes until History is over.")
    }
    else if (TimeM == RThirdME && TimeH == RThirdHe) {
        alert("2 minutes until Science is over.")
    }
    else {
        return "Not time yet. Stop bothering my stuff."
    }
    setTimeout("C()", 0.5)
};
function Return() {
    document.getElementById("body").innerHTML = "Enjoy the site. :D";
    setTimeout('window.open("https://sites.google.com/rsdk12.net/thehub/home", "_self")', 300)
}