if [ -z "$GIT_PAT" ]
then 
    echo "\$GIT_PAT must be set"
    exit
fi
GIT_USER=delormej
ACR_NAME=wthAcr

az acr task create \
    --registry $ACR_NAME \
    --name buildtrucksweb \
    --image trucks-web:v0.0.{{.Run.ID}} \
    --context https://github.com/$GIT_USER/trucks-web.git \
    --file Dockerfile \
    --git-access-token $GIT_PAT