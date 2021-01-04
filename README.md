# miro2jira

## Install the miro webplugin and use it:

Follow the instructions at [this link](https://developers.miro.com/docs/how-to-start#section-3-create-an-app) using the following parameters:

- the web plugin url is `https://marcobrioschi-lm.github.io/miro2jira/`
- the auth flag necessary is only the `boards:read`

## How use the plugin:

- select the widgets
- push the <img src="images/miro2jira.svg" width="12" height="12" style="display: inline;" /> `miro to jira` custom icon in the bottom bar
- copy the subtasks definitions from the left side panel
- in Jira open the target issue and use the menu item `Create multiple Sub-Tasks` to import all the definitions

## To test locally:

- npx serve -p 8080
- npx ngrok http 8080

## Disclaimers

- The plugin is provided AS IS AND NOT WELL TESTED, use AT YOUR RISK
- No Script Were Harmed in the Making of This Plugin