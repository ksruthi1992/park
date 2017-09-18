# Finding Parking Report
#

## Contents ##

**[Project Proposal](https://github.com/CSUS-CSC-131-Fall2017/park/blob/master/Pink%20Unicorns%20-%20Proposal.md)**

**Introduction**

**Glossary**

**System Requirements**

**Functional Requirement Specifications**

- **Customer Requirements***

	- Priority Description of Requirements

- **Use Cases***

	- Descriptions

**Domain Model**

## Introduction ##

***Customer Statement of Requirements.docx***	provides a good start for an introduction.

## Glossary ##

In the works...

## System Requirements ##

In the works...

## Functional Requirement Specifications ##

### Stakeholders ###
	
The following people are the one's who might benefit and get involved with the app:

-Students

-Faculty staff/members

-Parking enforcers

-Maintenance employees

-Database manager	

-More?.....

### Actors and goals ###
	
**Cameras** Participating Actor 

-> Takes surveillance inside and outside the garage for security and safety

**Hardwired sensors** Participating Actor 

-> Detects if a vehicle in a certain spot is present, "Green" light means vacant, "Red" means occupied.

**Digital Displays** Participating Actor

-> Goal is to display how many spots are remaining in a given lot.


**Mobile App** Participating Actor 

-> This is where consumers check for open spots, and reserve for parking spots if the feature is available.

**Database** Participating Actor 

-> Stores all the data, status and information in all parking spaces/garages.

**Parking enforcers/employees** Initiating Actor 

-> They maintain and scout the garage for safety and checks the validity of the permit in every vehicle.

**Student/Faculty member** Initiating Actor 

-> The primary consumers in the system. User has the ability to access the mobile app to view current and historical parking space vacancy

**More?** ->

### Priority Description of Requirements ###

**RE-1: 3** System locates user's current location to optimize search.

**RE-2: 2** System provides user with real time data showing what parking lots are the fullest.

**RE-3: 5** System shall provide user with lot options to choose from.

**RE-4: 5** System accesses the database to  locate vacant parking spaces.

**RE-5: 4** User is able to reserve the parking space for brief time, while they drive to the location.

**RE-6: 3** System provides user option to navigate to the parking space.

**RE-7: 1** System can provide user with data demonstrating expected flow derived from date, time, and lot.

### Use Cases: Descriptions ###

**UC-1: FindLot** User uses their current location to find a parking lot.

**UC-2: GetCurrentData** User access real time data on a parking lot's vacancy.

**UC-3: GetLot** User chooses a parking lot.

**UC-4: GetSpots** User searches for available parking spaces.

**UC-5: ReserveSpot** User reserves a parking space for a brief time.

**UC-6: NavigateToLot** User chooses to use navigation to reach the parking space.

**UC-7: GetPastData** User access data information showing expected trends of occupancy per parking lot.

## Traceability Table ##

		UC1		UC2		UC3		UC4		UC5		UC6		UC7
	--------------------------------------------------------------------------------------------------------------
	REQ1	 X
	--------------------------------------------------------------------------------------------------------------
	REQ2			 X		 X		 X		 		 
	--------------------------------------------------------------------------------------------------------------
	REQ3	 X		 X		 X 		 X		 				 X
	--------------------------------------------------------------------------------------------------------------
	REQ4			 X		 		 X		 X		 X
	--------------------------------------------------------------------------------------------------------------
	REQ5									 X				
	--------------------------------------------------------------------------------------------------------------
	REQ6	 										 X
	--------------------------------------------------------------------------------------------------------------
	REQ7													 X	
	--------------------------------------------------------------------------------------------------------------

## Domain Model ##

In the works...
