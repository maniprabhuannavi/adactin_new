Feature: Hotel Booking application 

@smoke
Scenario Outline: Login Module in adactin application 
	Given User launch adactin the application 
	When User enter "<username>" in username field 
	And User enter "<password>" password field 
	Then clicks login buton in adactin application 
	
	Examples: 
		|username				|password	|
		|mani	 				|123		|
		|maniprabhu			    |mani123	|
		|maniprabhuannavi		|Mani@3411  |
		

@sanity
Scenario: search hotel
	Given User application 
	When User enter  in username field 
	And User enter password field 
	Then clicks application 