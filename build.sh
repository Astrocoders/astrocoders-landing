#!/bin/sh

echo "What have you update in astrocoders landing page?"

read update

rm -rf ../astrocoders/*.html
rm -rf ../astrocoders/*/
harp compile
mv www/* ../astrocoders/
cd ../astrocoders
git add --all
git commit -m "Update $update"

