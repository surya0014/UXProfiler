if [ ! "$1" ] || [ ! "$2" ] || [ ! "$3" ] || [ ! "$4" ]
then
    echo -e "usage: ./docker-deploy.sh <adminuser> <adminpass> <dbuser> <dbpass> \nex: ./docker-deploy.sh admin admin leap-api leap-api"
    exit 1
fi
export MONGO_ROOT_USERNAME=$1
export MONGO_ROOT_PASSWORD=$2
export MONGO_DB_USERNAME=$3
export MONGO_DB_PASSWORD=$4
cat  docker-compose.yml | envsubst | docker-compose -f - up --build --remove-orphans $5