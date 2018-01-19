import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TestCentauriBlogModule } from './blog/blog.module';
import { TestCentauriEntryModule } from './entry/entry.module';
import { TestCentauriTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        TestCentauriBlogModule,
        TestCentauriEntryModule,
        TestCentauriTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestCentauriEntityModule {}
