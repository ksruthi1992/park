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

-Database manager	


### Actors and goals ###

**Hardwired sensors** Participating Actor (**GetSpots** UC-4)

-> Detects if a vehicle in a certain spot is present, "Green" light means vacant, "Red" means occupied.

**Digital Displays** Participating Actor (**GetCurrentData** UC-2,UC-4)

-> Goal is to display how many spots are remaining in a given lot.


**Mobile App** Participating Actor (UC-2, **ReserveSpot** UC-5)

-> This is where consumers check for open spots, and reserve for parking spots if the feature is available.

**Database** Participating Actor (UC-2, **GetPastData** UC-7)

-> Stores all the data, status and information in all parking spaces/garages.

**Parking enforcers/employees** Initiating Actor 

-> They maintain and scout the garage for safety and checks the validity of the permit in every vehicle.

**Student/Faculty member** Initiating Actor (UC-2, UC-7)

-> The primary consumers in the system. User has the ability to access the mobile app to view current and historical parking space vacancy


### Priority Description of Requirements ###

**REQ-1: 3** System locates user's current location to optimize search.

**REQ-2: 2** System provides user with real time data showing what parking lots are the fullest.

**REQ-3: 5** System shall provide user with lot options to choose from.

**REQ-4: 5** System accesses the database to locate vacant parking spaces.

**REQ-5: 4** User is able to reserve the parking space for brief time, while they drive to the location.

**REQ-6: 3** System provides user option to navigate to the parking space.

**REQ-7: 1** System can provide user with data demonstrating expected flow derived from date, time, and lot.

**REQ-8: System can lookup user schedule and suggest parking lots that are available and prioritize based on destination.

**REQ-9: 5** System shall record all occupied and vacant spots to the database on real time. 

### Use Cases: Descriptions ###

**UC-1: FindLot** User uses their current location to find a parking lot.

**UC-2: GetCurrentData** User access real time data on a parking lot's vacancy.

**UC-3: GetLot** User chooses a parking lot.

**UC-4: GetSpots** User searches for available parking spaces.

**UC-5: ReserveSpot** User reserves a parking space for a brief time.

**UC-6: NavigateToLot** User chooses to use navigation to reach the parking space.

**UC-7: GetPastData** User access data information showing expected trends of occupancy per parking lot.

**UC-8: Enter Scheduer** User can create a schedule of destinations based on weekly calendar so that the system can suggest parking lots.

**UC-9: SuggestLots** System suggests parking lots by available number of spots and users scheduled destination.

**

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
	REQ8
	--------------------------------------------------------------------------------------------------------------
	REQ9	 		 X		 		 X		 X				 X	

## Fully Dressed Use Case Descriptions ##
### UC1 - Find Lot ###
**Related Requirements:** REQ1, REQ3
**Initiating Actor:** Student/Faculty Member

**Goal:** User wants to find closest possible parking spot from their current location

**Participating Actors:** Sensors, Database, Google Maps API, Mobile App

**Preconditions:** A parking spot must be available, all services must be up and running

**PostConditions:** User is given directions on how to get to parking spot

**Main Success Scenario:**

1) User opens up app with location permissions enabled

2) Google Maps is able to locate phone

3) User requests to be guided to closest possible vacant parking spot

4) Database returns all possible parking places

5) Google Maps chooses closest spot

6) Google Maps uses navigation to direct user to parking place

**Extensions:** Spot gets taken by another vehicle before user has arrived at desired parking spot.

### UC2 - Get Current Data ###
**Related Requirements:** REQ2, REQ3, REQ4, REQ9

**Initiating Actor:** Student/Faculty Member, Parking enforcers/employees

**Goal:** User wants to see the current status on all parking areas

**Participating Actors:** Sensors, Database, Digital Displays, Mobile App

**Preconditions:** Must have mobile app in order to see all used and empty spots in the parking lot/garage selected

**PostConditions:** User is given all the vacant spots to choose from

**Main Success Scenario:**

1) User opens up app with location permissions enabled

2) Application gives the option to choose what parking area the user want to enter on.

3) Application zooms in on the chosen parking area, displaying all the used and empty spots on real time

## Domain Model ##

In the works...
