# React Shop List

This is a example app to show some Firebase features. It is a very simple Shopping List using React. You can add, check, remove the items and clear all the items from the list.

Demo: https://react-shop-list-ec784.web.app/

### To run this project
- `npm install`
- `npm start` (database will not work, you have to configure your own firebase project)

Suggestion: if you want to fully deploy this app in your firebase project, you'll have to:
- download the zip of the main branch. That will make the process easir because it comes without git
- remove `.github` folder 

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

##### Configure env variables
 There should a `.env` file for your app. But *BE CAREFUL*, that file contains sensitive information, so you should not commit that file!
 My recommendation is to include the [GitHub Actions environment VARs](https://docs.github.com/en/actions/reference/environment-variables) in the [Github Repo Secrets](https://docs.github.com/en/actions/reference/encrypted-secrets).

 For learning purposes, you can create a PRIVATE repo and commit your `.env` file. But you should remove the `env` area from the GitHub actions `firebase-hosting-merge.yml` (line 12)

- After the previous steps, some files and the folder `.github` will be created. The last one contains the configuration for CI/CD with [Github actions](https://github.com/features/actions)

- If you push your code to main now, it will activate the actions to build and deploy your code. Go to Firebase Console > Hosting, you'll see there is a new deploy item in the list!

---
There you go, just access the address `<project id>.web.app` and you'll see your react app working.

Remember that __configuration is not always so smooth__, so if you have problems in the process, go easy! Read the docs, check every step you made and start over if needed!

That example is very basic, keep learning and evolving your apps! Visit [Firebase Docs](https://firebase.google.com/docs) and learn more!

Happy firebasing! :heart: