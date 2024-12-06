import { expect } from 'chai'
import { DocumentDomainInjection } from '../../lib/document-domain-injection'

describe('DocumentDomainInjection', () => {
  /*
  describe('when injectDocumentDomain config is true')
  */
  describe('when injectDocumentDomain config is false', () => {
    const injectDocumentDomain = false

    describe('and testingType is e2e', () => {
      const testingType = 'e2e'

      let injection: DocumentDomainInjection

      beforeEach(() => {
        injection = new DocumentDomainInjection({
          injectDocumentDomain,
          testingType,
        })
      })

      describe('.getHostname', () => {
        describe('For localhost', () => {
          it('returns localhost', () => {
            expect(injection.getHostname('http://localhost:8080')).to.eq('localhost')
          })
        })
      })
    })
  })
})
