import { collection, addDoc, doc, getDoc } from "firebase/firestore"
import { database } from "../firestore.js"

// -- Database adding --
async function saveInformation(info){
	const docRef = await addDoc(collection(database, "question"),{
		soru: info,
		cevap: ""
	});
	console.log("Document created with id", docRef.id);
	document.getElementById("QuestionId").textContent = docRef.id 
	document.getElementById("QuestionHelp").textContent = "Üstteki cevap al butonuna tıklayarak açılan kutucuğa yukarıdaki kodu girdiğiniz taktirde sorunuz en kısa sürede yanıtlanacaktır."
}

async function searchInformation(id){
	const docQuestion = await doc(database, "question", id);
	const docSnap = await getDoc(docQuestion);
	if(docSnap.exists()){
		const data = docSnap.data() 
		document.getElementById("CevapSoru").textContent = "Sorunuz: " + data.soru
		var CevapOutput = "Cevabımız: "
		if(data.cevap == ""){
			CevapOutput += "Şu anda sorunuza cevap verilmemiştir lütfen daha sonra tekrar deneyiniz."
		}
		else{
			CevapOutput += data.cevap
		}
		document.getElementById("CevapOutput").textContent = CevapOutput
	}
}

function SendQuestion(){
	var soru = document.getElementById("SoruInput").value;
	if(soru != ""){
		saveInformation(soru)
	}
}
window.SendQuestion = SendQuestion;
function GetInformation(){
	var id = document.getElementById("CevapInput").value
	if(id !=""){
		searchInformation(id)
	}
}
window.GetInformation = GetInformation;
