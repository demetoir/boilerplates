echo 'clean bundle...'
rm -r ./elastic-beanstalk/bundle

echo 'build...'
npm run build

echo 'bundling...'
mkdir ./elastic-beanstalk/bundle
cp -r ./dist ./elastic-beanstalk/bundle/dist
cp ./package.json ./elastic-beanstalk/bundle
cp ./yarn.lock ./elastic-beanstalk/bundle
cp ./ecosystem.config.js ./elastic-beanstalk/bundle
