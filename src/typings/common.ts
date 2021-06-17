// import { Store } from 'vuex'
import VueRouter from 'vue-router'
import Vue, { CreateElement, VNode } from 'vue'


export interface IInitPluginOptions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly Vue: typeof Vue;
  App?: Vue;
  // readonly store: Store<unknown>;
  readonly router: VueRouter;
  readonly app: Record<string, unknown> & Readonly<{
    name: string;
    // store: Store<unknown>;
    router: VueRouter;
    render: (h: CreateElement) => VNode;
  }>;
}

export interface IInitPlugin {
  (options: IInitPluginOptions): void;
}

export interface ICreateRoutesOptions {
  router: VueRouter;
  // store: Store<unknown>;
}

export interface IRegisterModule {
  installed?: boolean;
  (o: ICreateRoutesOptions): void;
}
