# Build a Cookie Clicker Game

Week 3 assignment - Build a Cookie Clicker Game

Created a cookie-clicker inspired game called Punching Bag as part of the Tech Educators course.

This is built on VSCode using HTML, CSS and JavaScript.

## Requirements
- 🎯 Fetch upgrade data from the provided API and at least one upgrade from the API update the cookie count. ✅
- 🎯 Ensure that functions are used effectively to keep code organised and reusable. ✅
- 🎯 Implement event listeners to handle user interactions. ✅ 
- 🎯 Use local storage to save and restore the cookie count and relevant game information. ✅
- 🎯 Use setInterval to increment the cookie count and manage the game state each second. ✅
    -  Managing the game state includes saving progress and updating the DOM.

## Stretch Requirements
- 🏹 Consolidate upgrade management by managing all upgrades in a single function. ✅
- 🏹 Improve UX with animations, sound effects, or other visual effects. ✅
- 🏹 Fantastic use of README to provide important information such as a description of the project, how to deploy and other app information.
- 🏹 Implement error handling using try/catch.
- 🏹 Create a menu for users to adjust game options like sound effects or display preferences.

## Resources: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- https://www.youtube.com/watch?v=1C-seWzn9vo&ab_channel=Soupy 
- https://www.youtube.com/watch?v=d6lHO2EI1WI&ab_channel=OnlineTutorials
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

## Reflection:

This week, we had to build a simple clicking game. I took inspiration from the cookie clicker game and created a clicking game called Punching Bag. 

I have managed to achieve the requirements for this assignment. 

There were a couple of things that I found difficult with this assignment. The first one was trying to save the game progress for users in local storage. At first, I wrote the localStorage into my clickCounter function. It did manage to save the data but everytime I refreshed the page, it wouldn't update the display on the webpage. I went over the class resources that was provided in Moodle and decided to write localStorage as its own function for better readability. It now saves all the game progress like the punchCount and cps, and displays it correctly even after refreshing the page. 

Another difficulty I experienced was with CSS Grid. I initially wanted to use the grid display but it was giving me a lot of issues when trying to place specific elements on the page. My footer kept overflowing pass the view height that I gave my containers and it was not what I wanted. After many attempts trying to fix this, it was unsuccessful so I decided to use CSS Flexbox instead. Using display flex managed to sort out my overflowing issue and I was able to place all the elements on the page to where I want it. 

One thing I did learn in this assignment was that I was able to remove the background and border of the buttons. When I first set an image in place of the button, it was showing a white background, which is not what I wanted. After researching online and reading from websites like Stack Overflow, I found that I could just set the background and border as none. 

Overall, this assignment did have its fair shares of difficulty but I did utilised what I learned from last week's assignment and implemented it into my Punching Bag game, along with new JavaScript knowledge I picked up from the lessons this week. 

Any feedback will be appreciated as I am always looking for ways to continuously improve.
