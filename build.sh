#!/bin/sh

TMP_DIR=$(mktemp -d)

# Create bundle
npm run build
git commit -am "Create new bundle"

# Copy build to temp folder
cp -r ./build/ $TMP_DIR/build
BUILD_FILES=`ls ./build`

# Wipe out current site
git checkout master
git rm -rf .
mv .git $TMP_DIR/.git
rm -rf .
mv $TMP_DIR/.git .git

# Move new bundle to master
mv -f $TMP_DIR/build/** ./

# Create CNAME
echo "astrocoders.com" > CNAME
git add CNAME
git add $BUILD_FILES

# Commit and push changes
git commit -m "New bundle"
echo "\033[1;31mPushing new site to GitHub repo\n\033[0m"
git push --force origin master

# Get back to develop
git checkout develop
