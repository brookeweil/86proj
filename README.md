###############################################################################
#
#   Comp 86 Assignment 6
#
#       by: Maya DeBellis (mdebel01) and Brooke Weil (bweil01)
#     date: 29 November 2016
#
###############################################################################

An outline showing the inheritance hierarchy
An outline showing the aggregation hierarchy (which objects contain or own which other objects)
A list showing uses or collaboration relationships (which objects use which other objects to perform functions)


Objects:
- Eyetracker
- Drawing canvas
- Buttons

Hierarchy:
Buttons - 2 types:
                - change color
                - start and stop drawing


Secrets:
Only the eyetracker will know infomation about the WebGazer and its
        functionality. The drawing canvas will take in location data from
        the eyetracker to know where to draw. It will also take in input from
        the buttons to know when to run the draw commands and what color to use.
