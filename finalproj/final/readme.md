# Final Project Description

## Objective
###  For my Final Project in Creative Coding, I wanted to create an interactive acapella loop with multiple voice parts.  

##  Who?
### This project is targeted toward people who are interested in music/acapella.  Children would most likely use it because the nature of the graphic is cartoon-like and it teaches kids how different musical parts work together in a fun, game-like way. 

## What?
###  While the music is already created, the user feels the power to change the music by playing and pausing different vocal parts.  This project shows how different intervals/vocal parts can mix together to make one product.

## Why?
###  This graphic is a fun way to listen to music because one can manipulate the music by turning on and off sounds. 

##  Where?
###  My project would probably be displayed as an acapella app where people can experiment with adding and subtracting sounds.  

##  How?
### I will use the p5.sound library. Using Photoshop, I will create the scene and then put the images into p5.js.  I will also record a all the different voice parts of the song on Logic and then convert them to mp3s to put them into the piece.  Then, using p5.js, I will create play/pause buttons and set the parts so that they loop continuously.  


# Code Plan


## Background 
### I converted all of my Photoshop files to png files and put them in my assets folder.  Then, I used loadImage and put the images in the draw to have them appear.  

## Bringing in Sounds
### I recorded the different voice parts on Logic and then converted the files to mp3s.  Then, I used the loadSound command to bring the sounds into my project.  I set all of the sounds to stop so that they wouldn't play once the project loaded.  In addition, in the var, I set each sound equal to a variable and set it equal to false.  

## Play/Pause
### I created several buttonArrays that were identical besides the menuStartX, which increased by 100 every time.  In mousePressed, I made it so that if a particular button number was pressed, a specific sound variable would be set to true.  In addition, I loaded an image of both a play and pause button to imageArray.push so that it would act as a play and pause image with the buttons.  I also used the overbutton function so that when the mouse is over the button, a rectangle shows around it.  


## Loop
### In this particular situation, I couldn't just use the loop function that is in the p5.sound library because I needed to make it so that each vocal part was at the same timing musically.  Instead, I used a millis function that essentially states that every 4.33 seconds, audio will play.  This means there is a brief pause between when the user presses play and when the music actually starts becasue the recording have to be lined up.  

