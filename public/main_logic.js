var SoruDiv = document.getElementById("SoruDiv")
var CevapDiv = document.getElementById("CevapDiv")

SoruDiv.style.display = "none"
CevapDiv.style.display = "none"

function SoruButtonPressed() {
	SoruDiv.style.display = "block"
	CevapDiv.style.display = "none"
}

function CevapButtonPressed() {
	CevapDiv.style.display = "block"
	SoruDiv.style.display = "none"
}
