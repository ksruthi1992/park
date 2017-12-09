#Space Finder - A routing and scheduling approach

##Introduction

###Goals

Our goal is to help a student quickly and easily locate a free parking spot close to their destination on campus.

###Problem Statement

Currently, when a student goes to school s/he is forced to drive to the campus, guess which parking lot might have spaces available, and then drive lane by lane through a lot hoping to find a vacant spot. If s/he is unable to find a vacant spot in the current parking lot, then s/he must guess which lot to try next and repeat the painful process of traversing lane by lane to try and find a spot. 

###Considerations

**User Needs**
1. Our system will need to be able to have near-time information about the number of vacant spaces in each parking lot at any time and be able to route a user to the best candidate lot based on their approach.
2. When a user enters a lot, our system will need to be able to correlate their entry point with the closed available spaces and provide directions (preferably audio) to a vacant spot.
3. Our user will be competing with other students who are prowling through the parking lots. Accordingly, the system should be able to both identify a candidate and mark other vacant spaces close by in case a competitor finds the spot before our user.
4. Our system should be able to learn the user schedule over time

**Technology**
1. Our system will need to have near real-time ability to detect the occupancy status of each space in a parking lot. The technology solution will need detect whether or not a car is parked in a space and self-report to the system.
2. Our system will need to be able to store parking lot access points and layout. In addition, the system will need to be able calculate routes based on an entry point or from any lane within the lot to a parking space. This suggests a database for storing the basic structure along with some caching solution to manage routing directions for an active user.
3. Our system will need access to a user's current location. This suggests tapping into a mobile device.
4. Since our users will be driving while looking for a spot, our system will need to leverage some form of text-to-speech technology in order to guide the user to a spot.

###Proposed Solution
Our application will help a user navigate to the parking lot with most available parking spaces at any given time by evaluating near-time availability and user approach to the campus. Once a user enters a lot, the system will provide scheduling and routing services to direct the user to a vacant space.

##Priority Description of Requirements

**RE-1: #** 
System shall be able to store a parking lot with its layout and spaces. The status of each space will be stored {Open | Used | Reserved | Requested}

**RE-2: #** 
System shall be able to receive real-time updates from each parking space in its database.

**RE-3: #** 
System shall be able to use the location tracking of a user and track trajectory by periodically polling the location and charting course.

**RE-5: #** 
Based on the user's approach to campus, the system shall be able to analyze and prioritize parking lots based on current availability.

**RE-6: #** 
When a user enters a parking lot, the system shall be able to identify a vacant parking space and generate the directions to the spot. The system shall then be able to communicate this to the driver.

**RE-7: #**
For any given user, the system shall be able to request alternative vacant spots in the event that the reserved spot is taken before the user arrives. The system shall also be able to generate directions to these alternative spots so that it can reroute the user as they traverse the parking lot.




