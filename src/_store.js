
import { createStore } from 'vuex';

import { navigation } from '@/Shared/_store/navigation.module';
import { alerts } from '@/Shared/_store/alerts.module';
import { settings } from '@/Settings/_store/settings.module';
import { design } from '@/Design/_store/design.module';
import { codeExport } from '@/CodeExport/_store/codeExport.module';

export const store = createStore({
  modules: {
    navigation: navigation,
    alerts: alerts,
    settings: settings,
    design: design,
    codeExport: codeExport
  }
});