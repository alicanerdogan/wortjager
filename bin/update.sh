BASEDIR=$(dirname "$0")
source $BASEDIR/env.sh

git reset --hard origin/master
git pull origin master

docker build bin/$APPDIR -t :latest && \
docker run -v $APPDIR:/root/apps $BUILDER_IMAGE_TAG:latest bash -c "cd /root/apps && yarn && yarn build"

cp $APPDIR/build/* /var/www/html/public/wortjager
