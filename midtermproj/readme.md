Code Plan


Playing the Song

In my project, I used the function "play/pause" to play the audio of one of my original songs when the user clicks on the "Play the Song" button.  


Clouds
I made the cloud animation by using cloudX, cloudY, cloudPrevTime, cloudInterval, and cloudStart to make the clouds move from left to right on the screen and loop.  

I made it so that this animation only occured by the click of a mouse by making cloudStart true in the mousePressed function.

Then, cloudStart is only true when the mouse is pressed so I made a conditional saying if cloudStart is true, then all the other animations can start too.  I did this by making an conditional and putting all the animation info within curly braces.  

Title

For the title, I used the counter and height of my canvas to determine the rate at which and amount I wanted the title was moving up and down.  

Music notes

For the music notes, I uploaded four images with the names musicnotes0,1,2 and3.  The first image was of nothing, the next was of some music notes, the next was even more notes and the fourth was the greatest amout of music notes.  I set the frame amount to 4, used a for statement to preload the images, drew the image and created a pmillis function that made the frames increase and then loop back to the beginning starting with musicnotes0.  

Sun rays

Similarly to the music notes, I uploaded two images named rays0 and rays1.  Then, I preloaded them using a for statement.  Next, I created a new pmillis that looped the two images shifting over and over.  

Leaf mouse

I preloaded this photo like any picture.  The only difference is that when I picke the X and the Y, I said it was mouseX and mouseY.  This way the leaf picture's location depends on where the mouse is.  I also added a no cursor command in the setup so that the mouse cursor would not appear and only the leaf would.  

I uploaded all of the images by loading the image in the preload section and putting all the images in the assets folder.  I made all of the images on photoshop and then brought them into Brackets.  Once I preloaded the images, I drew them in the draw section.  