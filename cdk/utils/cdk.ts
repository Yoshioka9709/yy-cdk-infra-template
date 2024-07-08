import { Construct } from 'constructs'

import { PROJECT_KEY_CAMEL, PROJECT_KEY_LOWER } from '@/constants'
import { FirstLowerString, FirstUpperString } from '@/types'
import { getEnvCode, getUpperEnvCode } from '@/utils/env'

/**
 * スタック名を取得する
 */
export const getStackName = (
  scope: Construct,
  originalName: FirstUpperString,
) => {
  try {
    const upperEnvCode = getUpperEnvCode(scope)
    return `${PROJECT_KEY_CAMEL}-${upperEnvCode}-${originalName}`
  } catch {
    return `${PROJECT_KEY_CAMEL}-${originalName}`
  }
}

/**
 * リソース名を取得する
 */
export const getResourceName = (
  scope: Construct,
  originalName: FirstLowerString,
) => {
  try {
    const envCode = getEnvCode(scope)
    return `${PROJECT_KEY_LOWER}-${envCode}-${originalName}`
  } catch {
    // 全環境共通の場合
    return `${PROJECT_KEY_LOWER}-${originalName}`
  }
}

/**
 * 論理IDを取得する
 */
export const getLogicalId = (scope: Construct, originalName: string) => {
  try {
    const upperEnvCode = getUpperEnvCode(scope)
    return `${PROJECT_KEY_CAMEL}${upperEnvCode}${originalName}`
  } catch {
    // 全環境共通の場合
    return `${PROJECT_KEY_CAMEL}${originalName}`
  }
}
