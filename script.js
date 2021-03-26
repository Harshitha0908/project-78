var images = ["10289818_658026594276558_307246384655775681_n.jpeg","WhatsApp Image 2020-09-27 at 11.11.34 PM.jpeg","40400079_10212174315294926_1636671775758614528_n.jpeg","twinkle23.jpeg","JITH5408.JPG"];
var names = ["Alexander", "Sumana", "Sathvika", "Prathima", "Harshitha"];
var i = 0;
function update()
{
    
  

    if(i==5)
    {
        i = 0;
        
    }
    
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
    i++;
}