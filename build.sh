#!/bin/sh

echo "\033[1;33m What have you done in astrocoders landing page?"

read update

rm -rf ../astrocoders/*.html
rm -rf ../astrocoders/*/
harp compile
mv www/* ../astrocoders/
rm -rf www
cd ../astrocoders
git pull
git add --all
git commit -m "$update"
echo "\033[1;31mPushing new site to GitHub repo\n\033[0m"
git push
