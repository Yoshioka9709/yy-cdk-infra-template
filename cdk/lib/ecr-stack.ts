import { Stack, StackProps, aws_ecr } from 'aws-cdk-lib'
import { Construct } from 'constructs'

import { API_PROJECT_KEY_LOWER } from '@/constants'
import { getLogicalId } from '@/utils/cdk'

export class EcrStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    // API リポジトリ
    new aws_ecr.Repository(this, getLogicalId(this, 'ApiRepository'), {
      repositoryName: `${API_PROJECT_KEY_LOWER}/api`,
      imageScanOnPush: true,
      lifecycleRules: [
        {
          // TODO: 暫定で新しいものから3つだけ Image を残すようにするが、詳細な設定を行う
          rulePriority: 1,
          description: 'Expire untagged images older than 30 days',
          tagStatus: aws_ecr.TagStatus.ANY,
          maxImageCount: 3,
        },
      ],
    })
  }
}