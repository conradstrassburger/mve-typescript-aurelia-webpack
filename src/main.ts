import { Aurelia, PLATFORM } from 'aurelia-framework';

export async function configure(au: Aurelia) {
    au.use.standardConfiguration();
    au.use.developmentLogging();

    await au.start();
    await au.setRoot(PLATFORM.moduleName('app')); // Note the PLATFORM.moduleName
}