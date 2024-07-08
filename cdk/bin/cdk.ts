#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { EcrStack } from '../lib/ecr-stack';
import { ApiStack } from '../lib/api-stack';
import { DynamoDBStack } from '../lib/dynamodb-stack';

import { getStackName } from '@/utils/cdk'

const app = new cdk.App();

const ENV_AP = {
  account: '049527945948',
  region: 'ap-northeast-1',
}

const envCode = app.node.tryGetContext('envcode')

/**
 * 全環境共通のスタック
 */
if (envCode == '' || envCode == null) {
  new EcrStack(app, getStackName(app, 'Ecr'), { env: ENV_AP })
} else {
  /**
   * 環境毎にスタックを作成
   */
  new ApiStack(app, getStackName(app, 'Api'), { env: ENV_AP })
  new DynamoDBStack(app, getStackName(app, 'DynamoDB'), { env: ENV_AP })
}

