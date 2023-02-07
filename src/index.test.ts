import { isTab } from './index'

describe('index', () => {
  describe('isTab', () => {
    it('returns true if given a tab', () => {
      expect(isTab('overviewTab')).toBeTruthy()
    })

    it('returns false if not given a tab', () => {
      expect(isTab('overview')).toBeFalsy()
    })
  })
})
