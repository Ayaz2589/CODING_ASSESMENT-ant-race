# Ant Race - Frontend Assement

### What is this application?

This application displays statics as well as calculations for likey win senarios for ant-racing.

This application was built as a frontend assesment. A time limit of **2-3 hours** was put on the application, so many aspects may not have been best practices and were implemented in order to save time.

### How to start App:

`cd` into the working directory and run `npm run start` in order to start the application on port `3000`.

Once the app has been loaded click the **Get Ant Data** button.

This will fire a fake async request that will return the required ant data.
(request has a random delay to simulate ASYNC request)

Once Ant Data is loaded, they will be displayed along with various ant stats.

A new **Start Race** button will also apear. Once clicked The `generateAntWinLikelihoodCalculator()` function will be run with progress being displayed on the UI.

As the Race reults are populated. The UI lists Ants from highest likelyhood to lowest. _This portion is not heavily designed due to time limit._

### Future additions:

Due to the time restraint of 3 hours many UI features where not added. In the future various additions should be added in order to enhance the User Experience:

- Calculations should show a loading spinner when "In Progress".
- Better designs for Ant "Cards".
- Better experience for Race Results.
- Remove "any" type from typescript.
