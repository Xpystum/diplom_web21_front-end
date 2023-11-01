git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
git fetch --all
git pull --all

добавление иконок в папку \src\components\Icons\
@fortawesome V 6.4.2,
