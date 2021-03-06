BASEDIR=$(dirname "$0")
source $BASEDIR/env.sh

git reset --hard origin/master
git pull origin master

docker build bin/ -t $BUILDER_IMAGE_TAG && \
docker run -v $APPDIR:/root/apps $BUILDER_IMAGE_TAG bash -c "cd /root/apps && yarn && yarn build"

cp $APPDIR/build/* /var/www/html/public/wortjager
