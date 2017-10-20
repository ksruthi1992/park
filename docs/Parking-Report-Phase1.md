# Parking Finder Report
#

## Contents ##

**[Project Proposal](https://github.com/CSUS-CSC-131-Fall2017/park/blob/master/Pink%20Unicorns%20-%20Proposal.md)**

**[Introduction](#Introduction)**

**[Glossary](#Glossary)**

**[Functional Requirement Specifications](#Functional_Requirement)**

- *[Stake Holders](#stake_holders)*

- *[Customer Requirements](#cust_reqs)*

- *[Actors and Goals](#actors_goals)*

- *[Use Cases](#use_cases)*

	- *[Descriptions](#case_descriptions)*

	- *[Full Case Descriptions](#full_desc)*
	
	- *[Use Case Diagram](#use_diagram)*
 
	- *[Traceability Table](#trace_table)*

	- *[System Sequence Diagrams](#seq_diagram)*

**[Nonfunctional Requirements](#Nonfunction_Reqs)**
	
**[Domain Analysis](#Domain_Analy)**

- *[Domain Model](#domain_model)*

- *[System Operation Contacts](#op_contacts)*

- *[Mathematical Model](#math_model)*

## <a name = "Introduction"></a>Introduction ##

**Goal**

Our goal is to help a university driver quickly and easily locate an available space in an university campus parking lot. Our solution will help the driver easily determine which parking lot provides the highest availability of vacant spaces, based on either their approach or destination. In addition, our solution with provide a college campus with the technology required to provide real-time occupancy of all spaces within each parking lot.

**Problem Statement**

Currently, when a driver goes to a university campus s/he is unable to determine which parking lot might have spaces available, and must first guess which parking lot to enter and then drive lane by lane through the lot hoping to find a vacant spot. If s/he is unable to find a vacant spot in the current parking lot, then s/he must guess which lot to try next and repeat the painful process of traversing lane by lane to try and find a spot. In addition, campus parking enforcement also lacks the ability to provide real-time space occupancy based on self-reporting technology.

**Proposed Solution**

Our solution will help drivers to quickly and easily find an available space in a campus parking lot in the following ways:

* A driver will be able to select a destination on campus and then rely on audio navigation assistance for directions to the parking lot closest to their destination with the most available parking spaces

* A driver will be able to activate our solution which will then provide audio navigation assistance based on their approach to campus and direct them to the parking lot with the most available parking spaces

Our solution will help campus parking enforcement by providing the following tools:

* An enforcer will be able to rely on real-time self-reporting technology to determine the occupancy status of each parking lot

* An enforcer will be able to obtains up-to-date occupancy and vacancy totals for each parking lot at any time during the day

For additional details about our solution, refer to <a ref="Customer Statement of Requirements.docx">***Customer Statement of Requirements.docx***</a>.


## <a name = "Glossary"></a>Glossary ##

In the works...

## <a name = "System_Requirements"></a>System Requirements ##

In the works...

## <a name = "Functional_Requirement"></a>Functional Requirement Specifications ##

### <a name = stake_holders></a>Stakeholders ###
	
The following people are the one's who might benefit and get involved with the app:

* University Students

* University faculty and staff members

* University parking enforcement


### <a name = "actors_goals"></a>Actors and goals ###

**Driver** Initiating Actor

* A Driver can be a university student, faculty member, or campus staff. Drivers are the primary consumers of the system. A Driver's goal is to find the nearest available parking space based on their approach to campus or destination on campus.

**Sensor** Participating Actor

* A Sensor provides the self-report technology the system relies on to determine the occupancy status of an individual space in a parking lot. The Sensor provides real-time status updates of either occupied or vacant.

**Navigator** Participating Actor

* The Navigator guides a driver to a vacant parking spot. The Navigator provides several important services: first, it tracks the current location of a driver; second, it provides a route to a parking lot; third, it provide audio directions to the driver. 

**Reporter** Participating Actor

* The Reporter provides a user with real-time tabulation of the total number of vacant spaces in each parking lot on campus.


### Priority Description of Requirements ###

**REQ-1: ** System shall be able to record all spaces within each parking lot on campus.

**REQ-2: ** System shall be able to provide real-time occupancy status for each space within each parking lot on campus.

**REQ-3: ** System shall provide an Enforcer with the tools to upload and manage the records for each space within each parking lot on campus.

**REQ-4: ** System shall provide an Enforcer with on-demand reports to determine the current number of spaces in each of the parking lots on campus.

**REQ-5: ** System shall provide a Driver with the ability to select a destination on campus which will initiate the Navigator to provide audio directions to a parking lot near the destination with available spaces.

**REQ-6: ** System shall provide a Driver with the ability to activate the Navigator which will then provide audio directions to the nearest parking lot with available spaces once they are within 1 mile of campus based on their current approach.

**REQ-7: ** System shall provide ability to query for the nearest parking lot with available spaces based on a given location.

### <a name=case_descriptions></a>Use Cases: Descriptions ###

**UC-1: DefineLot** Enforcer is able to define a virtual representation of a parking lot.

**UC-2: SelfReportOccupancy** Sensor is able to self-report occupancy status of a parking space.

**UC-3: NavigateToLocation** Driver is directed to the parking lot with spaces nearest to location.

**UC-4: NavigateByApproach** Driver is directed to nearest parking lot with spaces based on approach.

**UC-5: LookupCurrentAvailability** Enforcer is able to determine occupancy of all parking lots.

**UC-6: GetPastData** User access data information showing expected trends of occupancy per parking lot.

**UC-7: ManualOverride** Enforcer can manually update the status of a parking space or lot.

## <a name = trace_table></a>Traceability Table ##

		UC1	UC2	UC3	UC4	UC5	UC6	UC7	UC8	UC9	UC10	UC11
	--------------------------------------------------------------------------------------------------------------
	REQ1	 X
	--------------------------------------------------------------------------------------------------------------
	REQ2		 X	 X	 X		 		 	 X	 X	 X
	--------------------------------------------------------------------------------------------------------------
	REQ3	 X	 X	 X 	 X		 	 X	 X	 X
	--------------------------------------------------------------------------------------------------------------
	REQ4		 X		 X	 X	 X		 X	 X	 X	 X
	--------------------------------------------------------------------------------------------------------------
	REQ5					 X				
	--------------------------------------------------------------------------------------------------------------
	REQ6	 					 X
	--------------------------------------------------------------------------------------------------------------
	REQ7							 X	
	--------------------------------------------------------------------------------------------------------------
	REQ8
	--------------------------------------------------------------------------------------------------------------
	REQ9	 	 X		  X	 X		 X	 X		 X	 X	

## <a name = full_desc></a>Fully Dressed Use Case Descriptions ##
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

### UC3 - Get Lot ###
**Related Requirements:** REQ2, REQ3, REQ4

**Initiating Actor:** Students, Faculty, Parking Enforcement

**Goal:** User wants to check the current state of a parking lot

**Participating Actors:** Sensors, Database, Mobile App

**Preconditions:** Mobile app is open on phone. Sensors and Database are functioning and up to date

**Post Conditions:** App displays all parking spots in a certain lot and displays each spot's state

**Main Success Sceneraio:**

1) User opens up the app

2) App displays heat map of Sac State with all parking lots being clickable

3) User clicks on a lot

4) App zooms in on the lot and displays current state of all parking spots in that lot


### UC4 - Get Spots ###
**Related Requirements:** REQ2, REQ3, REQ4, REQ9

**Initiating Actor:** Students, Faculty Members, Parking enforcement

**Goal:** User wants to search for available parking spaces

**Participating Actors:** Sensors, Database, Digital Displays, Mobile App

**Preconditions:** Must have mobile app installed to locate all open parking spaces and see those that are occupied

**Post-Conditions:** User is given all open parking spaces

**Main Success Scenario:**

1) User uses app which shows their current location

2) User is given options of different parking lots through the mobile app

3) User makes a selection

4) Application shows user the available parking spaces from the users current location selection

### UC6 - Navigate To Lot ###
**Related Requirements:** REQ4, REQ6

**Initiating Actor:** Student/Faculty Member

**Goal:** Navigates the user to their reserved parking spot or available parking spots.

**Participating Actors:** Sensors, Database, Mobile App,  Google Maps API

**Preconditions:** User must have GPS turned on and needs to have reserved or located the parking spot on the app.

**PostConditions:** User is guided, step-by-step, towards a parking spot.

**Main Success Scenario:**

1) User has located desired parking spot.

2) User is then guided, step-by-step, to a reserved or open parking spot.

3) Once in parking spot sensor sends parking space is non-vacant to database.

<a href="https://ibb.co/e2HZ15"><img src="https://preview.ibb.co/iumSM5/Sequence_Diagram_Uc_6.png" alt="Sequence_Diagram_Uc_6" border="0"></a>

**Alternative:**

1) Parking Spot is non-vacant.

2) Redirects user to another, close-by, parking spot.

3) Once in parking spot sensor sends parking space is non-vacant to database.

### UC7 - Get Past Data ###
**Related Requirements:** REQ3, REQ7, REQ9

**Initiating Actor:** Students, Faculty Members, Parking enforcement

**Goal:** User wants to access data showing the expected trends of occupancy per lot

**Participating Actors:** Sensors, Database, Digital Displays, Mobile App

**Preconditions:** Must have mobile app installed to access the database information keeping track of the trends of parking occupancy from past days

**Post-Conditions:** User is given all data information that was derived from past days

**Main Success Scenario:**

1) User uses app to indicate which parking lot data to access

2) Database returns query results 

3) Data is presented to user through the application interface

### UC8 - Scheduler ###
**Related Requirements:** REQ3, REQ4, REQ9

**Initiating Actor:** Students and Faculty Members

**Goal:** User wants to create a schedule of destinations based on weekly calendar so that the system can suggest parking lots.

**Participating Actors:** Database, Mobile App, Google Maps API

**Preconditions:** GPS enabled, internet connection to access database, signed into application.

**Post-Conditions:** The app will suggest a certain schedule destination based on their weekly calendar.

**Main Success Scenario:**

1) User signs into application.

2) User goes to schedule section of app.

3) User enters their weekly schedule, such as class location and start times, into app.

4) The app will then suggest which parking lots to park at for each day of the week.

5) The app saves the suggested destination schedule for the user. 

<a href="https://ibb.co/gYehKQ"><img src="https://preview.ibb.co/bGHDR5/UC_8.png" alt="UC_8" border="0"></a>

### UC9 - SuggestLots ###
**Related Requirements:** REQ3,  REQ4

**Initiating Actor:** Students and Faculty Members

**Goal:** To quickly suggest the user with parking lots depending on the availability of parking spaces.

**Participating Actors:** Database, Mobile App, 

**Preconditions:** GPS enabled, internet connection to access database, signed into application.

**Post-Conditions:** App suggests the user with parking lots that are available to park at.

**Main Success Scenario:**

1) User opens application.

2) User taps on suggestion lots part of app.

3) App accesses database.

4) App quickly suggests user with parking lots that have the most availability.

### UC10 - TicketViolations ###

**Related Requirements:** REQ2, REQ4, REQ9

**Initiating Actor:** Parking enforcers/employees

**Goal:** User wants to maintain the parking area by making sure every driver follows the parking rules.

**Participating Actors:** Sensors, Digital Displays, Mobile App

**Preconditions:** Employee/Enforcer must have all the equipments needed while partrolling the area.

**PostConditions:** A ticket will be placed in a vehicle if the driver violated a parking rule.

**Main Success Scenario:**

1) Enforcer patrols the area to check every vechicle.

2) Mobile app can be a supplementary tool for the enforcer to check the parking area.

3) A ticket will be placed in a vehicle if the driver violated one of the parking rules:
 
 -No parking permit/daily parking pass in the vechicle.
 
 -Vehicle with a student permit parked on a staff parking.
 
 -Vehicle without a handicap parking permit parked on a handicap parking spot.
 
 -Vehicle parked on a reserved spot, closed spot, non-parking spot, or parked in two or more spots.
 
### UC11 - ManualOverride ###

**Related Requirements:** REQ2, REQ4, REQ9

**Initiating Actor:** Parking enforcers/employees

**Goal:** User has the access to manually change the status of a certain spot.

**Participating Actors:** Sensors, Digital Displays, Mobile App, Database

**Preconditions:** Parking lot must be vacant.

**PostConditions:** A parking lot will be closed/open.

**Main Success Scenario:**

1) Parking Enforcer will choose a certain spot or spots.

2) Parking Enforcer can manually change the status of a spot if it needs to be down for maintenance or reservation.

3) The Sensor will display green if it's open, and red if it's closed.


### <a name = use_diagram></a> Use Case Diagram ###

![Screenshot](diagrams/UCDiagram.png)

### <a name = seq_diagram></a> System Sequence Diagram ###
![image](diagrams/Find_Lot.png)

![image](diagrams/UC2-GetCurrentData.png)

![image](diagrams/UC3-GetLot.png)

![image](diagrams/UC11-ManualOverride.png)

![image](diagrams/NavigateTo.png)

## <a name = Nonfunctional_Reqs></a> Nonfunctional Requirements ##

## <a name = Domain_Analysis></a> Domain Analysis ##

### <a name = domain_model></a> Domain Model ###

In the works...

### <a name = op_contacts></a> System Operation Contacts ###

### <a name = math_model></a> Mathematical Model ###
