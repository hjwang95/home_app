### Step of deployment after edited
a) Github
    1. Github init & clone
        Command: 
            git init; 
            git clone <http url>
            cd <folder>  Go inside the folder!!
    2. Change code (visual Studio Code - JavaScript)
    3. Go inside the folder!!
    4. Add commit
        Command: 
            git add *;
            git commit -m "MSG";
            git push;

b) React build
    Command:
        npm run deploy;
    1. Some possible failure
        a> Failed to get remote.origin.url (task must either be run in a git repository with a configured origin remote or must be configured with the "repo" option).
        Command:
            git remote -v;
            git remote add origin https://github.com/hjwang95/home_app.git



