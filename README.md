###############################################################################
#
#   Comp 86 Assignment 6
#
#       by: Maya DeBellis (mdebel01) and Brooke Weil (bweil01)
#     date: 29 November 2016
#
###############################################################################

--------------------------------------------------------------------------------
Objects:

- Eyetracker
- Drawing canvas
- Buttons

--------------------------------------------------------------------------------
Inheritence Hierarchy:

Buttons - 2 types of buttons that inherit from a general button:
                - change color
                - start and stop drawing

--------------------------------------------------------------------------------
Aggregation Hierarchy:

Drawing canvas - stores infomation coming from the buttons and eyetracker.
        Contains display of webcam image provided by the eyetracker.

--------------------------------------------------------------------------------
Secrets:

- Only the eyetracker will know infomation about the WebGazer and its
  functionality. 
- Only the drawing canvas will know infomation about the current state of the
  drawing
- Only the buttons will be in charge of reacting to mouse clicks

--------------------------------------------------------------------------------
Collabortation:

The drawing canvas will take in location data from the eyetracker to know 
where to draw. It will also take in input from the buttons to know when to run
the draw commands and what color to use.


