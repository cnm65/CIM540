# H1 Midterm Project Description

## H2 Objective
### H3 For my Midterm Project in Creative Coding, I want to create an interactive song experience with my original song “Treehouse.”

## H2 Who?
### H3 This project is targeted toward teens as well as little kids.  Teens would most likely use it because my music speaks to that age and children because the nature of the graphic is cartoon-like.  

## H2 What?
### H3 The idea is that the image and animation shows a visual to enhance the experience of listening to the song.  When the listener clicks on the play button, everything will come to life, inviting the listener into the “world” of the song.  

## H2 Why?
### H3 This graphic promotes my song in a unique way.  The user can enjoy exploring the world I’ve creative lyrically, sonically and visually.

## H2 Where?
### H3 “Treehouse” will be displayed as an advertisement on my facebook and twitter pages to promote the song.  

## H2 How?
### H3 Using Photoshop, I will create the treehouse and background and then put them into p5.js.  I will also record a demo of the song to put into the piece.  Then, using p5.js, I will animate different aspects of the scene to move when the song is played.  I will create a button that says “Play Song” and using the mouse pressed function, the song will play when the user clicks on the button.  In addition, I will use mouse pressed to make the different animations of the treehouse scene begin when the “Play Song” button is clicked.  The different animations will include clouds moving, a bouncing title, music notes coming from speakers and sun rays changing color. 



# H1 Code Plan


## H2 Playing the Song

### H3 In my project, I used the function "play/pause" to play the audio of one of my original songs when the user clicks on the "Play the Song" button.  


## H2 Clouds
### H3 I made the cloud animation by using cloudX, cloudY, cloudPrevTime, cloudInterval, and cloudStart to make the clouds move from left to right on the screen and loop.  

### H3 I made it so that this animation only occured by the click of a mouse by making cloudStart true in the mousePressed function.

### H3 Then, cloudStart is only true when the mouse is pressed so I made a conditional saying if cloudStart is true, then all the other animations can start too.  I did this by making an conditional and putting all the animation info within curly braces.  

## H2 Title

### H3 For the title, I used the counter and height of my canvas to determine the rate at which and amount I wanted the title was moving up and down.  

## H2 Music notes

### H3 For the music notes, I uploaded four images with the names musicnotes0,1,2 and3.  The first image was of nothing, the next was of some music notes, the next was even more notes and the fourth was the greatest amout of music notes.  I set the frame amount to 4, used a for statement to preload the images, drew the image and created a pmillis function that made the frames increase and then loop back to the beginning starting with musicnotes0.  

## H2 Sun rays

### H3 Similarly to the music notes, I uploaded two images named rays0 and rays1.  Then, I preloaded them using a for statement.  Next, I created a new pmillis that looped the two images shifting over and over.  

## H2 Leaf mouse

### H3 I preloaded this photo like any picture.  The only difference is that when I picke the X and the Y, I said it was mouseX and mouseY.  This way the leaf picture's location depends on where the mouse is.  I also added a no cursor command in the setup so that the mouse cursor would not appear and only the leaf would.  

### H3 I uploaded all of the images by loading the image in the preload section and putting all the images in the assets folder.  I made all of the images on photoshop and then brought them into Brackets.  Once I preloaded the images, I drew them in the draw section.  
