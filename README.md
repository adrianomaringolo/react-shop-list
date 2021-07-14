# React Shop List

This is a example app to show some Firebase features. It is a very simple Shopping List using React.

### To run this project
- `npm install`
- `npm start`

### Installing and configuring Firebase
- Install Firebase CLI: https://firebase.google.com/docs/cli#setup_update_cli
- run `firebase login`
- check available projects: `firebase projects:list`
    - if you have not created a project in Firebase Console yet, now it's the time
    - go to https://console.firebase.google.com/ and add a new project, it's simple
    - after that, if you list the projects again, your new project will be there

### Plug firebase and your project
- run `firebase init`
    - to use Firestore, you have to enable it in Firebase Console
        - go to Firestore > Create database > Init in test mode (attention to that point - you'll have to fix that later)
    - you will go throught some options for configuration:
        1 - select features you're using: let's use Hosting (both), Functions, Firestore
        2 - use an existing project
        3 - select your new project
        4 - use the following files as the defaults
        5 - (if using Functions) you can choose to use JS or TS and select the following options
        6 - public directory is `public`
        7 - rewrite all urls to /index.html
        8 - do not overwrite `index.html`
        8 - set up automatic builds and deploys with Github (this part is important!)
        9 - last: link with your github repo
        10 - leave the defaults for the others questions


- After the previous steps, some files and the folder `.github` will be created. The last one contains the configuration for CI/CD with [Github actions](https://github.com/features/actions)

- If you push your code to main now, it will activate the actions to build and deploy your code. Go to Firebase Console > Hosting, you'll see there is a new deploy item in the list!

- There you go, just access the address `<project id>.web.app` and you'll see your react app