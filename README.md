# CS5610project2

1. What were some challenges you faced while making this app?
Yue Yu: The main challenge of my part is to implement difficulty selection for changing URLs, difficulty status, and dynamic updates to the game grid. Due to the difficulty of the game determining the size of the grid and the number of landmines, each time we choose a different difficulty level, we need to dynamically initialize the grid based on the difficulty parameter in the URL. This requires the reasonable use of useEffect and useParams in React to synchronize and update the state. Another challenge is to maintain the correct synchronization of global states (such as grids, game states, etc.), which requires ensuring that updates within each file are consistent and consistent.

2. Given more time, what additional features, functional or design changes would you make?
Yue Yu: I will add a timer function to the game, recording the player's game time or countdown in this round, to increase the fun. In addition, using this timing function, we can record the player's game performance and display the fastest time or least steps in history, increasing the playability of the game.

3. What assumptions did you make while working on this assignment?
Yue Yu: I made these assumptions: firstly, the grid size and number of mines in the game are only related to the difficulty, without considering other complex parameters, and although the increase in difficulty increases the total mines, the difficulty of mine placement does not increase and remains random. The difficulty level chosen by the player each time will affect the initial page of the game, including the size of the grid and the number of mines.

4. How long did this assignment take to complete?
Yue Yu: This assignment took me approximately 12 hours to complete in the state management section and some of the components. Most of the time was spent on handling state synchronization, difficulty selection, and grid initialization. The design and implementation of some of the most basic rules and features of the game went smoothly, but it still took me some time to debug the interaction with LocalStorage and React state management.
