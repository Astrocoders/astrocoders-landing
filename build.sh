#!/bin/sh

echo "What have you done in astrocoders landing page?"

read update

rm -rf ../astrocoders/*.html
rm -rf ../astrocoders/*/
harp compile
mv www/* ../astrocoders/
rm -rf www
cd ../astrocoders
git add --all
git commit -m "$update"
git push

