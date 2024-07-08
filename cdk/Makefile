PROFILE ?= y.yoshioka
export AWS_PROFILE ?= ${PROFILE}

# 型チェック
.PHONY: tsc
tsc:
	npx tsc --noEmit

.PHONY: bootstrap
bootstrap:
	npx cdk bootstrap

# Stackを作成
.PHONY: deploy
deploy:
	npx cdk deploy ${STACK} -c envcode=${ENVCODE}

# Stackを削除
.PHONY: destroy
destroy:
	npx cdk destroy ${STACK} -c envcode=${ENVCODE}

# Stackのdiffを取得
.PHONY: diff
diff:
	npx cdk diff ${STACK} -c envcode=${ENVCODE}

# 全Stackのdiffを取得
.PHONY: diff-all
diff-all:
	npx cdk diff --all -c envcode=${ENVCODE}

# Dev環境のStackを作成
.PHONY: deploy-dev
deploy-dev:
	$(MAKE) deploy ENVCODE=dev STACK=Yy-Cdk-Infra-Template-Dev-${STACK_NAME}

# Dev環境のStackを削除
.PHONY: destroy-dev
destroy-dev:
	$(MAKE) destroy ENVCODE=dev STACK=Yy-Cdk-Infra-Template-Dev-${STACK_NAME}

# Dev環境のdiffを取得
.PHONY: diff-dev
diff-dev:
	$(MAKE) diff ENVCODE=dev STACK=Yy-Cdk-Infra-Template-Dev-${STACK_NAME}

# Dev環境の全Stackのdiffを取得
.PHONY: diff-all-dev
diff-all-dev:
	$(MAKE) diff-all ENVCODE=dev

# Prd環境のStackを作成
.PHONY: deploy-prd
deploy-prd:
	$(MAKE) deploy ENVCODE=prd STACK=YyCdkInfraTemplate-Prd-${STACK_NAME}

# Prd環境のStackを削除
.PHONY: destroy-prd
destroy-prd:
	$(MAKE) destroy ENVCODE=prd STACK=YyCdkInfraTemplate-Prd-${STACK_NAME}

# Prd環境のdiffを取得
.PHONY: diff-prd
diff-prd:
	$(MAKE) diff ENVCODE=prd STACK=YyCdkInfraTemplate-Prd-${STACK_NAME}

# Prd環境の全Stackのdiffを取得
.PHONY: diff-all-prd
diff-all-prd:
	$(MAKE) diff-all ENVCODE=prd