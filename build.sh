#!/bin/sh

CMMT_MSG=$(git log -1 --pretty=%B)
echo "\033[1;33mWhat have you done in astrocoders landing page?\033[0m"
read $CMMT_MSG

rm -rf ../astrocoders/*.html
rm -rf ../astrocoders/*/
harp compile
mv www/* ../astrocoders/
rm -rf www
cd ../astrocoders
git add --all
git commit -m "$CMMT_MSG"
echo "\033[1;31mPushing new site to GitHub repo\n\033[0m"
git push
