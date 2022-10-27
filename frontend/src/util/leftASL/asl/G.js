import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const g = new GestureDescription("G");

//Thumb
g.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.3);
g.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 3.0); 

//Index
g.addCurl(Finger.Index, FingerCurl.NoCurl, 1.3);
g.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 2.0);

//Middle
g.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
g.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

//Ring
g.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
g.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

//Pinky
g.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
g.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);