#!/bin/sh

echo "\033[1;33m What have you done to the site?"
read update

npm run build
git commit -am "Create new bundle"

TMP_DIR=../tmp/astrocoders-landing
mkdir $TMP_DIR
cp ./build/** $TMP_DIR -r
buildFiles=`ls ./build`

git checkout master

git rm -rf .
mv $TMP_DIR/** ./ -f
echo "astrocoders.com" > CNAME
git add CNAME
git add $buildFiles
git commit -m "$update"

echo "\033[1;31mPushing new site to GitHub repo\n\033[0m"
git push origin master --force
git checkout develop

rm -rf $TMP_DIR
