import { createRouter, createWebHistory } from 'vue-router';

import { designRoutes } from '@/Design/_routes/design.routes.js';
import { codeExportRoutes } from '@/CodeExport/_routes/codeExport.routes.js';
import { aboutRoutes } from '@/About/_routes/about.routes.js';

const routes = [
  {
    path: '/',
    component: () => import('@/_layouts/Main.vue'),
    children: [
      ...designRoutes,
      ...codeExportRoutes,
      ...aboutRoutes,
      { 
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/Shared/_views/NotFound.vue')
      }
    ]
  }  
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // base directory option now here createWebHistory('/base-directory/'),
  routes
});

router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] }
}).href
