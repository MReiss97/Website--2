document.getElementById("beginningOfLifeContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("iphoneInventionContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("educationTypeContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("careerStyleContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("imacInventionContent").style.display = "none"; // Sets the style for the content to nothing 
document.getElementById("ipadInventionContent").style.display = "none"; // Sets the style for the content to nothing

function hidePanels () {
    document.getElementById("beginningOfLifeContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("iphoneInventionContent").style.display = "none"; // Sets the style for the content to nothing
    document.getElementById("educationTypeContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("careerStyleContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("imacInventionContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("ipadInventionContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("beginningLifeTab").className = "accordionPanelTab"; // Adds the tab into the hidePanels function which hides each panel
document.getElementById("iphoneTab").className = "accordionPanelTab"; // Adds the tab into the hidePanels function which hides each panel
document.getElementById("educationTab").className = "accordionPanelTab"; // Adds the tab into the hidePanels function which hides each panel
document.getElementById("careerTab").className = "accordionPanelTab"; // Adds the tab into the hidePanels function which hides each panel
document.getElementById("imacTab").className = "accordionPanelTab"; // Adds the tab into the hidePanels function which hides each panel 
document.getElementById("ipadTab").className = "accordionPanelTab"; // Adds the tab into the hidePanels function which hides each panel
}

function showBeginningLife () {
    hidePanels();
    document.getElementById("beginningOfLifeContent").style.display = "block"; // Opens up the tab when clicked
    document.getElementById("beginningLifeTab").className = "accordionPanelTab highlight"; // Highlights the tab when clicked
}

function showEducation () {
    hidePanels();
    document.getElementById("educationTypeContent").style.display = "block"; // Opens up the tab when clicked
    document.getElementById("educationTab").className = "accordionPanelTab highlight"; // Highlights the tab when clicked
}

function showCareerStyle () {
    hidePanels();
    document.getElementById("careerStyleContent").style.display = "block"; // Opens up the tab when clicked
    document.getElementById("careerTab").className = "accordionPanelTab highlight"; // Highlights the tab when clicked
}

