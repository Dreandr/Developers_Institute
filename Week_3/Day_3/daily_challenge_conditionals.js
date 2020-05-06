function isNotBad(string){
	if (string.indexOf("not") != -1 && string.indexOf("bad") != -1){
		if (string.indexOf("not") < string.indexOf("bad")) {
			newString = string.slice(0, string.indexOf("not")) + "good" + string.slice(string.indexOf("bad")+3);
			return newString;
		} else {
			return string;
		}
	} else {
		return string;
	}
}