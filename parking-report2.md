# Parking Finder Report 2
#

## <a name = "Table_of_Contents"></a>Table of Contents ##

**[Group Information](#Group_information)**

**[Table of Contents](#Table_of_Contents)**

**[Interaction Diagrams](#Interaction_Diagrams)**

**[Class Diagrams](#Class_Diagrams)**

- *[Class Diagram](#class_diagram)*

- *[Data Types and Operation Signatures](#data_types)*

**[System Architecture and System Design](#System_Architecture)**

- *[Architectural Styles](#Architectural_Styles)*

- *[Identifying Subsystems](#Identifying_Subsystems)*

- *[Mapping Subsystems to Hardware](#Mapping_Subsystems)*

- *[Persistent Data Storage](#Persistent_Data_Storage)*

- *[Network Protocol](#Network_Protocol)*

- *[Global Control Flow ](#Global_Control_Flow)*
	
**[Algorithms and Data Structures](#Algorithms_and_Data_Structures)**

- *[Algorithms](#Algorithms)*

- *[Data Structures](#Data_Structures)*

**[User Interface Design and Implementation](#User_Interface_Design)**

**[Progress Report and Plan of Work](#Progress_Report)**

- *[Progress Report](#Progress_Report)*

- *[Plan of Work](#Plan_of_Work)*

- *[Breakdown of Responsibilities](#Breakdown_of_Responsibilities)*

**[References](#References)**

## <a name = "Interaction_Diagrams"></a>Primary Use Cases & Interaction Diagrams ##
Minimal user interactions clearly differentiate the ParkMe app from other solutions. In fact, the app is so easy to user that a driver can simply start the solution and be routed to an available parking space, hands free. For the driver who wants to find a parking space close to a specific building on campus, the only choice required is to select the building and then ParkMe handles the rest.

The following high level use cases and interactions illustrate how simple it is to use ParkMe.


###Use Case Actors###

**Driver** (Initiating Actor)

* A Driver can be a university student, faculty member, or campus staff. Drivers are the primary consumers of the system. A Driver's goal is to find the nearest available parking space based on their approach to campus or destination on campus.

**Sensor** (Participating Actor)

* A Sensor provides the self-report technology the system relies on to determine the occupancy status of an individual space in a parking lot. The Sensor provides real-time status updates of either occupied or vacant.

**Navigator** (Participating Actor)

* The Navigator guides a driver to a vacant parking spot. The Navigator provides several important services: first, it tracks the current location of a driver; second, it provides a route to a parking lot; third, it provide audio directions to the driver. 

**SpaceFinder** (Participating Actor)

* The SpaceFinder provides the system with real-time tabulation of the total number of vacant spaces in each parking lot on campus, and locates the best parking lot and available space.

###Use Case 1 - ParkMe Valet###

ParkMe Valet automatically routes the driver to the best parking space. The driver simply starts the app and relies on driving instructions provided by the Navigator. 

<img src="./diagrams/Report2_UcAutoParkMe.png"/>

Utilizing the location service provided by a mobile device, ParkMe tracks the driver's progress toward campus, and when s/he is close to campus ParkMe checks with the SpaceFinder to find the closest parking lot with the highest availability. Once the driver enters the parking lot the Navigator requests the geo coordinates for and available space and automatically routes them to spot. 

<img src="./diagrams/Report2_UcAutoParkMeInteraction.png"/>

###Use Case 2 - ParkMe Near###

ParkMe close to my destination lets the driver select a building on campus so that it can prioritize parking lots in its vicinity. 

<img src="./diagrams/Report2_UcAutoParkMe.png"/>

The key difference between ParkMe Close and ParkMe Valet is that the driver can have the system prioritize parking lots close to his/her destination.

<img src="./diagrams/Report2_UcAutoParkMeInteraction.png"/>



## <a name = "Class_Diagrams"></a>Class Diagrams and Interaction Specifications ##

### <a name = "Class_Diagrams"></a>Class Diagram ###

**LocationService Class**

GetMobileLocation()

**Navigator Class**

Properties
- driverMode: int
- driverDestination: {decimal(3,N), decimal(3,N)}
- currentGeoCode: {decimal(3,N), decimal(3,N)}
- lastGeoCode: {decimal(3,N), decimal(3,N)}
- destGeoCode: {decimal(3,N), decimal(3,N)}

Methods
- TrackProgress()
- SetRoute()
- HandOffRoute()

**SpaceFinder Class**
- driverDestination


Methods
- FindBestLot()
- FindCandidateSpaceList()


**Design Patterns**

Observable
- Database Calls via Http
- CandidateSpaceList to be notified when space availability state changes


**DbAccess**

Methods
- getLotsDb()
- postLotDb()
- putLotDb()
- deleteLotDb()


**LotsService**

ILot, ISpace

Methods
- GetLots(driverMode: int)
- AddLot()
- UpdateLot()
- DeleteLot()
- 
- GetSpaces(state: string)
- AddSpace()
- UpdateSpace()
- DeleteLot()


**Admin Class**

Methods
- ListLots()
- ListSpacesInLot()
- UploadLot()
- SuspendLot()
- SuspendSpace()


### <a name = data_types></a>Data Types and Operation Signatures ###
..

## <a name = "System_Architecture"></a>System Architecture and System Design ##

### <a name = "Architectural_Styles"></a>Architectural Styles  ###

**Client/Server**
1. Centralized database
2. URL based REST API

### <a name = "Identifying_Subsystems"></a>Identifying Subsystems ###
..

### <a name = "Mapping_Subsystems"></a>Mapping Subsystems to Hardware ###
..

### <a name = "Persistent_Data_Storage"></a>Persistent Data Storage ###
..

### <a name = "Network_Protocol"></a>Network Protocol ###
..

### <a name = "Global_Control_Flow"></a>Global Control Flow  ###
..

## <a name = "Algorithms_and_Data_Structures"></a>Algorithms and Data Structures ##

### <a name = "Algorithms"></a>Algorithms ###
..

### <a name = "Data_Structures"></a>Data Structures ###
..

## <a name = "User_Interface_Design"></a>User Interface Design and Implementation ##
..

## <a name = "Progress_Report"></a>Progress Report and Plan of Work ##

### <a name = "Progress_Report"></a>Progress Report ###
..

### <a name = "Plan_of_Work"></a>Plan of Work ###
..

### <a name = "Breakdown_of_Responsibilities"></a>Breakdown of Responsibilities ###

**Robert Fuller**

1. Database and REST API
2. Web Server
3. Web App
4. Web Admin

## <a name = "References"></a>References ##
..







