export type EnvCode = 'dev' | 'stg' | 'prd'

export type Env = {
  envCode: EnvCode
}

const devEnv: Env = {
  envCode: 'dev',
}

const stgEnv: Env = {
  envCode: 'stg',
}

const prdEnv: Env = {
  envCode: 'prd',
}

export const systemEnvs = {
  dev: devEnv,
  stg: stgEnv,
  prd: prdEnv,
}
