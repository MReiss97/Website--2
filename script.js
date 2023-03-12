document.getElementById("chickenParmContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("lasagnaContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("vealParmContent").style.display = "none"; // Sets the style for the content to nothing

function hidePanels () {
    document.getElementById("chickenParmContent").style.display = "none"; // Sets the style for the content to nothing
    document.getElementById("lasagnaContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("vealParmContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("chickenParmTab").className = "accordionPanelTab"; // Adds the tab into the hidePanels function which hides each panel
document.getElementById("LasagnaTab").className = "accordionPanelTab"; // Adds the tab into the hidePanels function which hides each panel
document.getElementById("vealParmTab").className = "accordionPanelTab"; // Adds the tab into the hidePanels function which hides each panel
}

function showChickenParm () {
    hidePanels();
    document.getElementById("chickenParmContent").style.display = "block"; // Opens up the tab when clicked
    document.getElementById("chickenParmTab").className = "accordionPanelTab highlight"; // Highlights the tab when clicked
}

function showLasagna () {
    hidePanels();
    document.getElementById("lasagnaContent").style.display = "block"; // Opens up the tab when clicked
    document.getElementById("LasagnaTab").className = "accordionPanelTab highlight"; // Highlights the tab when clicked
}

function showVealParm () {
    hidePanels();
    document.getElementById("vealParmContent").style.display = "block"; // Opens up the tab when clicked
    document.getElementById("vealParmTab").className = "accordionPanelTab highlight"; // Highlights the tab when clicked
}

