# Angular2Demo

This is the setup for a Todo app in Angular 2 and is part of a school work in the course RIA-development at the [Linneaus University](http://lnu.se/).

##Youtube tutorial
[HERE](https://www.youtube.com/watch?v=vX9ftlkBGVA)

Known errors in the tutorial:

- The Task interface is never placed in it's own file and will result in a TypeScript error when not found.
- The Task dueDate should be of the type String since it is, a string. This will also result in a TypeScript error.

I'm sorry for any other unknown errors the tutorial might contain.

##Start the app
Open your terminal and cd to the root of the todo app project. 

In the terminal, run:

    git checkout todo-app

This will check out the finished application as seen from the Youtube tutorial.

Then run:

    npm install

This will install the project's dependencies that you can find in the root file "package.json". 

If you're not familiar with the commando go to [npmjs.com](https://docs.npmjs.com/getting-started/what-is-npm) where you can learn how to install node package manager that is used for running the command. Installing node page manager is the only thing you'll need for this tutorial, which is described in the second part in the linked page.

In the terminal, now run:

    webpack -d --progress --colors --watch

This will setup a file watcher that will re-bundle your JavaScript when you make changes in the files. Keep this terminal window open while developing. TypeScript can leave errors in here. Try making a TypeScript error and you will see how it looks like.

If you're not familiar with webpack you can read all about it at [webpack.github.io](https://webpack.github.io/). You will not need to know how it works for this tutorial.

Open a new terminal window and cd to the project root again. Keep the old terminal window open. In the new terminal window run:

    webpack-dev-server

This will start a developer web server for you to use.

Open your browser and go to [localhost:8080](localhost:8080). You should now be able to see the working application.
