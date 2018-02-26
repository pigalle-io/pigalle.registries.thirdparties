/**
 * This file is part of pigalle.registries.thirdparties
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */


/* eslint-env mocha */

require('should')

const {ThirdPartiesRegistry} = require('../lib/thirdparties-registry')

describe('Class {ThirdPartiesRegistry}', () => {
  it('should be a function', () => {
    (ThirdPartiesRegistry).should.be.a.Function()
  })
})

describe('Create a instance of {ThirdPartiesRegistry} using <factory> method', () => {
  it('should be an object', () => {
    (ThirdPartiesRegistry.factory()).should.be.an.Object()
  })

  it('should be an instance of {ThirdPartiesRegistry}', () => {
    (ThirdPartiesRegistry.factory()).should.be.an.instanceOf(ThirdPartiesRegistry)
  })

  it('should have an internal property named <type> equal to "registry"', () => {
    (ThirdPartiesRegistry.factory().type()).should.be.equal('registry')
  })
})
