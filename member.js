function skillsMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    var memberResult = document.getElementById("memberResult");
    memberResult.innerHTML = "You selected: " + memberText + " with a value of " + memberValue;
}