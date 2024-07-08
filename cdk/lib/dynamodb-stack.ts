import { Construct } from 'constructs'
import {
  aws_apigateway,
  aws_ecr,
  aws_lambda,
  Duration,
  aws_dynamodb,
  Stack,
  StackProps,
  RemovalPolicy,
} from 'aws-cdk-lib';

import { getLogicalId } from '@/utils/cdk'
import { getUpperEnvCode } from '@/utils/env'

export class DynamoDBStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    // Users テーブルを作成
    new aws_dynamodb.Table(this, getLogicalId(this,'UsersTable'), {
      partitionKey: {
        name: 'PK',
        type: aws_dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: 'ID',
        type: aws_dynamodb.AttributeType.STRING,
      },
      timeToLiveAttribute: 'TTL',
      tableName: `Users-${getUpperEnvCode(this)}`,
      removalPolicy: RemovalPolicy.DESTROY,
      billingMode: aws_dynamodb.BillingMode.PAY_PER_REQUEST,
    });

    // Todos テーブルを作成
    new aws_dynamodb.Table(this, getLogicalId(this, 'TodosTable'), {
      partitionKey: {
        name: 'PK',
        type: aws_dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: 'ID',
        type: aws_dynamodb.AttributeType.STRING,
      },
      timeToLiveAttribute: 'TTL',
      tableName: `Todos-${getUpperEnvCode(this)}`,
      // NOTE: 本番のみ `cdk destroy` でテーブルを削除しない
      removalPolicy: RemovalPolicy.DESTROY,
      billingMode: aws_dynamodb.BillingMode.PAY_PER_REQUEST,
    });
  }
}