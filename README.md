# Instagram Sponsors

by [@codebreakerjulia](https://www.instagram.com/codebreakerjulia/)

## Installation Instructions

* NOTE: This app isn't going to work because I didn't include the Firebase files.
* After downloading the files, run ```npm install``` and then ```npm start``` and then ```react-native-run-ios```

## Session 2

*🗓 W, Nov 12, 2018* <br />
*📍 Haddon Township Library* <br />
*🕐 4:20 pm - 6:20 pm* <br />
<br>
Made almost zero progress today. Tried to connect app to Firebase using react-native-firebase and the [manual integration](https://rnfirebase.io/docs/v5.x.x/installation/initial-setup) for [iOS](https://rnfirebase.io/docs/v5.x.x/installation/ios) but when I tried to follow the instructions and then run the project, the app would crash immediately on the simulator with no error message.
<br><br>
Finally, decided to use delete all the changes I made and revert to previous commit. Instead of importing ```react-native-firebase``` I just imported ```firebase``` and referred to one of my previous projects to try to authenticate.
<br><br>
Got a little stuck here for a bit due to a syntax error, (forgot to add ```{}``` when importing a constant from another js file}) and went down a rabbithole because of the the simulator error message stating that I had an "invalid API key".
However, with commit 4, we have successfully connected Firebase and authenticated anonymously.


## Session 1

*Date: Su, Nov 11, 2018 (morning)*

### 💭 Learning Lessons 💭

* After adding a new library, need to restart app.

### ✅ Errors Resolved ✅

* Cannot find module 'local-cli/cli.js' when trying to run "npm start"

![local cli](screenshots/session1/local-cli.png)

Resolved: "npm install"

*
*
*
*
*

# Everything below is template stuff (IGNORE)


### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

