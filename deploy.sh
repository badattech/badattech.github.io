#!/usr/bin/env sh

# abort on errors
set -e

# build
npm i -g vuepress
npm run build

# navigate into the build output directory
cd blog/.vuepress/dist
git config --global user.email "github-actions@example.com"
git config --global user.name "GitHubActions[Bot]"

git init
git remote set-url origin https://alterfo:$1@github.com/alterfo/github.io.git
git add -A
git commit -m 'deploy'

git push -f https://github.com/alterfo/alterfo.github.io.git master

cd -