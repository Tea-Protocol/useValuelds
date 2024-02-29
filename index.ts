
import React from 'react'

/**
 * 获取值中的 value 属性，{ value: string, ...otherProps }
 * @param value
 * @returns
 */
const useValueIds = (value: {
  value: any;
  [key: string]: any;
}) => {

  const valueIds = React.useMemo(() => {
    if (!value) return []
    if (Array.isArray(value)) {
      return value.map(item => item.value)
    }
    if (typeof value === 'object') {
      return value.value
    }
    return []
  }, [value])

  return valueIds
}

export default useValueIds
