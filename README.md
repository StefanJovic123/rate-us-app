# Rate Us App

## Architecture

Application has following folder structure (here SRC folder is covered)

- assets             // folder holds all images like .png, .jpg, jpeg and .svgs that are used in app
- components         // folder holds all components that are used in app, serves as custom UI-kit specific to this project
- eventHandler       // folder holds definition of all global handlers for emitted events
- navigation         // folder holds definition of all available screens for this app
- screens            // Screens holds all components that are used inside `navigation` folder, here are placed only components that are added to navigation stack
- services           // holds following services: `emitter`, `inStoreReview`, `storage`, all services represents a interface like nature, so if in future we need to change library for emitter or storage we just need to do that in one place and impact whole app
- websocket          // holds definition of websocket integration in form of a provider/context which is attached during application creation and which is available globally
- App.js             
- constants.js       // constants that are used throughout application
- theme.js           // file contains custom definition of application theme


### used libraries
- react-native-svg      // used for rendering svg images as components
- react-native-ratings  // component that has been used for rendering ratings component
- native-base           // UI kit library
- eventemitter3         // enables emitting and listening to events

Navigation libs
- @react-navigation/native
- @react-navigation/native-stack


### App.js explained

```
const App = () => {
  return (
    <NativeBaseProvider theme={theme}>          // adds theme and css classes for native-based components
      <AlertProvider>                           // Provider that allows us to call Alert to appear in any component without a need to import component when using i
        <EventsProvider>                        // Context that provides functionality of listening to events and emitting events, it is used for on demand navigation based on alert showing when new message is passed via socket
          <WebsocketProvider>                   // provides global integration with websocket, also it provides handlers for socket messages, it is placed under `EventsProvider` cause socket message handlers are emitting events that are forcing app to certain behavior like showing alert when backend sends event for it
            <NavigationContainer />             // injects all screens connected to navigation stack
          </WebsocketProvider>
        </EventsProvider>
      </AlertProvider>
    </NativeBaseProvider>
  );
};
```


### About Application functions

Application needs to provide following functionalities

mocked functions (there are buttons which are just triggering alert under certain conditions)
- Creating a public game 
- Joining someone else’s public game
- Inviting other users to a game
- Accepting an invitation 

10 seconds after any of the above actions happen, a popup is displayed in the app which prompts the user to review the app in the stores. This behavior is handled inside app, so if user triggers one of the above actions then alert dialog will be shown after 10 seconds, for other expected scenarios, backend should track and send messages via socket in order to force app to show rate us dialog.

Variant Popup 1:
Rules when the Rate Us popup is displayed:
- Maximum 3 times in total 
- Minimum 24h between the popup displays
- After the user rates us in the app, the Rate Us popup will not be displayed anymore


Variant Popup 2:
Rules when the Rate Us popup is displayed:
- Maximum 1 time per week in the first month after the user has joined RacketPal
- Maximum 1 time per month in the subsequent months after the user has joined RacketPal
- After the user clicks on the “Rate us” or the “Not yet? Give us feedback” button in the app, the Rate Us popup will not be displayed anymore

In order to test socket connection use this tool
https://www.piesocket.com/

creds are 
email: stefan.jovic.up@gmail.com
password: stefan@125

- dashboard select channel
- find and click on button `Test Online`
- in next window click on `Connect`
- after connect is done tpe anything in input and click send (it is made to react to any message for conveniance but there is code and comments that are indicating that events should be filtered in real world app)


## NOTE
Backend flow diagram is not created cause of simple reason, it is very simple how i envision this solution, after one of mentioned actions is triggered depending on what we did, rated app or skipped it, request to backend is sent indicating that event and from that point on backend keeps tracks of when should next rate us dialog appear in app, appearance of rate us dialog can be forced by sending message via socket which will force showing rate us dialog. App is not doing anything regarding keeping tabs where last Rate Us dialog appeared and why.. all of that is left with backend.


