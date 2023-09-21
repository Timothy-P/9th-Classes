function Help() 
{alert('This isn\'t finished. If you have any feedback to provid, to back to the site. If you don\'t remember the site, type \"Return()\" in the console. Note: It is case sensitive.')}
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

var MFirstME = "42";
var RFirstME = "50";
var RSecondME = "24";
var MThirdME = "32";
var RThirdME = "37";
var MFourthME = "22";
var RFourthME = "10";
var MFifthME = "12";
var RFifthME = "3";
var MSixthME = "32";
var RSixthME = "26";
var MSeventhME = "22";
var RSeventhME = "19";
var MEighthME = "12";
var REighthME = "12";

var MFirstHE = "9";
var RFirstHE = "8";
var RSecondHE = "9";
var MThirdHE = "10";
var RThirdHE = "10";
var MFourthHE = "11";
var RFourthHE = "11";
var MFifthHE = "12";
var RFifthHE = "12";
var MSixthHE = "13";
var RSixthHE = "13";
var MSeventhHE = "14";
var RSeventhHE = "14";
var MEighthHE = "15";
var REighthHE = "15";

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
    /*if (new Date().getDay() == "1") {
        if (TimeH >= MEighthHS && MEighthHE >= TimeH && TimeM >= MEighthMS && MEighthME >= TimeM) {
            document.getElementById("Time3").innerHTML = "Eighth period, Mitchell";
        }
        else if (TimeH >= MSeventhHS && MSeventhHE >= TimeH && TimeM >= MSeventhMS && MSeventhME >= TimeM) {
            document.getElementById("Time3").innerHTML = "Seventh period, Strahan";
        }
        else if (TimeH >= MSixthHS && MSixthHE >= TimeH && TimeM >= MSixthMS && MSixthME >= TimeM) {
            document.getElementById("Time3").innerHTML = "Sixth period, Strahan";
        }
        else if (TimeH >= MFifthHS && MFifthHE >= TimeH && TimeM >= MFifthMS && MFifthME >= TimeM) {
            document.getElementById("Time3").innerHTML = "Fifth period, Hubbard";
        }
        else if (TimeH >= MFourthHS && MFourthHE >= TimeH && TimeM >= MFourthMS && MFourthME >= TimeM) {
            document.getElementById("Time3").innerHTML = "Fourth period, Caldwell";
        }
        else if (TimeH >= MThirdHS && MThirdHE >= TimeH && TimeM >= MThirdMS && MThirdME >= TimeM) {
            document.getElementById("Time3").innerHTML = "Third period, Canard";
        }
        else if (TimeH >= MFirstHS && MFirstHE >= TimeH && TimeM >= MFirstMS && MFirstME >= TimeM) {
            document.getElementById("Time3").innerHTML = "First period, JROTC";
            }
        else {
            document.getElementById("Time3").innerHTML = "N/A";
        };
    }*/
    //else {
        if (TimeH >= REighthHS && REighthHE >= TimeH && TimeM >= REighthMS && REighthME >= TimeM) {
            document.getElementById("Time3").innerHTML = "Eighth period, Mitchell";
        }
        else if (TimeH >= RSeventhHS && RSeventhHE >= TimeH && TimeM >= RSeventhMS && RSeventhME >= TimeM) {
            document.getElementById("Time3").innerHTML = "Seventh period, Strahan";
        }
        else if (TimeH >= RSixthHS && RSixthHE >= TimeH && TimeM >= RSixthMS && RSixthME >= TimeM) {
            document.getElementById("Time3").innerHTML = "Sixth period, Strahan";
        }
        else if (TimeH >= RFifthHS && RFifthHE >= TimeH && TimeM >= RFifthMS && RFifthME >= TimeM) {
            document.getElementById("Time3").innerHTML = "Fifth period, Hubbard";
        }
        else if (TimeH >= RFourthHS && RFourthHE >= TimeH && TimeM >= RFourthMS && RFourthME >= TimeM) {
            document.getElementById("Time3").innerHTML = "Fourth period, Caldwell";
        }
        else if (TimeH >= RThirdHS && RThirdHE >= TimeH && TimeM >= RThirdMS && RThirdME >= TimeM) {
            document.getElementById("Time3").innerHTML = "Third period, Canard";
        }
        else if (TimeH >= RSecondHS && RSecondHE >= TimeH && TimeM >= RSecondMS && RSecondME >= TimeM) {
            document.getElementById("Time3").innerHTML = "Second period, Britt";
        }
        else if (TimeH >= RFirstHS && RFirstHE >= TimeH && TimeM >= RFirstMS && RFirstME >= TimeM) {
            document.getElementById("Time3").innerHTML = "First period, JROTC";
        }
        /*else {
        document.getElementById("Time3").innerHTML = "N/A";
        };*/
    //};
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