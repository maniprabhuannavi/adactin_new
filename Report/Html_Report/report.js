$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/featurefile/adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking application",
  "description": "",
  "id": "hotel-booking-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login Module in adactin application",
  "description": "",
  "id": "hotel-booking-application;login-module-in-adactin-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launch adactin the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter \"\u003cusername\u003e\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter \"\u003cpassword\u003e\" password field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks login buton in adactin application",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "hotel-booking-application;login-module-in-adactin-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "hotel-booking-application;login-module-in-adactin-application;;1"
    },
    {
      "cells": [
        "mani",
        "123"
      ],
      "line": 12,
      "id": "hotel-booking-application;login-module-in-adactin-application;;2"
    },
    {
      "cells": [
        "maniprabhu",
        "mani123"
      ],
      "line": 13,
      "id": "hotel-booking-application;login-module-in-adactin-application;;3"
    },
    {
      "cells": [
        "maniprabhuannavi",
        "Mani@3411"
      ],
      "line": 14,
      "id": "hotel-booking-application;login-module-in-adactin-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Login Module in adactin application",
  "description": "",
  "id": "hotel-booking-application;login-module-in-adactin-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launch adactin the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter \"mani\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter \"123\" password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks login buton in adactin application",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_launch_adactin_the_application()"
});
formatter.result({
  "duration": 17042843609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mani",
      "offset": 12
    }
  ],
  "location": "stepdefinition.user_enter_in_username_field(String)"
});
formatter.result({
  "duration": 72723358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 12
    }
  ],
  "location": "stepdefinition.user_enter_password_field(String)"
});
formatter.result({
  "duration": 45450159,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.clicks_login_buton_in_adactin_application()"
});
formatter.result({
  "duration": 380288465,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login Module in adactin application",
  "description": "",
  "id": "hotel-booking-application;login-module-in-adactin-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launch adactin the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter \"maniprabhu\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter \"mani123\" password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks login buton in adactin application",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_launch_adactin_the_application()"
});
formatter.result({
  "duration": 336185954,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "maniprabhu",
      "offset": 12
    }
  ],
  "location": "stepdefinition.user_enter_in_username_field(String)"
});
formatter.result({
  "duration": 62389319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mani123",
      "offset": 12
    }
  ],
  "location": "stepdefinition.user_enter_password_field(String)"
});
formatter.result({
  "duration": 52703504,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.clicks_login_buton_in_adactin_application()"
});
formatter.result({
  "duration": 386746501,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login Module in adactin application",
  "description": "",
  "id": "hotel-booking-application;login-module-in-adactin-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launch adactin the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter \"maniprabhuannavi\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter \"Mani@3411\" password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks login buton in adactin application",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_launch_adactin_the_application()"
});
formatter.result({
  "duration": 330181581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "maniprabhuannavi",
      "offset": 12
    }
  ],
  "location": "stepdefinition.user_enter_in_username_field(String)"
});
formatter.result({
  "duration": 72573481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mani@3411",
      "offset": 12
    }
  ],
  "location": "stepdefinition.user_enter_password_field(String)"
});
formatter.result({
  "duration": 50830201,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.clicks_login_buton_in_adactin_application()"
});
formatter.result({
  "duration": 993851025,
  "status": "passed"
});
});