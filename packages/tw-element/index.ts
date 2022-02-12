import installer from './defaults'
export * from '@tw-element/components'
export * from '@tw-element/directives'
export * from '@tw-element/hooks'
export * from '@tw-element/tokens'
export { makeInstaller } from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer
