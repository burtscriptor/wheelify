Hey - Welcome to InclusiveDine 
=============

Access to - [InclusiveDine](https://inclusive-dine-30e4e63a5918.herokuapp.com/)

** This application is currently going through a revamp to improve the style and user experience. ** 15 July

Developed as a user-centric CRUD application using Express and Mongoose as the backend, InclusiveDine was created to allow authenticated users to add reviews of venues, chiefly restaurants. The review theme centers around how accessible a venue is to people that require mobility assistance, such as those with wheelchairs. This RESTful API is designed and styled to work across desktops, tablets, and mobile devices.

## Motivaton 
The world has an aging popular and therefore a growing demographic of people that will require mobility assistance. InclusiveDine aim is to promote a society whereby everyone can particpate to the best standards
and enjoy the fruits of society.

## So what are the features?

Add venues, add a review to that review. Edit or delete your own reviews. View a list of venues that users have added and their reviews.

## Basic walk through
Visitors to the site are met with a simple landing page. This contains some basic information about the site as well as what might be frequently asked questions. The two navigational options are to log in or view venues and reviews.
<img src="https://i.imgur.com/VE9G4Ka.png" alt="image" width="300" height="auto">


After clicking Log in or Join the team, the visitor is directed to the well-known Google OAuth page to sign in with a Google account.

<img src="https://i.imgur.com/efkVA8g.png" alt="image" width="300" height="auto">

Upon completing authentication with Google, the page displays their name and Google avatar. It also provides a greater scope of navigation: access to their user dashboard where reviews created with their account are displayed and the ability to Add a venue for other users to review as well.

<img src="https://i.imgur.com/8SvR58J.png" alt="image" width="300" height="auto">

This user has reviews and may scroll down through them with the option to Edit or Delete an individual review.

<img src="https://i.imgur.com/HY3ub66.png" alt="image" width="300" height="auto">

Navigating to Venues and Reviews displays a list of venues that have been added.

<img src="https://i.imgur.com/vECcily.png" alt="image" width="300" height="auto">

Clicking on the reviews button takes you to the reviews page for that review.

<img src="https://i.imgur.com/owVSqky.png" alt="image" width="300" height="auto">

Clicking Add a Review brings up a review form. Checkboxes were used to keep things simple for the user and allow for consistency across reviews. The textarea allows for additional feedback.

<img src="https://i.imgur.com/il7sv2V.png" alt="image" width="300" height="auto">




**Technologies Used**: 
* [OAuth](https://oauth.net/2/) - A standard protocol of authenziaton in web development.
* [Model View Controller architecture](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) - Software design pattern.
* [Javascript](https://en.wikipedia.org/wiki/JavaScript) - High level run time language.
* [Node](https://en.wikipedia.org/wiki/Node.js) - Run-time enviroment.
* [Express.js](https://en.wikipedia.org/wiki/Express.js ) - Back-end web aplication for RESTFul APIs.
* [HTML](https://en.wikipedia.org/wiki/HTML) - Markup language.
* [CSS](https://en.wikipedia.org/wiki/CSS) - Language used for expressing presentation and structure of documents.
* [MongoDb](https://en.wikipedia.org/wiki/MongoDB) - Document orientated database.
* [Mongoose](https://en.wikipedia.org/wiki/Mongoose_(web_server)) - Networking library.
* [Bootstrap](https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)) - Frontend CSS framework.

**Key learnings**
* How client requests and controller responses flow through the model view controller framework.
* Importing and exporting modules in node enirvoment.
* When to embed data inside a model and when not to - if you want to perform full CRUD functionality upon it.
* Good expsoure to a variety of errors codes and their most likely cause.
* When to / or not to forward / ?

**Next steps**
* Add a Google API that allows you to search for a resturant, add it to the InclusiveDine database so that reviews can be added.
* More rigourus testing. 
* Redesign layout and responsiviness.
* Develop a pathway for businesses to add themselves and promote their venues accessiblity.  
