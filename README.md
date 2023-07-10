# CSA Website

Source of the old https://www.compscia.com website.

## Getting Started

 1. Install the latest version of [Docker](https://docker.com)
 2. Clone the repository
 3. Run `docker compose up -d` in the project directory
 4. Connect to the running container on `http://localhost:9090` and have fun!


## Contributing
 1. Fork the project [here](https://github.com/hccdit/hccdit.github.io/fork) on Github 
 2. Clone and checkout the `develop` branch:
    ```bash
    git clone --single-branch -b develop https://github.com/hccdit/hccdit.github.io
    ```
 3. Create a branch off the `develop` branch for your feature:
    ```bash
    git checkout -b new-feature-name
    ```
 4. Run tests if available! (Feel free to write tests 😉)
 5. Commit changes:
    ```bash
    git commit -m "Add new feature"
    ```
 6. Push changes to your fork:
    ```bash
    git push origin my-feature-feature
    ```
 7. Create a Pull Request into this project's `develop` branch

## Maintaining

Since GitHub deters groups from using long-running development branches, workarounds are needed to maintain this structure without issues.

We would much rather prefer not to move to their competitor so the following steps allow us to keep a simple flow while using their platform:
 1. Clone and checkout the `main` branch:
    ```bash
    git clone -b main https://github.com/hccdit/hccdit.github.io
    ```
 2. Merge the `develop` branch into `main`:
    ```bash
    git merge develop --ff-only
    ```
 3. Push changes to origin:
    ```bash
    git push
    ```
 4. Check https://hccdit.github.io to see the release live!