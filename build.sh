#!/bin/sh

TMP_DIR=$(mktemp -d)

echo "\033[1;33m What have you done to the site?\033[0m"
read update

# Create bundle
npm run build
git commit -am "Create new bundle"

# Copy build to temp folder
cp ./build/ $TMP_DIR/build -r
BUILD_FILES=`ls ./build`

# Wipe out current site
git checkout master
git rm -rf .

# Move new bundle to master
mv $TMP_DIR/build/** ./ -f

# Create CNAME
echo "astrocoders.com" > CNAME
git add CNAME
git add $BUILD_FILES

# Commit and push changes
git commit -m "$update"
echo "\033[1;31mPushing new site to GitHub repo\n\033[0m"
git push origin master --force

# Get back to develop
git checkout develop
