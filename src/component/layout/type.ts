

import { NextComponentType, NextPage, NextPageContext } from 'next';
import MainLayout from './index';
import { AppProps } from 'next/app';


export const Layouts = {
    Default: MainLayout
}


export type Layoutkeys = keyof typeof Layouts;

export type SitePage<P = {}, IP = P> = NextPage<P, IP> & { Layout?: Layoutkeys };

export type SiteProps = AppProps & {
    Component: NextComponentType<NextPageContext,any,any> & {
        Layout:Layoutkeys
    }
}