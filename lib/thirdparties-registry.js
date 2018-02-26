/**
 * This file is part of pigalle.registries.thirdparties
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module thirdparties-registry
 * @description A registry to store third party libraries then use them in a Pigalle application.
 * @example
 *
 * const {ThirdPartiesRegistry} = require('@pigalle/registries.thirdparties')
 * const {ThirdPartyPlugin} = require('@pigalle/plugins.thirdparty')
 *
 * // Create a new registry to store third parties.
 * const registry = ThirdPartiesRegistry.factory()
 *
 * // Add express.js to the registry
 * registry.set(ThirdPartyPlugin.factory('express'))
 *
 * // Add restify to the registry
 * registry.set('http-backend', ThirdPartyPlugin.factory('restify'))
 *
 * // Another way to add restify to registry
 * registry.set('restify')
 *
 * // Another way ;-)
 * registry.set('http-backend', 'restify')
 *
 */

const {PluginsRegistry} = require('@pigalle/registries.plugins')
const {ThirdPartyPlugin} = require('@pigalle/plugins.thirdparty')

class ThirdPartiesRegistry extends PluginsRegistry {
  constructor (...args) {
    super(ThirdPartyPlugin, ...args)
  }
}

module.exports = {}
module.exports.ThirdPartiesRegistry = ThirdPartiesRegistry
