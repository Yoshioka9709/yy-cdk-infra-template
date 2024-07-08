import { Construct } from 'constructs'

import { Env, EnvCode, systemEnvs } from '@/env'

export const getEnvCode = (scope: Construct): EnvCode => {
  const envcode = scope.node.tryGetContext('envcode')
  if (envcode === '' || envcode == null) {
    throw new Error('env is not defined')
  }
  return envcode as EnvCode
}

export const getUpperEnvCode = (scope: Construct): string => {
  const envCode = getEnvCode(scope)
  return envCode.charAt(0).toUpperCase() + envCode.slice(1).toLowerCase()
}

export const getEnv = (scope: Construct): Env => {
  const envcode = getEnvCode(scope)
  return systemEnvs[envcode]
}
