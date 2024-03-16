import {createContext} from 'react';

type ModuleContextType = {
  pageType?: 'blogPost';
  addPortableTextModuleMargin?: boolean;
};

export const ModuleContext = createContext<ModuleContextType>({});
