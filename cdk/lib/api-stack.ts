import { Construct } from 'constructs'
import {
  aws_ecr,
  aws_iam,
  Stack,
  StackProps,
} from 'aws-cdk-lib';

import * as apprunner from "@aws-cdk/aws-apprunner-alpha";

import { API_PROJECT_KEY_LOWER } from '@/constants'

export class ApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    // ECR リポジトリを取得
    const apiRepo = aws_ecr.Repository.fromRepositoryName(
      this,
      'ApiRepo',
      `${API_PROJECT_KEY_LOWER}/api`
    );

    const appRunnerRole = new aws_iam.Role(this, 'BastionRole', {
      assumedBy: new aws_iam.ServicePrincipal('tasks.apprunner.amazonaws.com'),
    });
    appRunnerRole.addManagedPolicy(
      aws_iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonDynamoDBFullAccess')
    );

    // App Runner 作成
    new apprunner.Service(this, 'AppRunnerService', {
      source: apprunner.Source.fromEcr({
        imageConfiguration: {
          port: 8080,
        },
        repository: apiRepo,
        tag: 'latest',
      }),
      instanceRole: appRunnerRole,
    })
  }
}