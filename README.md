# yy-cdk-infra-template

## 手動作成のリソース

### Secret Manager

## デプロイ手順

### ECR Stack デプロイ

```sh
$ make diff
$ make deploy
```

### DynamoDB Stack デプロイ

```sh
make diff-prd STACK_NAME=DynamoDB ENVCODE=prd
make deploy-prd STACK_NAME=DynamoDB ENVCODE=prd
```

### Secret Manager に環境変数追加

- Secret Name
    - yy-go-backend-template/api/dotenv
- Plain Text

```json
{
    "ENVCODE":"prd",
    "PROJECT_NAME":"yy-go-backend-template",
    "PORT":"12340",
    "DEBUG_ENABLED":"true",
    "ERROR_STACK_ENABLED":"true",
    "ON_TRACE":"true",
    "GRAPHQL_QUERY_LOG":"false",
    "CORS_ALLOW_ORIGINS":"http://*",
    "CORS_ALLOW_METHODS":"GET,POST,PUT,DELETE,UPDATE,OPTIONS",
    "CORS_ALLOW_HEADERS":"Origin,Content-Type,Content-Length,Accept-Encoding,X-CSRF-Token,Authorization",
    "CORS_EXPOSE_HEADERS":"Content-Length,x-maintenance",
    "CORS_CREDENTIALS":"true",
    "CORS_ALLOW_WILDCARD":"true",
    "CORS_MAX_AGE":"24h",
    "AWS_DYNAMODB_ENDPOINT":""
}
```

### GitHub Actions で ECR にイメージプッシュ

- https://github.com/Yoshioka9709/yy-go-backend-template/actions/workflows/deploy.yml

### Api Stack デプロイ

```sh
make diff-prd STACK_NAME=Api ENVCODE=prd
make deploy-prd STACK_NAME=Api ENVCODE=prd
```